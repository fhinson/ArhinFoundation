import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock Resend before importing the module
const mockSend = vi.fn()
vi.mock('resend', () => {
  return {
    Resend: class MockResend {
      emails = { send: mockSend }
    },
  }
})

// Import after mocking
const { sendContactNotification, sendContactConfirmation } = await import('./email')

const sampleSubmission = {
  name: 'Jane Doe',
  email: 'jane@example.com',
  organization: 'NYC Youth Services',
  reason: 'grantee',
  message: 'We would love to explore a partnership.',
}

describe('sendContactNotification', () => {
  beforeEach(() => {
    mockSend.mockReset()
  })

  it('sends notification email with correct fields', async () => {
    mockSend.mockResolvedValue({ error: null })

    await sendContactNotification(sampleSubmission)

    expect(mockSend).toHaveBeenCalledOnce()
    const call = mockSend.mock.calls[0][0]
    expect(call.to).toBe('francis@arhin.org')
    expect(call.replyTo).toBe('jane@example.com')
    expect(call.subject).toContain('Jane Doe')
    expect(call.subject).toContain('Potential grantee or collaborator')
  })

  it('maps reason codes to human-readable labels', async () => {
    mockSend.mockResolvedValue({ error: null })

    await sendContactNotification({ ...sampleSubmission, reason: 'partner' })
    expect(mockSend.mock.calls[0][0].subject).toContain('Philanthropic partnership or event')

    await sendContactNotification({ ...sampleSubmission, reason: 'other' })
    expect(mockSend.mock.calls[1][0].subject).toContain('General inquiry')
  })

  it('falls back to raw reason string for unknown codes', async () => {
    mockSend.mockResolvedValue({ error: null })

    await sendContactNotification({ ...sampleSubmission, reason: 'custom-reason' })
    expect(mockSend.mock.calls[0][0].subject).toContain('custom-reason')
  })

  it('escapes HTML in user input', async () => {
    mockSend.mockResolvedValue({ error: null })

    await sendContactNotification({
      ...sampleSubmission,
      name: '<script>alert("xss")</script>',
      message: 'Hello & "goodbye" <world>',
    })

    const html = mockSend.mock.calls[0][0].html
    expect(html).not.toContain('<script>')
    expect(html).toContain('&lt;script&gt;')
    expect(html).toContain('&amp;')
    expect(html).toContain('&quot;goodbye&quot;')
    expect(html).toContain('&lt;world&gt;')
  })

  it('throws when Resend returns an error', async () => {
    mockSend.mockResolvedValue({ error: new Error('API key invalid') })

    await expect(sendContactNotification(sampleSubmission)).rejects.toThrow('API key invalid')
  })

  it('includes message content in the email body', async () => {
    mockSend.mockResolvedValue({ error: null })

    await sendContactNotification(sampleSubmission)

    const html = mockSend.mock.calls[0][0].html
    expect(html).toContain('We would love to explore a partnership.')
  })

  it('converts newlines in message to <br> tags', async () => {
    mockSend.mockResolvedValue({ error: null })

    await sendContactNotification({
      ...sampleSubmission,
      message: 'Line one\nLine two',
    })

    const html = mockSend.mock.calls[0][0].html
    expect(html).toContain('Line one<br>Line two')
  })
})

describe('sendContactConfirmation', () => {
  beforeEach(() => {
    mockSend.mockReset()
  })

  it('sends confirmation to the submitter email', async () => {
    mockSend.mockResolvedValue({ error: null })

    await sendContactConfirmation(sampleSubmission)

    expect(mockSend).toHaveBeenCalledOnce()
    const call = mockSend.mock.calls[0][0]
    expect(call.to).toBe('jane@example.com')
    expect(call.subject).toContain('We received your message')
  })

  it('includes the submitter name in the email body', async () => {
    mockSend.mockResolvedValue({ error: null })

    await sendContactConfirmation(sampleSubmission)

    const html = mockSend.mock.calls[0][0].html
    expect(html).toContain('Jane Doe')
  })

  it('does not throw when Resend returns an error (logs instead)', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    mockSend.mockResolvedValue({ error: new Error('Rate limited') })

    // Should not throw
    await sendContactConfirmation(sampleSubmission)

    expect(consoleSpy).toHaveBeenCalledWith(
      'Failed to send confirmation email:',
      expect.any(Error),
    )
    consoleSpy.mockRestore()
  })

  it('escapes HTML in the submitter name', async () => {
    mockSend.mockResolvedValue({ error: null })

    await sendContactConfirmation({
      ...sampleSubmission,
      name: '<img onerror="hack()">',
    })

    const html = mockSend.mock.calls[0][0].html
    expect(html).not.toContain('<img')
    expect(html).toContain('&lt;img')
  })
})
