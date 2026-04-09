import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

// Mock Resend at top level
const mockCreate = vi.fn()
vi.mock('resend', () => ({
  Resend: class MockResend {
    contacts = { create: mockCreate }
  },
}))

const { POST } = await import('./route')

function makeRequest(body: Record<string, unknown>) {
  return new NextRequest('http://localhost:3000/api/newsletter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
}

describe('POST /api/newsletter', () => {
  beforeEach(() => {
    mockCreate.mockReset()
  })

  it('subscribes a valid email', async () => {
    mockCreate.mockResolvedValue({ error: null })

    const res = await POST(makeRequest({ email: 'jane@example.com' }))
    const data = await res.json()

    expect(res.status).toBe(200)
    expect(data.success).toBe(true)
    expect(mockCreate).toHaveBeenCalledWith({ email: 'jane@example.com' })
  })

  it('handles already-subscribed contacts gracefully', async () => {
    mockCreate.mockResolvedValue({
      error: { message: 'Contact already exists' },
    })

    const res = await POST(makeRequest({ email: 'jane@example.com' }))
    const data = await res.json()

    expect(res.status).toBe(200)
    expect(data.success).toBe(true)
    expect(data.message).toContain('already subscribed')
  })

  it('returns 400 for invalid email', async () => {
    const res = await POST(makeRequest({ email: 'not-an-email' }))

    expect(res.status).toBe(400)
    expect(mockCreate).not.toHaveBeenCalled()
  })

  it('returns 400 for missing email', async () => {
    const res = await POST(makeRequest({}))

    expect(res.status).toBe(400)
  })

  it('returns 500 when Resend returns an unexpected error', async () => {
    mockCreate.mockResolvedValue({
      error: { message: 'Internal server error' },
    })

    const res = await POST(makeRequest({ email: 'jane@example.com' }))

    expect(res.status).toBe(500)
  })

  it('does not pass audienceId to Resend', async () => {
    mockCreate.mockResolvedValue({ error: null })

    await POST(makeRequest({ email: 'test@example.com' }))

    const callArg = mockCreate.mock.calls[0][0]
    expect(callArg).not.toHaveProperty('audienceId')
    expect(callArg).toEqual({ email: 'test@example.com' })
  })
})
