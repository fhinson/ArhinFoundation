import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Blockquote } from '@/components/Blockquote'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { GridList, GridListItem } from '@/components/GridList'
import { Border } from '@/components/Border'
import { PageIntro } from '@/components/PageIntro'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-dark.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-dark.svg'
import logoGreenLife from '@/images/clients/green-life/logo-dark.svg'
import logoHomeWork from '@/images/clients/home-work/logo-dark.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-dark.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-dark.svg'
import logoPhobia from '@/images/clients/phobia/logo-dark.svg'
import logoUnseal from '@/images/clients/unseal/logo-dark.svg'
import { formatDate } from '@/lib/formatDate'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Case studies
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {caseStudies.map((caseStudy) => (
          <FadeIn key={caseStudy.client}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={caseStudy.logo}
                      alt=""
                      className="h-16 w-16 flex-none"
                      unoptimized
                    />
                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                      {caseStudy.client}
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {caseStudy.service}
                    </p>
                    <p className="text-sm text-neutral-950 lg:mt-2">
                      <time dateTime={caseStudy.date}>
                        {formatDate(caseStudy.date)}
                      </time>
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    <Link href={caseStudy.href}>{caseStudy.title}</Link>
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    {caseStudy.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 flex">
                    <Button
                      href={caseStudy.href}
                      aria-label={`Read case study: ${caseStudy.client}`}
                    >
                      Read case study
                    </Button>
                  </div>
                  {caseStudy.testimonial && (
                    <Blockquote
                      author={caseStudy.testimonial.author}
                      className="mt-12"
                    >
                      {caseStudy.testimonial.content}
                    </Blockquote>
                  )}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

const clients = [
  ['Phobia', logoPhobia],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          You’re in good company
        </h2>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <Border as={FadeIn} />
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
        >
          {clients.map(([client, logo]) => (
            <li key={client} className="group">
              <FadeIn className="overflow-hidden">
                <Border className="pt-12 group-nth-[-n+2]:-mt-px sm:group-nth-3:-mt-px lg:group-nth-4:-mt-px">
                  <Image src={logo} alt={client} unoptimized />
                </Border>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Our Work | Year-1 Targets',
  description:
    'Year-1 pilots: therapy funding, clinician micro-grants, and stigma reduction—measured and privacy-first.',
}

export default function Work() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Our Work" title="Our Work">
        <p>
          We start small, measure what matters, and scale what proves out. Our first year is dedicated to testing three pilot initiatives with clear, conservative targets.
        </p>
        <div className="mt-6 text-base text-neutral-600">
          <p><Link href="/about" className="underline">About Francis Kumi Arhin</Link>.</p>
        </div>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <SectionIntro
          eyebrow="Year-1 pilots"
          title="We start small, measure what matters, and scale what proves out."
        />
        <Container className="mt-16">
          <GridList>
            <GridListItem title="Therapy Fund (pilot)">
              <p>Purpose: Underwrite direct therapy sessions for youth via partner clinics and trusted directories, prioritizing culturally responsive care.</p>
              <p className="mt-2">Year-1 target: Support 250–400 sessions [editable].</p>
              <p className="mt-2">We’ll track: Attendance, completion, and referral follow-through.</p>
            </GridListItem>
            <GridListItem title="Clinician Talent Micro-grants (pilot)">
              <p>Purpose: Provide supervision stipends and continuing-education support for early-career clinicians serving youth in diverse communities.</p>
              <p className="mt-2">Year-1 target: Fund 8–12 micro-grants [editable].</p>
              <p className="mt-2">We’ll track: Clinicians supported and training types completed.</p>
            </GridListItem>
            <GridListItem title="Stigma Micro-grants (pilot)">
              <p>Purpose: Fund small, consent-first creator or community projects that normalize help-seeking among young people.</p>
              <p className="mt-2">Year-1 target: Award 6–10 micro-grants [editable].</p>
              <p className="mt-2">We’ll track: Meaningful engagement (saved/rewatched/shared resources), not raw impressions.</p>
              <p className="mt-2">Rights &amp; consent: All content is consent-first; grantees retain rights while granting the Foundation limited, non-exclusive use.</p>
            </GridListItem>
          </GridList>
        </Container>
        <Container className="mt-16">
          <Border className="pt-12">
            <p className="text-base text-neutral-700">Privacy note: No personal stories are required to show impact. Consent first, always.</p>
            <p className="mt-2 text-base text-neutral-700">Safeguarding note: All direct programming is delivered with vetted partners and appropriate child-safety protocols.</p>
          </Border>
          <div className="mt-8 flex gap-4">
            <Button href="/contact">Contact us about partnerships</Button>
            <Link href="/about" className="self-center underline">About Francis Kumi Arhin</Link>
          </div>
        </Container>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}
