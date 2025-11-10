import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { Logomark } from '@/components/Logo'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
  title: 'Francis Kumi Arhin - Founder and President',
  description:
    'Francis Kumi Arhin is Founder and President of the Arhin Foundation, dedicated to expanding youth mental health access in NYC. Technology executive from Google, YouTube, Twitter.',
  openGraph: {
    title: 'Francis Kumi Arhin - Founder and President',
    description: 'Francis Kumi Arhin is Founder and President of the Arhin Foundation, dedicated to expanding youth mental health access in underserved NYC communities.',
    type: 'profile',
  },
}

export default function FrancisKumiArhinProfile() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Francis Kumi Arhin',
            alternateName: 'Kumi Arhin',
            jobTitle: 'Founder and President',
            worksFor: {
              '@type': 'Organization',
              name: 'Arhin Foundation',
              url: 'https://arhin.org',
            },
            description: 'Francis Kumi Arhin is Founder and President of the Arhin Foundation. His commitment to youth mental health is shaped by a deep understanding of its interconnected nature and the quiet, often invisible struggles children face. He brings experience from Google, YouTube, and Twitter, and is also Founder and CEO of Ofori Brothers Wine.',
            alumniOf: {
              '@type': 'EducationalOrganization',
              name: 'Columbia University',
              department: 'Computer Science',
            },
            knowsAbout: [
              'Youth Mental Health',
              'Philanthropy',
              'Mental Health Advocacy',
              'Community Mental Health',
              'Child Psychology',
              'Technology',
              'Product Development',
              'Educational Technology',
              'Consumer Technology',
            ],
            sameAs: [
              'https://www.linkedin.com/in/francisarhin',
            ],
            url: 'https://arhin.org/about/francis-kumi-arhin',
          }),
        }}
      />
      <Container className="mt-16 sm:mt-20 lg:mt-24 mb-8">
        <FadeIn>
          <Link href="/about" className="text-base font-medium text-primary hover:text-primary/80 transition-colors">
            ← About Us
          </Link>
        </FadeIn>
      </Container>
      <SectionIntro
        eyebrow=""
        title="Our Leadership"
      >
        <p>
          The Arhin Foundation helps children in underserved NYC communities access mental health care by funding therapy and psychiatric services and strengthening providers who put help within reach.
        </p>
      </SectionIntro>

      <div className="relative mt-12 bg-fg py-16 sm:mt-16 sm:py-20 lg:mt-20 lg:py-28">
        {/* Decorative monogram in top right */}
        <div className="absolute top-4 right-4 sm:top-8 sm:right-8 opacity-10">
          <Logomark className="h-12 w-auto sm:h-24 sm:w-auto" invert />
        </div>

        {/* Founder */}
        <Container className="mt-12">
          <div className="lg:flex lg:items-start lg:justify-end">
            <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
              <FadeIn className="w-full">
                <div className="relative flex aspect-719/680 w-full bg-white/10">
                </div>
              </FadeIn>
            </div>
            <div className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
              <FadeIn>
                <h1 className="font-display text-3xl font-medium text-white">
                  Francis Kumi Arhin
                </h1>
                <p className="mt-2 font-display text-sm font-black uppercase tracking-widest text-white/80">
                  Founder and President
                </p>
              </FadeIn>
              <div className="mt-6 space-y-6 text-lg text-white">
                <p>
                  Francis Kumi Arhin is Founder and President of the Arhin Foundation. His commitment to youth mental health is shaped by a deep understanding of its interconnected nature and the quiet, often invisible struggles children face. These struggles ripple across families, communities, and generations. Breaking this cycle is his philanthropic dream.
                </p>
                <p>
                  His approach is informed by a career shaping consumer technologies at global scale across Google, YouTube, and Twitter. He previously founded an education technology platform that grew to over one million users globally. Today, he is Founder and CEO at Ofori Brothers Wine. He studied Computer Science at Columbia University.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </RootLayout>
  )
}

