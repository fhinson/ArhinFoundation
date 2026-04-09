'use client'

import { useState } from 'react'

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setMessage(data.message)
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong.')
      }
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <form className="max-w-sm" onSubmit={handleSubmit}>
      <h2 className="font-display text-xl font-semibold tracking-wider text-slate-900">
        Join our Newsletter
      </h2>
      <p className="mt-4 text-base text-slate-700">
        Stay informed about our work and impact.
      </p>

      {status === 'success' ? (
        <p className="mt-6 text-base text-fg font-medium">{message}</p>
      ) : (
        <>
          <div className="relative mt-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              autoComplete="email"
              aria-label="Email address"
              required
              disabled={status === 'loading'}
              className="block w-full border border-slate-300 bg-transparent py-4 pr-20 pl-6 text-base/6 text-slate-900 ring-4 ring-transparent transition placeholder:text-slate-500 focus:border-slate-900 focus:ring-slate-900/5 focus:outline-hidden disabled:opacity-60"
            />
            <div className="absolute inset-y-1 right-1 flex justify-end">
              <button
                type="submit"
                aria-label="Subscribe"
                disabled={status === 'loading'}
                className="flex aspect-square h-full items-center justify-center bg-slate-900 text-slate-100 transition hover:bg-slate-900/80 disabled:opacity-60"
              >
                <ArrowIcon className="w-4" />
              </button>
            </div>
          </div>
          {status === 'error' && (
            <p className="mt-3 text-sm text-danger">{message}</p>
          )}
        </>
      )}
    </form>
  )
}
