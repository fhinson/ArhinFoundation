import { type Metadata } from 'next'

import { Hero } from '@/components/Hero'
import { Section } from '@/components/Section'
import { ValueGrid } from '@/components/ValueGrid'
import { HowWeWork } from '@/components/HowWeWork'
import { Pillars } from '@/components/Pillars'
import { Container } from '@/components/Container'
import { site } from '@/site.config'

export const metadata: Metadata = {
  title: 'Mission',
  description: site.seo.description,
}

function MissionIntro() {
  return (
    <Section>
      <div className="max-w-3xl">
        <div>
          <h2 className="font-display text-3xl font-medium text-balance text-fg sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-6 text-lg text-fg/70">
            We advance timely, culturally aware mental-health support. We remove friction to quality care and back the people who deliver it—so more lives feel steady and free to pursue ambition.
          </p>
        </div>
      </div>
    </Section>
  )
}

function PrivacyNote() {
  return (
    <Section>
      <div className="rounded-3xl bg-muted p-8 sm:p-12">
        <div>
          <h3 className="font-display text-xl font-semibold text-fg">
            Privacy & Transparency
          </h3>
          <p className="mt-4 text-base text-fg/70">
            We maintain strict privacy standards and respect the confidentiality of all grantee information. No personal stories are required for impact assessment.
          </p>
        </div>
      </div>
    </Section>
  )
}

export default function Mission() {
  return (
    <div className="theme-sage">
      <Hero 
        title="Our Mission" 
        subtitle="Advancing mental health through disciplined giving"
      />
      <MissionIntro />
      <ValueGrid />
      <HowWeWork />
      <Pillars />
      <PrivacyNote />
    </div>
  )
}
