import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import imageLaptop from '@/images/laptop.jpg'
import { RootLayout } from '@/components/RootLayout'

const focusAreas = [
  ['Access', 'Move people from waitlists to care: therapy funds, clinics, provider networks.'],
  ['Talent', 'Train and support clinicians: scholarships, supervision, fellowships.'],
  ['Stigma', 'Make help-seeking normal: consent-first creator micro-grants.'],
]

function FocusAreas() {
  return (
    <div className="mt-24 bg-slate-900 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
              <h2 className="text-center font-display text-lg font-semibold tracking-wider text-white sm:text-left">
                Focus area
              </h2>
          <div className="h-px flex-auto bg-slate-200/20" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3"
          >
            {focusAreas.map(([area, description]) => (
              <li key={area} className="text-center">
                <FadeIn>
                  <div className="text-white">
                    <h3 className="font-display text-lg font-semibold text-white">{area}</h3>
                    <p className="mt-2 text-base text-white/70">{description}</p>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
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
      <SectionIntro
        title="We believe everyone deserves access to quality mental health care. We're here to support you through your journey—quietly removing barriers so help feels close to home."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Access should be timely, affordable, and culturally aware. Strong communities need strong minds. Change scales when we back people and proven programs.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {stories.map((story) => (
            <FadeIn key={story.title} className="flex">
              <article className="relative flex w-full flex-col p-6 ring-1 ring-slate-900/10 transition hover:bg-slate-100 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 bg-slate-800 flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">{story.category.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{story.category}</p>
                    <p className="text-sm text-slate-700/60">{story.year}</p>
                  </div>
                </div>
                <h3 className="font-display text-3xl font-semibold text-slate-900 mb-4">
                  {story.title}
                </h3>
                <p className="text-lg text-slate-700/70">
                  {story.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
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
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="Listen with compassion">
              We start by understanding real needs and lived experiences.
            </ListItem>
            <ListItem title="Support what works">
              We fund evidence-based approaches that make a real difference.
            </ListItem>
            <ListItem title="Learn and grow together">
              We continuously improve by listening to those we serve.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  title: 'Arhin Foundation - A healthy mind is the foundation of a healthy life',
  description:
    'We back practical access to mental health care, develop talent in the field, and reduce stigma so help feels normal and close to home.',
}

export default function Home() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
              <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-slate-900 sm:text-7xl">
            A healthy mind is the foundation of a healthy life.
          </h1>
          <p className="mt-6 text-2xl text-slate-700/70">
            Everyone deserves to dream.
          </p>
        </FadeIn>
      </Container>

      <FocusAreas />

      <ImpactStories />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Arhin Foundation', logo: logoPhobiaDark }}
      >
        We back practical access, develop talent, and reduce stigma—quietly removing friction so help feels close to home.
      </Testimonial>

      <Approach />

      <ContactSection />
    </RootLayout>
  )
}
