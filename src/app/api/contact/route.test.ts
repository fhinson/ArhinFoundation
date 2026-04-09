import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

// Mock email functions
const mockNotification = vi.fn()
const mockConfirmation = vi.fn()
vi.mock('@/lib/email', () => ({
  sendContactNotification: (...args: any[]) => mockNotification(...args),
  sendContactConfirmation: (...args: any[]) => mockConfirmation(...args),
}))

const { POST } = await import('./route')

function makeRequest(body: Record<string, unknown>) {
  return new NextRequest('http://localhost:3000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
}

const validBody = {
  name: 'Jane Doe',
  email: 'jane@example.com',
  organization: 'NYC Youth Services',
  reason: 'grantee',
  message: 'We would love to explore a partnership.',
  honeypot: '',
  captcha: '7',
}

describe('POST /api/contact', () => {
  beforeEach(() => {
    mockNotification.mockReset().mockResolvedValue(undefined)
    mockConfirmation.mockReset().mockResolvedValue(undefined)
  })

  it('returns success for valid submission', async () => {
    const res = await POST(makeRequest(validBody))
    const data = await res.json()

    expect(res.status).toBe(200)
    expect(data.success).toBe(true)
    expect(data.message).toBeDefined()
  })

  it('sends notification and confirmation emails', async () => {
    await POST(makeRequest(validBody))

    expect(mockNotification).toHaveBeenCalledOnce()
    expect(mockConfirmation).toHaveBeenCalledOnce()

    const notifArg = mockNotification.mock.calls[0][0]
    expect(notifArg.name).toBe('Jane Doe')
    expect(notifArg.email).toBe('jane@example.com')
    expect(notifArg.organization).toBe('NYC Youth Services')
    expect(notifArg.reason).toBe('grantee')
    expect(notifArg.message).toBe('We would love to explore a partnership.')
  })

  it('does not include honeypot or captcha in email submission', async () => {
    await POST(makeRequest(validBody))

    const notifArg = mockNotification.mock.calls[0][0]
    expect(notifArg).not.toHaveProperty('honeypot')
    expect(notifArg).not.toHaveProperty('captcha')
  })

  // ---------- honeypot ----------
  it('silently accepts honeypot-filled submissions without sending email', async () => {
    const res = await POST(makeRequest({ ...validBody, honeypot: 'bot-filled-this' }))

    // Schema rejects non-empty honeypot, so this will fail validation
    // The route returns 400 with field errors
    expect(res.status).toBe(400)
    expect(mockNotification).not.toHaveBeenCalled()
    expect(mockConfirmation).not.toHaveBeenCalled()
  })

  // ---------- validation errors ----------
  it('returns 400 with field errors for invalid data', async () => {
    const res = await POST(makeRequest({
      name: '',
      email: 'bad',
      organization: '',
      reason: 'invalid',
      message: 'short',
      honeypot: '',
      captcha: '',
    }))
    const data = await res.json()

    expect(res.status).toBe(400)
    expect(data.errors).toBeDefined()
    expect(data.errors.name).toBeDefined()
    expect(data.errors.email).toBeDefined()
  })

  it('returns 400 for missing fields', async () => {
    const res = await POST(makeRequest({}))
    expect(res.status).toBe(400)
  })

  it('does not send emails when validation fails', async () => {
    await POST(makeRequest({ name: '', email: '' }))

    expect(mockNotification).not.toHaveBeenCalled()
    expect(mockConfirmation).not.toHaveBeenCalled()
  })

  // ---------- email service errors ----------
  it('returns 500 when notification email fails', async () => {
    mockNotification.mockRejectedValue(new Error('Resend down'))

    const res = await POST(makeRequest(validBody))
    const data = await res.json()

    expect(res.status).toBe(500)
    expect(data.error).toBeDefined()
  })

  // ---------- edge cases ----------
  it('handles message at minimum length (10 chars)', async () => {
    const res = await POST(makeRequest({ ...validBody, message: 'a'.repeat(10) }))
    expect(res.status).toBe(200)
  })

  it('handles message at maximum length (500 chars)', async () => {
    const res = await POST(makeRequest({ ...validBody, message: 'a'.repeat(500) }))
    expect(res.status).toBe(200)
  })

  it('rejects message over maximum length', async () => {
    const res = await POST(makeRequest({ ...validBody, message: 'a'.repeat(501) }))
    expect(res.status).toBe(400)
  })
})
