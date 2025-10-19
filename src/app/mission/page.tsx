import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
  title: 'Our Mission',
  description: 'We advance timely, culturally aware mental-health support. We remove friction to quality care and back the people who deliver it.',
}

function WhatWeFund() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        eyebrow="What we fund"
        title="Direct support that moves people from waitlists to care"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We focus on three core areas that create the most impact for mental health access.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Access">
            Direct support that moves people from waitlists to care.
          </GridListItem>
          <GridListItem title="Talent">
            Scholarships, training, and supervision for clinicians.
          </GridListItem>
          <GridListItem title="Stigma">
            Programs and content that make seeking help normal.
          </GridListItem>
        </GridList>
      </Container>
    </Container>
  )
}

function PortfolioEmphasis() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        eyebrow="Portfolio emphasis"
        title="Our current allocation reflects our priorities"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
      </SectionIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="70%" label="Access — therapy funds, clinics, provider networks" />
          <StatListItem value="20%" label="Talent — training, supervision, fellowships" />
          <StatListItem value="10%" label="Stigma — consent-first creator micro-grants" />
        </StatList>
      </Container>
    </Container>
  )
}

function Values() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        eyebrow="Values"
        title="Our guiding principles"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
      </SectionIntro>
      <Container className="mt-16">
        <div className="flex flex-wrap gap-4">
          {['Dignity', 'Focus', 'Evidence', 'Culture', 'Leverage', 'Accountability'].map((value) => (
            <span
              key={value}
              className="inline-flex items-center px-4 py-2 bg-muted text-fg text-sm font-medium"
            >
              {value}
            </span>
          ))}
        </div>
      </Container>
    </Container>
  )
}

function Approach() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        eyebrow="Approach"
        title="Small portfolio. Multi-year where possible. Light reporting. Clear outcomes. Privacy respected—no personal stories required for impact."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
      </SectionIntro>
    </Container>
  )
}

function LookingAhead() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        eyebrow="Looking ahead"
        title="As we mature, we will scale this model with the same discipline and care."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
      </SectionIntro>
    </Container>
  )
}

export default function Mission() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Our mission" title="Our mission">
        <p>
          We advance timely, culturally aware mental-health support. We remove friction to quality care and back the people who deliver it—so more lives feel steady and free to pursue ambition.
        </p>
      </PageIntro>

      <WhatWeFund />

      <PortfolioEmphasis />

      <Values />

      <Approach />

      <LookingAhead />
    </RootLayout>
  )
}
