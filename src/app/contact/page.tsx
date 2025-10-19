import { type Metadata } from 'next'

import { Hero } from '@/components/Hero'
import { Section } from '@/components/Section'
import { ContactForm } from '@/components/ContactForm'
import { Container } from '@/components/Container'
import { site } from '@/site.config'

export const metadata: Metadata = {
  title: 'Contact',
  description: site.seo.description,
}

function ContactIntro() {
  return (
    <Section className="mt-24 sm:mt-32 lg:mt-40">
      <div className="max-w-2xl">
        <div>
          <h2 className="font-display text-3xl font-medium text-balance text-fg sm:text-4xl">
            Contact
          </h2>
          <p className="mt-6 text-lg text-fg/70">
            We&apos;re small, focused, and listening. If you see alignment, reach out—we review every note.
          </p>
        </div>
      </div>
    </Section>
  )
}

function ProposalNotice() {
  return (
    <Section className="mt-24 sm:mt-32 lg:mt-40">
      <div className="rounded-3xl bg-muted p-8 sm:p-12">
        <div>
          <h3 className="font-display text-xl font-semibold text-fg">
            Proposal Guidelines
          </h3>
          <p className="mt-4 text-base text-fg/70">
            We&apos;re not accepting unsolicited proposals at this time, but we read each message and follow up when there&apos;s a fit.
          </p>
        </div>
      </div>
    </Section>
  )
}

export default function Contact() {
  return (
    <>
      <Hero 
        title="Contact Us" 
        subtitle="Get in touch with our team"
      />
      <ContactIntro />
      <Section className="mt-24 sm:mt-32 lg:mt-40">
        <Container>
          <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
            <ContactForm />
            <div>
              <div>
                <h2 className="font-display text-base font-semibold text-fg">
                  General Inquiries
                </h2>
                <p className="mt-4 text-base text-fg/70">
                  We&apos;re not accepting unsolicited proposals at this time, but we read each message and follow up when there&apos;s a fit.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <ProposalNotice />
    </>
  )
}
