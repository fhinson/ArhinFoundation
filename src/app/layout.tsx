import { type Metadata } from 'next'

import '@/styles/tailwind.css'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { site } from '@/site.config'

export const metadata: Metadata = {
  title: {
    template: `%s - ${site.name}`,
    default: `${site.name} - ${site.tagline}`,
  },
  description: site.seo.description,
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    images: [site.seo.ogImage],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-white text-base antialiased">
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-auto">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
