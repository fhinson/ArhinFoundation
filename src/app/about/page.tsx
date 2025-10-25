import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { Logomark } from '@/components/Logo'
import { RootLayout } from '@/components/RootLayout'

function LeadershipSection() {
  return (
    <div className="relative mt-12 bg-fg py-16 sm:mt-16 sm:py-20 lg:mt-20 lg:py-28">
      {/* Decorative monogram in top right */}
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 opacity-10">
        <Logomark className="h-12 w-auto sm:h-24 sm:w-auto" invert />
      </div>
      
      <SectionIntro
        eyebrow=""
        title="Our Leadership"
        invert
      >
        <p></p>
      </SectionIntro>

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
              <h3 className="font-display text-3xl font-medium text-white">
                Francis Kumi Arhin
              </h3>
              <p className="mt-2 font-display text-sm font-black uppercase tracking-widest text-white/80">
                Founder and President
              </p>
            </FadeIn>
            <div className="mt-6 space-y-6 text-lg text-white">
              <p>
                Francis Kumi Arhin is Founder and President of the Arhin Foundation. His commitment to youth mental health is shaped by a deep understanding of its interconnected nature and the quiet, often invisible struggles children face. These struggles ripple across families, communities, and generations. Breaking this cycle is his philanthropic dream.
              </p>
              <p>
                His approach is informed by a career shaping consumer technologies at global scale across Google, YouTube, and Twitter. He previously founded an ed-tech platform that grew to over one million users and is also Founder and CEO of Ofori Brothers Wine. He studied Computer Science at Columbia University.
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Advisors */}
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Advisor 1 */}
          <FadeIn>
            <div className="flex flex-col">
              <div className="aspect-square w-full lg:max-w-80 bg-white/10">
              </div>
              <div className="mt-6">
                <h4 className="font-display text-2xl font-medium text-white">
                  Lorem Ipsum
                </h4>
                <p className="mt-2 font-display text-sm font-black uppercase tracking-widest text-white/80">
                  Advisor
                </p>
                <p className="mt-4 text-base text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Advisor 2 */}
          <FadeIn>
            <div className="flex flex-col">
              <div className="aspect-square w-full lg:max-w-80 bg-white/10">
              </div>
              <div className="mt-6">
                <h4 className="font-display text-2xl font-medium text-white">
                  Lorem Ipsum
                </h4>
                <p className="mt-2 font-display text-sm font-black uppercase tracking-widest text-white/80">
                  Advisor
                </p>
                <p className="mt-4 text-base text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </FadeIn>
        </FadeInStagger>
      </Container>
    </div>
  )
}


export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about the Arhin Foundation and our leadership. Founded by Francis Kumi Arhin, we are dedicated to expanding youth mental health access in underserved NYC communities through philanthropy and evidence-based interventions.',
  openGraph: {
    title: 'About Us',
    description: 'Learn about the Arhin Foundation, our leadership, and our mission to expand youth mental health care access in NYC.',
    type: 'website',
  },
}

export default function About() {
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
            },
            knowsAbout: [
              'Youth Mental Health',
              'Philanthropy',
              'Mental Health Advocacy',
              'Community Mental Health',
              'Child Psychology',
              'Technology',
              'Product Development',
            ],
            sameAs: [
              'https://www.linkedin.com/in/francisarhin',
            ],
          }),
        }}
      />
      <PageIntro eyebrow="" title="About Us">
        <p>
          At the Arhin Foundation, we&apos;re bringing light to an often invisible battle: putting mental health care within reach of overlooked youth.
        </p>
      </PageIntro>

      <Container className="mt-8">
        <FadeIn className="max-w-3xl">
          <h2 className="font-display text-2xl font-medium text-slate-900 sm:text-3xl">
            The Cerulean Charter
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-slate-900">
            The color cerulean evokes skyward hope. The Cerulean Charter is our guiding vision and pledge to uphold these pillars.
          </p>
        </FadeIn>
      </Container>
      
      <Container className="mt-5">
        <FadeIn className="mb-2">
          <span className="block font-sans text-sm font-semibold uppercase tracking-wider text-slate-900">
            Pillars
          </span>
        </FadeIn>
        <StatList>
          <StatListItem value="See the Unseen" label="" />
          <StatListItem value="Combat Stigma" label="" />
          <StatListItem value="Measure and Move" label="" />
        </StatList>
      </Container>

      <Container className="mt-4">
        <FadeIn>
          <Link href="/charter" className="text-base font-medium text-primary hover:text-primary/80 transition-colors">
            Read the Charter →
          </Link>
        </FadeIn>
      </Container>

      <LeadershipSection />
    </RootLayout>
  )
}
