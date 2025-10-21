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
import { Button } from '@/components/Button'

// Removed previous focus area bullets; replaced with stories grid inside the blue section

function FocusAreas() {
  return (
    <div className="mt-12 bg-slate-900 py-16 sm:mt-16 sm:py-24 lg:mt-20 lg:py-28">
      <SectionIntro
        invert
        title="We believe everyone deserves access to quality mental health care. We're here to support you through your journey—quietly removing barriers so help feels close to home."
      >
        <p>
          Access should be timely, affordable, and culturally aware. Strong communities need strong minds. Change scales when we back people and proven programs.
        </p>
      </SectionIntro>
      <Container className="mt-8 sm:mt-10">
        <FadeInStagger className="mt-6 sm:mt-8 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {[
            {
              title: 'Therapy Fund Expansion',
              description:
                'Supported 15 community clinics to reduce wait times from 6 months to 2 weeks, serving 2,000+ individuals.',
              category: 'Access',
              year: '2024',
            },
            {
              title: 'Clinical Fellowship Program',
              description:
                'Launched fellowship program training 25 new clinicians in culturally-responsive mental health care.',
              category: 'Talent',
              year: '2024',
            },
            {
              title: 'Stigma Reduction Campaign',
              description:
                'Partnered with content creators to normalize mental health conversations, reaching 1M+ young adults.',
              category: 'Stigma',
              year: '2023',
            },
          ].map((story, idx) => (
            <FadeIn key={story.title} className="flex">
              <article className="relative flex w-full flex-col p-6 ring-1 ring-white/10 transition hover:bg-white/5 sm:p-8">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center rounded-sm bg-white/10 px-3 py-1.5 text-white font-semibold text-xs">
                    Focus Area
                  </div>
                </div>
                <h3 className="font-display text-3xl font-semibold text-white mb-4">
                  {story.title}
                </h3>
                <p className="text-lg text-white/70">
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
      {/* Removed full-bleed gradient per design update */}
      <div className="relative pt-6 sm:pt-8 md:pt-10">
        <Container>
        <div className="relative grid items-center gap-y-4 sm:gap-y-6 gap-x-6 lg:grid-cols-2">
          <FadeIn className="max-w-2xl">
            <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-slate-900 sm:text-7xl">
              A healthy mind is the foundation of a healthy life.
            </h1>
            <p className="mt-6 text-2xl text-slate-700/70">
              Everyone deserves to dream.
            </p>
            <div className="mt-8">
              <Button href="/contact" size="lg">Get in touch</Button>
            </div>
          </FadeIn>
          <FadeIn className="relative z-0 mt-6 sm:mt-8">
            <div className="relative mx-auto w-[24rem] sm:w-[26rem] lg:w-[28rem] overflow-hidden rounded-3xl">
              <Image
                src="/child.png"
                alt="Child"
                width={1200}
                height={1600}
                priority
                sizes="(min-width: 1024px) 28rem, 22rem"
                className="h-auto w-full object-cover"
                style={{ objectPosition: '50% 50%' }}
              />
            </div>
          </FadeIn>
        </div>
        </Container>
      </div>

      <FocusAreas />


      <Testimonial
        className="mt-8 sm:mt-10"
        client={{ name: 'Arhin Foundation', logo: logoPhobiaDark }}
      >
        We back practical access, develop talent, and reduce stigma—quietly removing friction so help feels close to home.
      </Testimonial>

      <Approach />

      <ContactSection />
    </RootLayout>
  )
}
