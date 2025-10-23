'use client'

import Image from 'next/image'
import Link from 'next/link'

import { DonateSection } from '@/components/DonateSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { RootLayout } from '@/components/RootLayout'
import { Button } from '@/components/Button'

// Removed previous focus area bullets; replaced with stories grid inside the blue section

function FocusAreas() {
  return (
    <div id="mission" className="mt-12 bg-slate-900 py-16 sm:mt-16 sm:py-24 lg:mt-20 lg:py-28">
      <Container>
        {/* Section Eyebrow */}
        <div className="mb-8">
          <span className="font-sans text-sm font-semibold uppercase tracking-wider text-slate-100">
            Our Mission
          </span>
        </div>

        {/* Main Content with Button */}
        <div className="flex flex-col lg:flex-row gap-x-8 gap-y-8">
          <div className="flex-1">
            <h2 className="font-display text-4xl font-medium text-balance text-white sm:text-5xl">
              The Arhin Foundation is on a mission to help children in underserved NYC communities get real mental health care by funding therapy and psychiatric care, and by backing partners that make care easy to reach.
            </h2>
          </div>

          {/* CTA Button */}
          <div className="flex items-start justify-start lg:justify-end mb-8 lg:mb-0">
            <Button href="/donate" size="lg" invert>
              Support Us →
            </Button>
          </div>
        </div>
      </Container>

      {/* Focus Areas Section */}
      <div className="mt-16 sm:mt-20 lg:mt-24">
        <SectionIntro invert eyebrow="Focus Areas" title="">
        </SectionIntro>
      </div>

      <Container className="mt-6 sm:mt-8 lg:mt-10">
        <FadeInStagger className="mt-6 sm:mt-8 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {[
            {
              title: 'Access to Care',
              icon: (
                <div className="inline-flex items-center justify-center rounded-full bg-white/10 p-2">
                  <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
              ),
              description:
                'We help kids move from a waitlist to a first visit. We cover small costs for therapy, counseling, or psychiatry and we pay for simple things like rides or data so appointments happen.',
            },
            {
              title: 'Schools and Community',
              icon: (
                <div className="inline-flex items-center justify-center rounded-full bg-white/10 p-2">
                  <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
              ),
              description:
                'We add time for counseling where students already are. Small grants to schools and youth clinics increase weekly hours and make sure referrals turn into real appointments.',
            },
            {
              title: 'Clinicians and Training',
              icon: (
                <div className="inline-flex items-center justify-center rounded-full bg-white/10 p-2">
                  <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v12M6 12h12"/>
                  </svg>
                </div>
              ),
              description:
                'We support early-career providers who reflect our neighborhoods. We fund supervision, community placements, and training to help providers serve families well.',
            },
          ].map((story, idx) => (
            <FadeIn key={story.title} className="flex">
              <article className="relative flex w-full flex-col p-6 ring-1 ring-white/10 bg-white/5 sm:p-8">
                <div className="mb-4">
                  {story.icon}
                </div>
                <h3 className="font-display text-3xl font-semibold text-white mb-4">
                  {story.title}
                </h3>
                <p className="text-lg text-white/90">
                  {story.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  )
}

function ImpactStories() {
  const stories = [
    {
      title: "Therapy Fund Expansion",
      description: "Supported 15 community clinics to reduce wait times from 6 months to 2 weeks, serving 2,000+ individuals.",
      category: "Access",
      year: "2024"
    },
    {
      title: "Clinical Fellowship Program", 
      description: "Launched fellowship program training 25 new clinicians in culturally-responsive mental health care.",
      category: "Talent",
      year: "2024"
    },
    {
      title: "Stigma Reduction Campaign",
      description: "Partnered with content creators to normalize mental health conversations, reaching 1M+ young adults.",
      category: "Stigma", 
      year: "2023"
    }
  ]

  return (
    <>
      {/* stories moved into FocusAreas above for dark background section */}
    </>
  )
}

function Approach() {
  return (
    <>
      <SectionIntro
        eyebrow="How we work"
        title="We listen to real needs, support proven solutions, and learn from every person we serve. Our approach is built on trust, evidence, and genuine care."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <div className="mt-6">
          <Link href="/about" className="text-base font-medium text-primary hover:text-primary/80 transition-colors">
            Learn about our team →
          </Link>
        </div>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-3/4 lg:justify-end lg:pr-12">
            <FadeIn className="w-full">
              <Image
                src="/school2.png"
                width={1024}
                height={1536}
                className="h-auto w-full object-cover"
                alt="School building"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/4 lg:min-w-132 lg:pl-4">
            <ListItem title="Listen with compassion">
              We start in the neighborhood. We meet with families, social workers, and school teams to understand real needs, then fund what they say will help.
            </ListItem>
            <ListItem title="Guided by science">
              Our strategy follows current medical standards from the American Psychological Association and draws on insights from modern neuroscientific research.
            </ListItem>
            <ListItem title="Every dollar to impact">
              Budgets are transparent and overhead stays lean. Funding goes first to providers, and we track how many kids got care so money is not lost in red tape.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export default function Home() {
  return (
    <RootLayout>
      {/* Removed full-bleed gradient per design update */}
      <div className="relative pt-16 sm:pt-20 md:pt-24 pb-6 sm:pb-10 md:pb-14">
        <Container>
        <div className="relative sm:grid sm:grid-cols-[1fr_auto] lg:grid-cols-2 gap-x-6">
          <FadeIn className="w-full lg:max-w-none">
            <h1 className="font-display text-6xl font-medium tracking-tight text-balance text-slate-900 sm:text-7xl">
              We believe a healthy mind is the foundation of a healthy life.
            </h1>
            <p className="mt-6 text-xl sm:text-2xl text-balance text-slate-900">
              We invest in youth mental health care in New York City, because every child deserves to dream.
            </p>
            <div className="mt-8">
              <Button
                href="#mission"
                size="lg"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault()
                  document.getElementById('mission')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  })
                }}
              >
                Learn More
              </Button>
            </div>
          </FadeIn>
        <FadeIn className="hidden sm:block justify-self-end w-[12rem] sm:w-[20rem] lg:w-[28rem]">
          <Image
            src="/hero-child.png"
            alt="Teen and caregiver reading a short mental health guide at a community table."
            width={1200}
            height={1600}
            priority
            sizes="(min-width: 1024px) 28rem, 22rem"
            className="h-auto w-full object-cover"
            style={{ 
              objectPosition: '50% 50%',
              maskImage: 'linear-gradient(to top, transparent 0%, rgba(0,0,0,0.01) 1%, rgba(0,0,0,0.02) 2%, rgba(0,0,0,0.03) 3%, rgba(0,0,0,0.05) 4%, rgba(0,0,0,0.07) 5%, rgba(0,0,0,0.09) 6%, rgba(0,0,0,0.11) 7%, rgba(0,0,0,0.14) 8%, rgba(0,0,0,0.17) 9%, rgba(0,0,0,0.2) 10%, rgba(0,0,0,0.23) 11%, rgba(0,0,0,0.27) 12%, rgba(0,0,0,0.31) 13%, rgba(0,0,0,0.35) 14%, rgba(0,0,0,0.39) 15%, rgba(0,0,0,0.43) 16%, rgba(0,0,0,0.47) 17%, rgba(0,0,0,0.51) 18%, rgba(0,0,0,0.55) 19%, rgba(0,0,0,0.59) 20%, rgba(0,0,0,0.63) 21%, rgba(0,0,0,0.67) 22%, rgba(0,0,0,0.71) 23%, rgba(0,0,0,0.75) 24%, rgba(0,0,0,0.79) 25%, rgba(0,0,0,0.82) 26%, rgba(0,0,0,0.85) 27%, rgba(0,0,0,0.88) 28%, rgba(0,0,0,0.91) 29%, rgba(0,0,0,0.94) 30%, rgba(0,0,0,0.96) 31%, rgba(0,0,0,0.98) 32%, rgba(0,0,0,1) 33%, rgba(0,0,0,1) 100%)',
              WebkitMaskImage: 'linear-gradient(to top, transparent 0%, rgba(0,0,0,0.01) 1%, rgba(0,0,0,0.02) 2%, rgba(0,0,0,0.03) 3%, rgba(0,0,0,0.05) 4%, rgba(0,0,0,0.07) 5%, rgba(0,0,0,0.09) 6%, rgba(0,0,0,0.11) 7%, rgba(0,0,0,0.14) 8%, rgba(0,0,0,0.17) 9%, rgba(0,0,0,0.2) 10%, rgba(0,0,0,0.23) 11%, rgba(0,0,0,0.27) 12%, rgba(0,0,0,0.31) 13%, rgba(0,0,0,0.35) 14%, rgba(0,0,0,0.39) 15%, rgba(0,0,0,0.43) 16%, rgba(0,0,0,0.47) 17%, rgba(0,0,0,0.51) 18%, rgba(0,0,0,0.55) 19%, rgba(0,0,0,0.59) 20%, rgba(0,0,0,0.63) 21%, rgba(0,0,0,0.67) 22%, rgba(0,0,0,0.71) 23%, rgba(0,0,0,0.75) 24%, rgba(0,0,0,0.79) 25%, rgba(0,0,0,0.82) 26%, rgba(0,0,0,0.85) 27%, rgba(0,0,0,0.88) 28%, rgba(0,0,0,0.91) 29%, rgba(0,0,0,0.94) 30%, rgba(0,0,0,0.96) 31%, rgba(0,0,0,0.98) 32%, rgba(0,0,0,1) 33%, rgba(0,0,0,1) 100%)',
            }}
          />
        </FadeIn>
        </div>
        </Container>
      </div>

      <FocusAreas />



      <Approach />

      <DonateSection />
    </RootLayout>
  )
}
