import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const FROM_ADDRESS = process.env.EMAIL_FROM || 'Arhin Foundation <contact@arhin.org>'
const NOTIFY_ADDRESS = process.env.EMAIL_NOTIFY || 'francis@arhin.org'

interface ContactSubmission {
  name: string
  email: string
  organization: string
  reason: string
  message: string
}

const REASON_LABELS: Record<string, string> = {
  grantee: 'Potential grantee or collaborator',
  partner: 'Philanthropic partnership or event',
  event: 'Event',
  other: 'General inquiry',
}

/**
 * Send an internal notification when someone submits the contact form.
 */
export async function sendContactNotification(data: ContactSubmission) {
  const reasonLabel = REASON_LABELS[data.reason] || data.reason

  const { error } = await resend.emails.send({
    from: FROM_ADDRESS,
    to: NOTIFY_ADDRESS,
    replyTo: data.email,
    subject: `New contact: ${data.name} — ${reasonLabel}`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 560px; color: #2c1810;">
        <h2 style="margin: 0 0 24px; font-size: 20px; font-weight: 600;">
          New message from arhin.org
        </h2>
        <table style="width: 100%; border-collapse: collapse; font-size: 15px; line-height: 1.6;">
          <tr>
            <td style="padding: 8px 12px 8px 0; color: #666; vertical-align: top; white-space: nowrap;">Name</td>
            <td style="padding: 8px 0;">${escapeHtml(data.name)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px 8px 0; color: #666; vertical-align: top; white-space: nowrap;">Email</td>
            <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(data.email)}" style="color: #722f37;">${escapeHtml(data.email)}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 12px 8px 0; color: #666; vertical-align: top; white-space: nowrap;">Organization</td>
            <td style="padding: 8px 0;">${escapeHtml(data.organization)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px 8px 0; color: #666; vertical-align: top; white-space: nowrap;">Reason</td>
            <td style="padding: 8px 0;">${escapeHtml(reasonLabel)}</td>
          </tr>
        </table>
        <div style="margin-top: 24px; padding: 16px; background: #f7f4f0; font-size: 15px; line-height: 1.7;">
          ${escapeHtml(data.message).replace(/\n/g, '<br>')}
        </div>
        <p style="margin-top: 24px; font-size: 13px; color: #999;">
          You can reply directly to this email to respond to ${escapeHtml(data.name)}.
        </p>
      </div>
    `,
  })

  if (error) throw error
}

/**
 * Send an auto-reply confirming receipt.
 */
export async function sendContactConfirmation(data: ContactSubmission) {
  const { error } = await resend.emails.send({
    from: FROM_ADDRESS,
    to: data.email,
    subject: 'We received your message — Arhin Foundation',
    html: `
      <div style="font-family: Georgia, serif; max-width: 560px; color: #2c1810;">
        <h2 style="margin: 0 0 16px; font-size: 20px; font-weight: 600;">
          Thank you, ${escapeHtml(data.name)}.
        </h2>
        <p style="font-size: 15px; line-height: 1.7; color: #444;">
          We received your message and will review it carefully. If there's alignment with our work, we'll follow up within 2–3 business days.
        </p>
        <p style="font-size: 15px; line-height: 1.7; color: #444;">
          In the meantime, you can learn more about our mission at
          <a href="https://arhin.org" style="color: #722f37;">arhin.org</a>.
        </p>
        <p style="margin-top: 32px; font-size: 14px; color: #999;">
          Arhin Foundation<br>
          A healthy mind is the foundation of a healthy life.
        </p>
      </div>
    `,
  })

  if (error) {
    // Log but don't throw — the notification to you is more important
    console.error('Failed to send confirmation email:', error)
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
