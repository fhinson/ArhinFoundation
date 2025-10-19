import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
  email: z.string().email('Invalid email address'),
  organization: z.string().min(1, 'Organization is required').max(100, 'Organization name is too long'),
  reason: z.enum(['grantee', 'partner', 'event', 'other']).refine(
    (val) => val !== undefined,
    { message: 'Please select a reason for contact' }
  ),
  message: z.string().min(10, 'Message must be at least 10 characters').max(500, 'Message must be 500 characters or less'),
  honeypot: z.string().max(0, 'Bot detected'), // Should be empty
  captcha: z.string().min(1, 'Please solve the math problem'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
