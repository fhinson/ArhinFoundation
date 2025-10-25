import { useId } from 'react'
import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { RootLayout } from '@/components/RootLayout'

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-fg ring-4 ring-transparent transition focus:border-fg focus:ring-fg/5 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-fg peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-fg"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none border border-neutral-950/20 outline-hidden checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-fg">{label}</span>
    </label>
  )
}

function ContactForm() {
  return (
    <FadeIn className="lg:order-last">
      <form>
        <h2 className="font-display text-base font-semibold text-fg">
          Get in touch
        </h2>
        <div className="isolate mt-6 -space-y-px bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Organization"
            name="organization"
            autoComplete="organization"
          />
          <TextInput label="Message" name="message" />
          <div className="border border-neutral-300 px-6 py-8">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Reason for reaching out</legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-1">
                <RadioInput label="Potential grantee or collaborator" name="reason" value="grantee" />
                <RadioInput label="Philanthropic partnership or event" name="reason" value="partnership" />
                <RadioInput label="General inquiry" name="reason" value="general" />
              </div>
            </fieldset>
          </div>
        </div>
        <Button type="submit" className="mt-10">
          Send message
        </Button>
        <p className="mt-6 text-sm text-neutral-600">Response time: We typically respond within 2–3 business days.</p>
        <p className="mt-2 text-sm text-neutral-600">Privacy: All communications are confidential. We respect your privacy and will not share your information.</p>
        <p className="mt-2 text-sm text-neutral-600">Disclaimer: We are not accepting unsolicited proposals at this time, but we read each message and follow up when there’s a fit.</p>
      </form>
    </FadeIn>
  )
}

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
          We’re small, focused, and listening. If you see alignment with our work, please reach out—every message is reviewed.
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
