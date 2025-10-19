import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the form data
    const validatedData = contactFormSchema.parse(body)
    
    // Check honeypot (should be empty)
    if (validatedData.honeypot) {
      console.log('Bot detected via honeypot')
      return NextResponse.json({ error: 'Bot detected' }, { status: 400 })
    }
    
    // Log the contact form submission (in production, you'd save to database)
    console.log('Contact form submission:', {
      name: validatedData.name,
      email: validatedData.email,
      organization: validatedData.organization,
      reason: validatedData.reason,
      message: validatedData.message,
      timestamp: new Date().toISOString(),
    })
    
    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send auto-reply to user
    
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your message. We\'ll get back to you soon.' 
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
      { error: 'Internal server error' }, 
      { status: 500 }
    )
  }
}
