'use client'

import Link from 'next/link'
import { useState } from 'react'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { Button } from '@/components/Button'
import { site } from '@/site.config'

export function SiteFooter() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
      // Reset after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <Container as="footer" className="w-full">
      <div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
          {/* Navigation */}
          <nav>
            <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-fg/70 transition hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter */}
          <div>
            <h3 className="font-display text-sm font-semibold tracking-wider text-fg">
              Stay Updated
            </h3>
            <p className="mt-4 text-sm text-fg/70">
              Get updates on our work and impact.
            </p>
            <form onSubmit={handleSubmit} className="mt-6">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 rounded-full border border-border bg-transparent px-4 py-2 text-sm text-fg placeholder:text-fg/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  required
                />
                <Button type="submit" className="px-6 py-2 text-sm">
                  Subscribe
                </Button>
              </div>
              {isSubscribed && (
                <p className="mt-2 text-sm text-success">
                  Thank you for subscribing!
                </p>
              )}
            </form>
          </div>

          {/* Foundation Info */}
          <div className="flex lg:justify-end">
            <div className="max-w-sm">
              <h2 className="font-display text-sm font-semibold tracking-wider text-fg">
                {site.name}
              </h2>
              <p className="mt-4 text-sm text-fg/70">
                Philanthropy with discipline—mental health first.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-border pt-8">
          <Link href="/" aria-label="Home">
            <Logo className="h-8" fillOnHover />
          </Link>
          <p className="text-sm text-fg/70">
            © {site.name} {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </Container>
  )
}
