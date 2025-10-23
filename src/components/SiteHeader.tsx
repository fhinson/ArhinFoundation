'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { motion, useReducedMotion } from 'framer-motion'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { Button } from '@/components/Button'
import { site } from '@/site.config'

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M2 6h20v2H2zM2 16h20v2H2z" />
    </svg>
  )
}

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
      <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
    </svg>
  )
}

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const shouldReduceMotion = useReducedMotion()

  return (
    <header className="relative z-50 bg-slate-900">
      <Container>
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo className="h-8" invert />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    'text-sm font-medium transition-colors hover:text-white',
                    pathname === item.href
                      ? 'text-white'
                      : 'text-white/70'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Button href={site.cta.href} invert>{site.cta.label}</Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden -m-2.5 rounded-md p-2.5 text-white/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Drawer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
        className={clsx(
          'fixed inset-0 z-50 bg-fg/50',
          mobileMenuOpen ? 'block' : 'hidden'
        )}
        onClick={() => setMobileMenuOpen(false)}
      >
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: mobileMenuOpen ? 0 : '100%' }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: 'easeInOut' }}
          className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-6">
            <Logo className="h-8" invert={false} />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-fg hover:text-fg/80 focus:outline-none focus:ring-2 focus:ring-ring"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              <XIcon className="h-6 w-6" />
            </button>
          </div>
          
          <nav className="px-6 py-6">
            <div className="space-y-4">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    'block text-lg font-medium transition-colors hover:text-fg',
                    pathname === item.href
                      ? 'text-fg'
                      : 'text-fg/80'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={site.cta.href}
                className="block text-lg font-medium text-primary hover:text-primary/80"
                onClick={() => setMobileMenuOpen(false)}
              >
                {site.cta.label}
              </Link>
            </div>
          </nav>
        </motion.div>
      </motion.div>
    </header>
  )
}
