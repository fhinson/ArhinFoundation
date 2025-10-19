import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Hero } from '@/components/Hero'
import { Section } from '@/components/Section'
import { Container } from '@/components/Container'
import { Border } from '@/components/Border'
import { site } from '@/site.config'
import imageFounder from '@/images/team/leslie-alexander.jpg'

export const metadata: Metadata = {
  title: 'About',
  description: site.seo.description,
}

function FounderBio() {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
            <div>
              <h2 className="font-display text-3xl font-medium text-balance text-fg sm:text-4xl">
                About the founder
              </h2>
              <div className="mt-2 h-px w-16 bg-merlot/30"></div>
              <div className="mt-6 space-y-6 text-base text-fg/70">
                <p><strong>Kumi Arhin</strong> is a technologist, builder, and investor focused on creating enduring institutions. His work spans product partnerships in the music ecosystem and the founding of <strong>Ofori Brothers</strong>, a premium wine house known for craft, clarity, and cultural ambition.</p>
                <p>The <strong>Arhin Foundation</strong> is Kumi&apos;s philanthropic vehicle for disciplined, high-leverage giving—beginning with practical mental-health access, the development of talent in the field, and thoughtful stigma reduction. He champions a standard of excellence that blends engineering rigor with creative vision, and he brings the same standard to how he gives.</p>
                <p><strong>Selected affiliations & work:</strong> Partner Engineer, Google / YouTube · Founder, Ofori Brothers Wine · Columbia University alumnus · Y Combinator alumnus.</p>
              </div>
            </div>
        </div>
        
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-100">
            <Image
              src={imageFounder}
              alt="Kumi Arhin, Founder"
              className="h-full w-full object-cover grayscale transition duration-500 motion-safe:hover:scale-105"
              priority
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

function Affiliations() {
  return (
    <Section>
      <div className="rounded-4xl bg-fg py-24 sm:py-32">
        <Container>
          <div>
            <h2 className="font-display text-3xl font-medium text-balance text-bg sm:text-4xl">
              Affiliations & Press
            </h2>
            <p className="mt-6 text-lg text-bg/80">
              Kumi&apos;s work spans technology, entrepreneurship, and cultural institutions.
            </p>
          </div>
          
          <div className="mt-12">
            <Border as="div" className="border-white/10">
              <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <li className="text-bg">
                      <h3 className="font-semibold">Google / YouTube</h3>
                      <p className="mt-2 text-sm text-bg/80">Partner Engineer, product partnerships</p>
                    </li>
                    <li className="text-bg">
                      <h3 className="font-semibold">Ofori Brothers Wine</h3>
                      <p className="mt-2 text-sm text-bg/80">Founder, premium wine house</p>
                    </li>
                    <li className="text-bg">
                      <h3 className="font-semibold">Columbia University</h3>
                      <p className="mt-2 text-sm text-bg/80">Alumnus, Y Combinator alumnus</p>
                    </li>
              </ul>
            </Border>
          </div>
        </Container>
      </div>
    </Section>
  )
}

function ExternalLinks() {
  return (
    <Section>
      <div>
        <h2 className="font-display text-2xl font-semibold text-fg">
          Learn More
        </h2>
        <p className="mt-4 text-base text-fg/70">
          Learn more about Kumi&apos;s work and the foundation&apos;s approach to giving.
        </p>
        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80"
          >
            Get in touch
            <span className="ml-2" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </Section>
  )
}

export default function About() {
  return (
    <>
      <Hero 
        title="About Us" 
        subtitle="Learn about our founder and mission"
      />
      <FounderBio />
      <Affiliations />
      <ExternalLinks />
    </>
  )
}
