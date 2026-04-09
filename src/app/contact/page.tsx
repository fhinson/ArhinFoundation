import { type Metadata } from 'next'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { ContactForm } from '@/components/ContactForm'

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        About our process
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        We review every message carefully and respond when there&rsquo;s alignment with our mission and approach.
      </p>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-fg">
          Response time
        </h2>
        <p className="mt-4 text-base text-neutral-600">
          We typically respond within 2-3 business days. For urgent matters, please note this in your message.
        </p>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-fg">
          Privacy
        </h2>
        <p className="mt-4 text-base text-neutral-600">
          All communications are treated with strict confidentiality. We respect your privacy and will not share your information without consent.
        </p>
      </Border>
    </FadeIn>
  )
}

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Connect with the Arhin Foundation. We review every message from potential partners, collaborators, and community organizations interested in youth mental health.',
  openGraph: {
    title: 'Contact Us',
    description: 'Reach out to explore partnerships and collaboration opportunities in youth mental health.',
    type: 'website',
  },
}

export default function Contact() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Contact" title="Get in Touch">
        <p>
          We&apos;re small, focused, and listening. If you see alignment with our work, please reach out—every message is reviewed.
        </p>
        <div className="mt-6 text-base text-neutral-600">
          <p>We are particularly interested in hearing from:</p>
          <ul className="mt-2 list-disc pl-5">
            <li>Clinics and providers serving youth in the NYC metro area</li>
            <li>Community organizations focused on youth wellness</li>
            <li>Potential philanthropic partners</li>
          </ul>
        </div>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </RootLayout>
  )
}
