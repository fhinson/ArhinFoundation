import { describe, it, expect } from 'vitest'
import { contactFormSchema, newsletterSchema } from './validations'

const validData = {
  name: 'Jane Doe',
  email: 'jane@example.com',
  organization: 'NYC Youth Services',
  reason: 'grantee' as const,
  message: 'We would love to partner on therapy access.',
  honeypot: '',
  captcha: '7',
}

describe('contactFormSchema', () => {
  it('accepts valid form data', () => {
    const result = contactFormSchema.safeParse(validData)
    expect(result.success).toBe(true)
  })

  // ---------- name ----------
  it('rejects empty name', () => {
    const result = contactFormSchema.safeParse({ ...validData, name: '' })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Name is required')
    }
  })

  it('rejects name over 100 characters', () => {
    const result = contactFormSchema.safeParse({ ...validData, name: 'a'.repeat(101) })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Name is too long')
    }
  })

  // ---------- email ----------
  it('rejects invalid email', () => {
    const result = contactFormSchema.safeParse({ ...validData, email: 'not-an-email' })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Invalid email address')
    }
  })

  it('rejects missing email', () => {
    const result = contactFormSchema.safeParse({ ...validData, email: '' })
    expect(result.success).toBe(false)
  })

  // ---------- organization ----------
  it('rejects empty organization', () => {
    const result = contactFormSchema.safeParse({ ...validData, organization: '' })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Organization is required')
    }
  })

  it('rejects organization over 100 characters', () => {
    const result = contactFormSchema.safeParse({ ...validData, organization: 'x'.repeat(101) })
    expect(result.success).toBe(false)
  })

  // ---------- reason ----------
  it('accepts all valid reason values', () => {
    for (const reason of ['grantee', 'partner', 'event', 'other'] as const) {
      const result = contactFormSchema.safeParse({ ...validData, reason })
      expect(result.success).toBe(true)
    }
  })

  it('rejects invalid reason value', () => {
    const result = contactFormSchema.safeParse({ ...validData, reason: 'spam' })
    expect(result.success).toBe(false)
  })

  // ---------- message ----------
  it('rejects message shorter than 10 characters', () => {
    const result = contactFormSchema.safeParse({ ...validData, message: 'Hi' })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Message must be at least 10 characters')
    }
  })

  it('rejects message over 500 characters', () => {
    const result = contactFormSchema.safeParse({ ...validData, message: 'a'.repeat(501) })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Message must be 500 characters or less')
    }
  })

  // ---------- honeypot ----------
  it('rejects non-empty honeypot (bot detection)', () => {
    const result = contactFormSchema.safeParse({ ...validData, honeypot: 'gotcha' })
    expect(result.success).toBe(false)
  })

  // ---------- captcha ----------
  it('rejects empty captcha', () => {
    const result = contactFormSchema.safeParse({ ...validData, captcha: '' })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Please solve the math problem')
    }
  })

  // ---------- edge cases ----------
  it('accepts message at exactly 10 characters', () => {
    const result = contactFormSchema.safeParse({ ...validData, message: 'a'.repeat(10) })
    expect(result.success).toBe(true)
  })

  it('accepts message at exactly 500 characters', () => {
    const result = contactFormSchema.safeParse({ ...validData, message: 'a'.repeat(500) })
    expect(result.success).toBe(true)
  })

  it('accepts name at exactly 100 characters', () => {
    const result = contactFormSchema.safeParse({ ...validData, name: 'a'.repeat(100) })
    expect(result.success).toBe(true)
  })

  it('collects multiple field errors at once', () => {
    const result = contactFormSchema.safeParse({
      name: '',
      email: 'bad',
      organization: '',
      reason: 'invalid',
      message: 'short',
      honeypot: '',
      captcha: '',
    })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues.length).toBeGreaterThanOrEqual(4)
    }
  })
})

describe('newsletterSchema', () => {
  it('accepts a valid email', () => {
    const result = newsletterSchema.safeParse({ email: 'jane@example.com' })
    expect(result.success).toBe(true)
  })

  it('rejects an invalid email', () => {
    const result = newsletterSchema.safeParse({ email: 'not-an-email' })
    expect(result.success).toBe(false)
  })

  it('rejects an empty email', () => {
    const result = newsletterSchema.safeParse({ email: '' })
    expect(result.success).toBe(false)
  })

  it('rejects missing email field', () => {
    const result = newsletterSchema.safeParse({})
    expect(result.success).toBe(false)
  })
})
