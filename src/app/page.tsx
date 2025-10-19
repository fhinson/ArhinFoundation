import { type Metadata } from 'next'

import { Hero } from '@/components/Hero'
import { Section } from '@/components/Section'
import { HowWeWork } from '@/components/HowWeWork'
import { FounderSpotlight } from '@/components/FounderSpotlight'
import { ContactCTA } from '@/components/ContactCTA'
import { Container } from '@/components/Container'
import { List, ListItem } from '@/components/List'
import { site } from '@/site.config'

export const metadata: Metadata = {
  title: 'Home',
  description: site.seo.description,
}

function WhyThisWork() {
  return (
    <Section className="mt-24 sm:mt-32 lg:mt-40">
      <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-medium text-balance text-fg sm:text-4xl">
              Why This Work Matters
            </h2>
            <p className="mt-6 text-lg text-fg/70">
              Philanthropy with discipline—mental health first. We back practical access to care, develop talent in the field, and reduce stigma so help feels normal and close to home.
            </p>
        <List className="mt-8">
          <ListItem title="Access should be timely, affordable, and culturally aware">
            We believe quality mental health support should be accessible to everyone, regardless of background or circumstances.
          </ListItem>
          <ListItem title="Strong communities need strong minds">
            Mental wellness is the foundation of thriving communities and individual potential.
          </ListItem>
          <ListItem title="Change scales when we back people and proven programs">
            We invest in evidence-based approaches and the people who deliver them effectively.
          </ListItem>
        </List>
      </div>
    </Section>
  )
}

function CurrentPriority() {
  return (
    <Section className="mt-24 sm:mt-32 lg:mt-40">
      <div className="rounded-3xl bg-muted p-8 sm:p-12">
        <div>
          <h3 className="font-display text-2xl font-semibold text-fg">
            Our Focus Areas
          </h3>
          <div className="mt-4 space-y-4 text-base text-fg/70">
            <div>
              <strong className="text-fg">Access (70%)</strong> — therapy funds, clinics, provider networks
            </div>
            <div>
              <strong className="text-fg">Talent (20%)</strong> — training, supervision, fellowships
            </div>
            <div>
              <strong className="text-fg">Stigma (10%)</strong> — creator micro-grants with consent-first storytelling
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <WhyThisWork />
      <HowWeWork />
      <CurrentPriority />
      <FounderSpotlight />
      <ContactCTA />
    </>
  )
}
