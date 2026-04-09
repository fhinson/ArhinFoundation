import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations'
import { sendContactNotification, sendContactConfirmation } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the form data
    const validatedData = contactFormSchema.parse(body)

    // Check honeypot (should be empty)
    if (validatedData.honeypot) {
      // Return success to avoid tipping off bots
      return NextResponse.json({ success: true })
    }

    const submission = {
      name: validatedData.name,
      email: validatedData.email,
      organization: validatedData.organization,
      reason: validatedData.reason,
      message: validatedData.message,
    }

    // Send notification email to you, then confirmation to the sender
    await sendContactNotification(submission)
    await sendContactConfirmation(submission)

    return NextResponse.json({
      success: true,
      message: "Thank you for your message. We'll get back to you soon.",
    })
  } catch (error) {
    console.error('Contact form error:', error)

    if (error instanceof Error && 'issues' in error) {
      // Zod validation errors
      const fieldErrors: Record<string, string> = {}
      // @ts-ignore
      error.issues?.forEach((issue: any) => {
        fieldErrors[issue.path[0]] = issue.message
      })
      return NextResponse.json({ errors: fieldErrors }, { status: 400 })
    }

    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 },
    )
  }
}
