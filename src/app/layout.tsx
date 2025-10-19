import { type Metadata } from 'next'
import { Cormorant, Karla } from 'next/font/google'

import '@/styles/tailwind.css'

const cormorant = Cormorant({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
})

const karla = Karla({
  subsets: ['latin'],
  variable: '--font-karla',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Arhin Foundation',
    default: 'Arhin Foundation - A healthy mind is the foundation of a healthy life',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full bg-slate-50 text-base antialiased ${cormorant.variable} ${karla.variable}`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
