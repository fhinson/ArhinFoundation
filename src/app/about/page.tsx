import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { Logomark } from '@/components/Logo'
import imageLaptop from '@/images/laptop.jpg'
import { RootLayout } from '@/components/RootLayout'

function FounderStory() {
  return (
    <div className="relative mt-24 bg-fg py-24 sm:mt-32 lg:mt-40 lg:py-32">
      {/* Decorative monogram in top right */}
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 opacity-10">
        <Logomark className="h-12 w-auto sm:h-24 sm:w-auto" invert />
      </div>
      <SectionIntro
        eyebrow="Founder and President"
        title="Francis Kumi Arhin"
        invert
      >
        <p>
          A technologist and philanthropist with a deep commitment to improving mental health access through transformative solutions.
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
                Francis is deeply committed to expanding youth mental health access, advancing education, reducing stigma, and empowering youth to get support and care. He believes in applying the best of current psychology and neuroscience to practical, community-centered solutions. His lifetime aspiration is to create meaningful, scalable philanthropic impact in mental health care.
              </p>
              <p>
                He brings more than a decade in technology across YouTube, Google, and Twitter. He is the Founder and CEO of Ofori Brothers Wine, redefining premium wine through the flavors of Africa, and previously founded and scaled a venture-backed education technology startup to over one million users worldwide. A Columbia University graduate in Computer Science, Francis combines product rigor with operational discipline. That mix of execution and insight guides the foundation&apos;s work and its commitment to measurable impact.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

const affiliations: Array<{
  organization: string
  role: string
  description: string
  period: string
}> = [
  // Partner logos will be added here
]

function Affiliations() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeInStagger>
        <Border as={FadeIn} />
        <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold text-fg">
              Partnerships
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
  title: 'About Us',
  description:
    'The Arhin Foundation supports youth mental health care access in New York City through evidence-based interventions and community partnerships.',
}

export default function About() {
  // Placeholder blog articles
  const blogArticles = [
    {
      href: '/blog/expanding-access',
      title: 'Expanding Mental Health Access in NYC Schools',
      description: 'How we partner with schools to bring counseling directly to students who need it most.',
      date: '2025-01-15',
    },
    {
      href: '/blog/community-first',
      title: 'Why Community-Centered Care Works',
      description: 'Evidence-based insights on culturally responsive mental health support for youth.',
      date: '2025-01-08',
    },
  ]

  return (
    <RootLayout>
      <PageIntro eyebrow="About us" title="Who We Are">
        <p>
          We believe that every young person should feel like they can chase their dreams. That mental health care shouldn&apos;t depend on zip code, income, or who you know. That a child&apos;s potential shouldn&apos;t be limited by struggles they never chose.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-lg">
          <p>
            We&apos;ve seen too many bright, resilient kids wait months for help. Too many families navigate a system that feels designed to keep them out. Too many communities left to solve these problems alone.
          </p>
          <p>
            This drives everything we do. We&apos;re passionate about changing what feels unchangeable: turning closed doors into open ones, long waitlists into real appointments, and isolation into connection. Every grant, every partnership, every dollar is guided by one conviction: that care should reach the kids who need it most.
          </p>
        </div>
        <div className="mt-6">
          <Link href="/contact" className="text-base font-medium text-primary hover:text-primary/80 transition-colors">
            Contact Us →
          </Link>
        </div>
      </PageIntro>
      
      <Container className="mt-16">
        <StatList>
          <StatListItem value="2025" label="Founding Year" />
          <StatListItem value="45" label="Target NYC Schools" />
          <StatListItem value="7" label="Partner Organizations" />
        </StatList>
      </Container>

      <FounderStory />

      <Affiliations />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Insights on mental health access through transformative solutions and evidence-based philanthropy from our work in the field."
        pages={blogArticles}
      />

      <ContactSection />
    </RootLayout>
  )
}
