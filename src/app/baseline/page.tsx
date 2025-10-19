import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import imageMeeting from '@/images/meeting.jpg'

export const metadata: Metadata = {
  title: 'Baseline - Template Reference',
  description: 'Pristine Tailwind UI Studio template reference',
}

// Pristine template markup - no brand tokens, no custom wrappers
function Hero() {
  return (
    <div className="relative">
      {/* Background ornaments */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute top-1/4 right-1/4 h-32 w-32 rounded-2xl bg-blue-500/5 rotate-12" />
        <div className="absolute bottom-1/4 left-1/4 h-24 w-24 rounded-xl bg-purple-500/5 -rotate-12" />
      </div>
      
      <Container className="py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-6xl lg:text-7xl">
            A healthy mind is the foundation of a healthy life.
          </h1>
          <p className="mt-6 text-xl text-neutral-600 sm:text-2xl">
            Everyone deserves to dream.
          </p>
        </div>
      </Container>
    </div>
  )
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
    <Container>
      <div className="py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex">
              <div className="group relative flex w-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 transition hover:bg-neutral-50 hover:shadow-md sm:p-8">
                <div className="flex items-center gap-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                    {feature.title.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-blue-600">{feature.eyebrow}</p>
                  </div>
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-neutral-950">
                  {feature.title}
                </h3>
                <p className="mt-4 text-base text-neutral-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function TestimonialBand() {
  return (
    <div className="relative overflow-hidden bg-neutral-50">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23B29A5B%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
      </div>
      <Container>
        <div className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <blockquote className="font-display text-2xl font-medium text-neutral-950 sm:text-3xl">
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
    <Container>
      <div className="py-16 sm:py-20 lg:py-24">
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
            <h2 className="font-display text-3xl font-medium text-balance text-neutral-950 sm:text-4xl">
              How We Work
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              Listen to the field, back what works, learn and refine.
            </p>
            
            <div className="mt-8 space-y-8">
              {services.map((service, index) => (
                <div key={service.title} className="relative">
                  {index > 0 && (
                    <div className="absolute -top-4 left-0 h-px w-full bg-neutral-200" />
                  )}
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-600">{service.eyebrow}</p>
                      <h3 className="mt-1 font-display text-xl font-semibold text-neutral-950">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-base text-neutral-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

function DarkCTA() {
  return (
    <Container>
      <div className="py-16 sm:py-20 lg:py-24">
        <div className="rounded-4xl bg-fg px-6 py-20 sm:px-12 sm:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl font-medium text-balance text-white sm:text-4xl">
              Get In Touch
            </h2>
            <p className="mt-6 text-lg text-neutral-300">
              Ready to make a difference? We&apos;d love to hear from you.
            </p>
            <div className="mt-8">
              <Button href="/contact" invert>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

function Footer() {
  return (
    <Container as="footer" className="w-full">
      <div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
          {/* Navigation */}
          <nav>
            <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              <li><Link href="/" className="text-sm text-neutral-600 transition hover:text-blue-600">Home</Link></li>
              <li><Link href="/mission" className="text-sm text-neutral-600 transition hover:text-blue-600">Mission</Link></li>
              <li><Link href="/about" className="text-sm text-neutral-600 transition hover:text-blue-600">About</Link></li>
              <li><Link href="/contact" className="text-sm text-neutral-600 transition hover:text-blue-600">Contact</Link></li>
            </ul>
          </nav>

          {/* Newsletter */}
          <div>
            <h3 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              Stay Updated
            </h3>
            <p className="mt-4 text-sm text-neutral-600">
              Get updates on our work and impact.
            </p>
            <form className="mt-6">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-full border border-neutral-300 bg-transparent px-4 py-2 text-sm text-neutral-950 placeholder:text-neutral-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  required
                />
                <Button type="submit" className="px-6 py-2 text-sm">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>

          {/* Foundation Info */}
          <div className="flex lg:justify-end">
            <div className="max-w-sm">
              <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
                Arhin Foundation
              </h2>
              <p className="mt-4 text-sm text-neutral-600">
                Philanthropy with discipline—mental health first.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-200 pt-8">
          <Link href="/" aria-label="Home" className="text-neutral-950">
            <span className="font-display text-lg font-semibold">Arhin Foundation</span>
          </Link>
          <p className="text-sm text-neutral-600">
            © Arhin Foundation {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </Container>
  )
}

export default function Baseline() {
  return (
    <>
      <Hero />
      <FeatureCards />
      <TestimonialBand />
      <ServicesBand />
      <DarkCTA />
      <Footer />
    </>
  )
}
