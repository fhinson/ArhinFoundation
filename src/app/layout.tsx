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
  description: 'The Arhin Foundation helps children in underserved NYC communities access mental health care by funding therapy and psychiatric services and strengthening providers who put help within reach.',
  openGraph: {
    title: 'Arhin Foundation - A Healthy Mind Is the Foundation of a Healthy Life',
    description: 'We invest in youth mental health care in New York City, because every child deserves to dream.',
    url: 'https://arhin.org',
    siteName: 'Arhin Foundation',
    images: [
      {
        url: 'https://arhin.org/school.webp',
        width: 1024,
        height: 1536,
        alt: 'Teacher and student at school',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arhin Foundation - A Healthy Mind Is the Foundation of a Healthy Life',
    description: 'We invest in youth mental health care in New York City, because every child deserves to dream.',
    images: ['https://arhin.org/school.webp'],
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
              logo: 'https://arhin.org/school.webp',
              slogan: 'A Healthy Mind Is the Foundation of a Healthy Life.',
              missionStatement:
                'The Arhin Foundation helps children in underserved NYC communities access mental health care by funding therapy and psychiatric services and strengthening providers who put help within reach.',
              areaServed: 'New York City metropolitan area',
              foundingDate: '2025',
              founder: {
                '@type': 'Person',
                name: 'Francis Kumi Arhin',
                alternateName: 'Kumi Arhin',
                url: 'https://arhin.org/about',
                jobTitle: 'Founder and President',
                description: 'Founder and President of the Arhin Foundation, dedicated to expanding youth mental health access in underserved NYC communities.',
                sameAs: [
                  'https://www.linkedin.com/in/francisarhin',
                ],
              },
              sameAs: [
                'https://www.instagram.com/arhinfoundation',
              ],
            }),
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
