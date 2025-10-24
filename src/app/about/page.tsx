import { type Metadata } from 'next'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { Logomark } from '@/components/Logo'
import { RootLayout } from '@/components/RootLayout'

function LeadershipSection() {
  return (
    <div className="relative mt-12 bg-fg py-20 sm:mt-16 lg:mt-20 lg:py-28">
      {/* Decorative monogram in top right */}
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 opacity-10">
        <Logomark className="h-12 w-auto sm:h-24 sm:w-auto" invert />
      </div>
      
      <SectionIntro
        eyebrow=""
        title="Our Leadership"
        invert
      >
        <p></p>
      </SectionIntro>

      {/* Founder */}
      <Container className="mt-12">
        <div className="lg:flex lg:items-start lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-full">
              <div className="relative flex aspect-719/680 w-full bg-white/10">
              </div>
            </FadeIn>
          </div>
          <div className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <FadeIn>
              <h3 className="font-display text-3xl font-medium text-white">
                Francis Kumi Arhin
              </h3>
              <p className="mt-2 font-display text-sm font-black uppercase tracking-widest text-white/80">
                Founder and President
              </p>
            </FadeIn>
            <div className="mt-6 space-y-6 text-lg text-white">
              <p>
                Francis Kumi Arhin is deeply committed to expanding youth mental health access, advancing education, reducing stigma, and empowering youth to get support and care. He believes in applying the best of current psychology and neuroscience to practical, community-centered solutions. His lifetime aspiration is to create meaningful, scalable philanthropic impact in mental health care.
              </p>
              <p>
                He brings more than a decade in technology across YouTube, Google, and Twitter. He is the Founder and CEO of Ofori Brothers Wine, redefining premium wine through the flavors of Africa, and previously founded and scaled a venture-backed education technology startup to over one million users worldwide. A Columbia University graduate in Computer Science, he combines product rigor with operational discipline. That mix of execution and insight guides the foundation&apos;s work and its commitment to measurable impact.
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Advisors */}
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Advisor 1 */}
          <FadeIn>
            <div className="flex flex-col">
              <div className="aspect-square w-full max-w-80 bg-white/10">
              </div>
              <div className="mt-6">
                <h4 className="font-display text-2xl font-medium text-white">
                  Dr. Sarah Chen
                </h4>
                <p className="mt-2 font-display text-sm font-black uppercase tracking-widest text-white/80">
                  Advisor
                </p>
                <p className="mt-4 text-base text-white">
                  Dr. Chen is a clinical psychologist with over 15 years of experience in youth mental health. She previously directed community mental health programs at NYU Langone and has published extensively on culturally responsive therapy approaches. She brings deep expertise in evidence-based interventions and community partnership models.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Advisor 2 */}
          <FadeIn>
            <div className="flex flex-col">
              <div className="aspect-square w-full max-w-80 bg-white/10">
              </div>
              <div className="mt-6">
                <h4 className="font-display text-2xl font-medium text-white">
                  Michael Rodriguez
                </h4>
                <p className="mt-2 font-display text-sm font-black uppercase tracking-widest text-white/80">
                  Advisor
                </p>
                <p className="mt-4 text-base text-white">
                  Michael is a public health advocate and former NYC Department of Health leader specializing in adolescent behavioral health. He has led initiatives to expand mental health access in underserved communities and brings strategic insight on systems change and policy advocacy. He currently serves on multiple nonprofit boards focused on youth wellbeing.
                </p>
              </div>
            </div>
          </FadeIn>
        </FadeInStagger>
      </Container>
    </div>
  )
}


export const metadata: Metadata = {
  title: 'About Us',
  description:
    'The Arhin Foundation supports youth mental health care access in New York City through evidence-based interventions and community partnerships.',
}

export default function About() {
  return (
    <RootLayout>
      <PageIntro eyebrow="" title="About Us">
        <p>
          At the Arhin Foundation, we&apos;re bringing light to an often invisible battle: putting mental health care within reach of overlooked youth.
        </p>
      </PageIntro>

      <Container className="mt-8">
        <FadeIn className="max-w-3xl">
          <h2 className="font-display text-2xl font-medium text-slate-900 sm:text-3xl">
            The Cerulean Charter
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-slate-900">
            The color cerulean reflects a tranquil and skyward hope. The Cerulean Charter is our guiding vision and pledge to uphold these values.
          </p>
        </FadeIn>
      </Container>
      
      <Container className="mt-5">
        <FadeIn className="mb-2">
          <span className="block font-sans text-sm font-semibold uppercase tracking-wider text-slate-900">
            Pillars
          </span>
        </FadeIn>
        <StatList>
          <StatListItem value="See the Unseen" label="" />
          <StatListItem value="Combat Stigma" label="" />
          <StatListItem value="Measure and Move" label="" />
        </StatList>
      </Container>

      <Container className="mt-4">
        <FadeIn>
          <Link href="/charter" className="text-base font-medium text-primary hover:text-primary/80 transition-colors">
            Read the Charter →
          </Link>
        </FadeIn>
      </Container>

      <LeadershipSection />

      <ContactSection />
    </RootLayout>
  )
}
