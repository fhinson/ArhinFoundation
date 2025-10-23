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
    default: 'Arhin Foundation - A Healthy Mind Is the Foundation of a Healthy Life',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full bg-slate-50 text-base antialiased ${cormorant.variable} ${karla.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Arhin Foundation',
              url: 'https://arhin.org',
              logo: 'https://arhin.org/logo.png',
              slogan: 'A Healthy Mind Is the Foundation of a Healthy Life.',
              missionStatement:
                'We support youth mental health access by removing friction to care and backing the people who deliver it.',
              areaServed: 'New York City metropolitan area',
              foundingDate: '2025',
              founder: {
                '@type': 'Person',
                name: 'Francis Kumi Arhin',
                alternateName: 'Kumi Arhin',
                url: 'https://arhin.org/about',
                jobTitle: 'Founder',
              },
              sameAs: ['https://oforibrothers.com'],
            }),
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
