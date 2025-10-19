import { type Metadata } from 'next'

import Image from 'next/image'

import { Hero } from '@/components/Hero'
import { Section } from '@/components/Section'
import { HowWeWork } from '@/components/HowWeWork'
import { FounderSpotlight } from '@/components/FounderSpotlight'
import { ContactCTA } from '@/components/ContactCTA'
import { Container } from '@/components/Container'
import { List, ListItem } from '@/components/List'
import { site } from '@/site.config'
import imageMeeting from '@/images/meeting.jpg'

export const metadata: Metadata = {
  title: 'Home',
  description: site.seo.description,
}

function FeatureCards() {
  const features = [
    {
      eyebrow: "Focus area",
      title: "Access",
      description: "Move people from waitlists to care: therapy funds, clinics, provider networks.",
    },
    {
      eyebrow: "Focus area", 
      title: "Talent",
      description: "Train and support clinicians: scholarships, supervision, fellowships.",
    },
    {
      eyebrow: "Focus area",
      title: "Stigma", 
      description: "Normalize help-seeking: consent-first creator micro-grants.",
    },
  ]

  return (
    <Section>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="flex">
            <div className="group relative flex w-full flex-col rounded-2xl bg-bg p-6 shadow-sm ring-1 ring-border transition hover:bg-muted hover:shadow-md sm:p-8">
              <div className="flex items-center gap-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-onprimary">
                  {feature.title.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">{feature.eyebrow}</p>
                </div>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-fg">
                {feature.title}
              </h3>
              <p className="mt-4 text-base text-fg/70">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

function TestimonialBand() {
  return (
    <div className="relative overflow-hidden bg-muted">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23B29A5B%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
      </div>
      <Container>
        <div className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <blockquote className="font-display text-2xl font-medium text-fg sm:text-3xl">
              <p>
                &ldquo;We back practical access, develop talent, and reduce stigma—quietly removing friction so help feels close to home.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </Container>
    </div>
  )
}

function ServicesBand() {
  const services = [
    {
      eyebrow: "Step 1",
      title: "Listen",
      description: "Start with real needs.",
    },
    {
      eyebrow: "Step 2", 
      title: "Back what works",
      description: "Fund proven approaches.",
    },
    {
      eyebrow: "Step 3",
      title: "Learn and refine", 
      description: "Evaluate and adapt.",
    },
  ]

  return (
    <Section>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-neutral-100">
            <Image
              src={imageMeeting}
              alt="Team meeting"
              className="h-full w-full object-cover grayscale transition duration-500 motion-safe:hover:scale-105"
              priority
            />
          </div>
        </div>
        
        <div className="flex flex-col justify-center">
          <h2 className="font-display text-3xl font-medium text-balance text-fg sm:text-4xl">
            How We Work
          </h2>
          <p className="mt-6 text-lg text-fg/70">
            Listen to the field, back what works, learn and refine.
          </p>
          
          <div className="mt-8 space-y-8">
            {services.map((service, index) => (
              <div key={service.title} className="relative">
                {index > 0 && (
                  <div className="absolute -top-4 left-0 h-px w-full bg-border" />
                )}
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-onprimary">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">{service.eyebrow}</p>
                    <h3 className="mt-1 font-display text-xl font-semibold text-fg">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-base text-fg/70">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
      <FeatureCards />
      <TestimonialBand />
      <ServicesBand />
      <FounderSpotlight />
      <ContactCTA />
    </>
  )
}
