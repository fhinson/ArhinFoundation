'use client'

import { useState } from 'react'
import { useId } from 'react'
import { Button } from '@/components/Button'
import { contactFormSchema, type ContactFormData } from '@/lib/validations'

function TextInput({
  label,
  type = 'text',
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { 
  label: string
  type?: string
}) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type={type}
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-border bg-transparent px-6 pt-12 pb-4 text-base/6 text-fg ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-primary focus:ring-ring/20 focus:outline-none"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-fg/50 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-fg peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-fg"
      >
        {label}
      </label>
    </div>
  )
}

function SelectInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'select'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <select
        id={id}
        {...props}
        className="peer block w-full border border-border bg-transparent px-6 pt-12 pb-4 text-base/6 text-fg ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-primary focus:ring-ring/20 focus:outline-none"
      >
        <option value="">Select a reason</option>
        <option value="grantee">Grantee</option>
        <option value="partner">Partner</option>
        <option value="event">Event</option>
        <option value="other">Other</option>
      </select>
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-fg/50 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-fg peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-fg"
      >
        {label}
      </label>
    </div>
  )
}

function TextareaInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'textarea'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <textarea
        id={id}
        {...props}
        placeholder=" "
        rows={4}
        className="peer block w-full border border-border bg-transparent px-6 pt-12 pb-4 text-base/6 text-fg ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-primary focus:ring-ring/20 focus:outline-none resize-none"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-fg/50 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-fg peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-fg"
      >
        {label}
      </label>
    </div>
  )
}

// Simple math captcha
function generateCaptcha() {
  const a = Math.floor(Math.random() * 10) + 1
  const b = Math.floor(Math.random() * 10) + 1
  return { question: `${a} + ${b}`, answer: a + b }
}

export function ContactForm() {
  const [formData, setFormData] = useState<Partial<ContactFormData>>({})
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [captcha] = useState(() => generateCaptcha())

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})

    try {
      const validatedData = contactFormSchema.parse(formData)
      
      // Verify captcha
      if (parseInt(validatedData.captcha) !== captcha.answer) {
        setErrors({ captcha: 'Incorrect answer. Please try again.' })
        setIsSubmitting(false)
        return
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validatedData),
      })

      if (response.ok) {
        // Show success toast (placeholder for now)
        alert('Thank you for your message! We\'ll get back to you soon.')
        setFormData({})
      } else {
        const errorData = await response.json()
        setErrors(errorData.errors || { general: 'Something went wrong. Please try again.' })
      }
    } catch (error) {
      if (error instanceof Error && 'issues' in error) {
        const fieldErrors: Record<string, string> = {}
        // @ts-ignore
        error.issues.forEach((issue: any) => {
          fieldErrors[issue.path[0]] = issue.message
        })
        setErrors(fieldErrors)
      } else {
        setErrors({ general: 'Something went wrong. Please try again.' })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <div className="lg:order-last">
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-fg">
          Contact Form
        </h2>
        
        {errors.general && (
          <div className="mt-4 rounded-md bg-danger/10 p-4 text-sm text-danger">
            {errors.general}
          </div>
        )}

        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput 
            label="Name" 
            name="name" 
            value={formData.name || ''}
            onChange={handleChange}
            autoComplete="name"
            required
          />
          {errors.name && <p className="text-sm text-danger">{errors.name}</p>}
          
          <TextInput
            label="Email"
            type="email"
            name="email"
            value={formData.email || ''}
            onChange={handleChange}
            autoComplete="email"
            required
          />
          {errors.email && <p className="text-sm text-danger">{errors.email}</p>}
          
          <TextInput
            label="Organization"
            name="organization"
            value={formData.organization || ''}
            onChange={handleChange}
            autoComplete="organization"
            required
          />
          {errors.organization && <p className="text-sm text-danger">{errors.organization}</p>}
          
          <SelectInput
            label="Reason for Contact"
            name="reason"
            value={formData.reason || ''}
            onChange={handleChange}
            required
          />
          {errors.reason && <p className="text-sm text-danger">{errors.reason}</p>}
          
          <TextareaInput 
            label="Message" 
            name="message"
            value={formData.message || ''}
            onChange={handleChange}
            required
          />
          {errors.message && <p className="text-sm text-danger">{errors.message}</p>}
          
          <div className="border border-border px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-fg/50">Security Check</legend>
              <div className="mt-6">
                <p className="text-sm text-neutral-600 mb-4">
                  What is {captcha.question}?
                </p>
                <TextInput
                  label="Answer"
                  name="captcha"
                  type="number"
                  value={formData.captcha || ''}
                  onChange={handleChange}
                  required
                />
                {errors.captcha && <p className="text-sm text-danger">{errors.captcha}</p>}
              </div>
            </fieldset>
          </div>
          
          {/* Honeypot field - hidden from users */}
          <input
            type="text"
            name="honeypot"
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        
        <Button 
          type="submit" 
          className="mt-10"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  )
}
