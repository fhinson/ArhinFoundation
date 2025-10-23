import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageLaptop from '@/images/laptop.jpg'
import { loadArticles } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

function FounderStory() {
  return (
    <div className="mt-24 bg-fg py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="About the founder"
        title="Francis Kumi Arhin"
        invert
      >
        <p>
          A technologist and philanthropist with a deep commitment to mental health access and community-driven solutions.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <div className="relative flex aspect-719/680 w-full grayscale">
                <Image
                  src={imageLaptop}
                  alt="Francis Kumi Arhin"
                  className="h-full w-full object-cover"
                  sizes="(min-width: 1024px) 41rem, 31rem"
                />
              </div>
            </FadeIn>
          </div>
          <div className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <div className="space-y-6 text-lg text-white">
              <p>
                Francis Kumi Arhin brings over a decade of experience in technology and product development, having worked at Google and YouTube, where he focused on building products that serve diverse communities.
              </p>
              <p>
                His approach to philanthropy is rooted in evidence-based interventions and community partnership. Rather than imposing solutions, Francis believes in backing what works and learning from the field.
              </p>
              <p>
                The Arhin Foundation reflects his conviction that mental health support should be accessible, culturally aware, and community-driven. Every initiative is designed to reduce barriers and strengthen local capacity.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

const affiliations = [
  {
    organization: 'Google',
    role: '',
    description: '',
    period: ''
  },
  {
    organization: 'Founder, Ofori Brothers Wine',
    role: '',
    description: '',
    period: ''
  },
]

function Affiliations() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeInStagger>
        <Border as={FadeIn} />
        <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold text-fg">
              Selected affiliations & work
            </h2>
          </FadeIn>
          <div className="lg:col-span-3">
            <ul
              role="list"
              className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-1 xl:gap-4"
            >
              {affiliations.map((affiliation) => (
                <li key={affiliation.organization}>
                  <FadeIn>
                    <div className="text-lg text-fg">
                      {affiliation.organization}
                    </div>
                  </FadeIn>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeInStagger>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About the Founder — Francis Kumi Arhin',
  description:
    'Meet Francis Kumi Arhin, technologist and entrepreneur focused on practical, high leverage philanthropy.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <RootLayout>
      <PageIntro eyebrow="About the founder" title="About the Founder — Francis Kumi Arhin">
        <p>
          <strong>Francis Kumi Arhin</strong> is a technologist and builder who focuses on disciplined, practical philanthropy. His work sits at the intersection of product partnerships and community impact.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-lg">
          <p>
            The Arhin Foundation reflects a simple conviction: support should be accessible, culturally aware, and private by default. We back what works, measure modestly, and scale with care.
          </p>
        </div>
        <div className="mt-6 text-base"><Link href="/contact" className="underline">Contact</Link></div>
      </PageIntro>
      
      <Container className="mt-16">
        <StatList>
          <StatListItem value="10+" label="Years in technology" />
          <StatListItem value="2M+" label="Creators served" />
          <StatListItem value="15" label="Community partnerships" />
        </StatList>
      </Container>

      <FounderStory />

      <Affiliations />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Insights on mental health access, community-driven solutions, and evidence-based philanthropy from our work in the field."
        pages={blogArticles}
      />

      <ContactSection />
    </RootLayout>
  )
}
