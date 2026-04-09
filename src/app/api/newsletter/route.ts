import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { newsletterSchema } from '@/lib/validations'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = newsletterSchema.parse(body)

    const { error } = await resend.contacts.create({ email })

    if (error) {
      // "already exists" is not a real error — they're subscribed
      if (error.message?.toLowerCase().includes('already exists')) {
        return NextResponse.json({
          success: true,
          message: "You're already subscribed. Thank you!",
        })
      }
      throw error
    }

    return NextResponse.json({
      success: true,
      message: "You're subscribed. Thank you!",
    })
  } catch (error) {
    console.error('Newsletter signup error:', error)

    if (error instanceof Error && 'issues' in error) {
      // @ts-ignore
      const message = error.issues?.[0]?.message || 'Invalid email address'
      return NextResponse.json({ error: message }, { status: 400 })
    }

    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 },
    )
  }
}
