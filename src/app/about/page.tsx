import { type Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { Logomark } from '@/components/Logo'
import { RootLayout } from '@/components/RootLayout'
import rachelKlebanov from '@/images/team/rachel-klebanov.jpg'
import anitaBatuure from '@/images/team/anita-batuure.jpg'

function LeadershipSection() {
  return (
    <div className="relative mt-12 bg-fg py-16 sm:mt-16 sm:py-20 lg:mt-20 lg:py-28">
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
                Francis Kumi Arhin is Founder and President of the Arhin Foundation. His commitment to youth mental health is shaped by a deep understanding of its interconnected nature and the quiet, often invisible struggles children face. These struggles ripple across families, communities, and generations. Breaking this cycle is his philanthropic dream.
              </p>
              <p>
              His approach is informed by a career shaping consumer technologies at global scale across Google, YouTube, and Twitter. He previously founded an education technology platform that grew to over one million users globally. Today, he is Founder and CEO at Ofori Brothers Wine. He studied Computer Science at Columbia University.
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
              <div className="aspect-square w-full lg:max-w-80 overflow-hidden bg-white/10">
                <Image
                  src={rachelKlebanov}
                  alt="Rachel H. Klebanov"
                  className="h-full w-full object-cover"
                  width={320}
                  height={320}
                />
              </div>
              <div className="mt-6">
                <h4 className="font-display text-2xl font-medium text-white">
                  Rachel H. Klebanov
                </h4>
                <p className="mt-2 font-display text-sm font-black uppercase tracking-widest text-white/80">
                  Advisor
                </p>
                <div className="mt-4 space-y-4 text-base text-white">
                  <p>
                    Rachel H. Klebanov, LPC, LCPC is a therapist and entrepreneur, passionate about utilizing creativity and intuition as tools for transformation and change. She envisions a world in which all children can be playful, passionate, and foster their own uniqueness.
                  </p>
                  <p>
                    Nurturing children&apos;s mental health can start with parents and families. After 7+ years of clinical experience, Rachel currently specializes in perinatal mental health, helping young parents and parents-to-be thrive during their own transitional moments.
                  </p>
                  <p>
                    She is the owner of Intuitive Body Counseling and Healing, a small DC-based therapy practice, and is a clinician with Seven Starling, an online maternal mental health clinic. She has an MA in Clinical Mental Health Counseling from The George Washington University, and a BA in Psychology and Neuroscience from Princeton University.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Advisor 2 */}
          <FadeIn>
            <div className="flex flex-col">
              <div className="aspect-square w-full lg:max-w-80 overflow-hidden bg-white/10">
                <Image
                  src={anitaBatuure}
                  alt="Dr. Anita Batuure"
                  className="h-full w-full object-cover object-left-top"
                  width={320}
                  height={320}
                />
              </div>
              <div className="mt-6">
                <h4 className="font-display text-2xl font-medium text-white">
                  Dr. Anita Batuure
                </h4>
                <p className="mt-2 font-display text-sm font-black uppercase tracking-widest text-white/80">
                  Advisor
                </p>
                <div className="mt-4 space-y-4 text-base text-white">
                  <p>
                    Dr. Batuure received her Bachelor of Science in Applied Psychology from New York University and earned her Psy.D. from the Rutgers University Graduate School of Applied and Professional Psychology (GSAPP). She completed her pre-doctoral internship at the James J. Peters VA Medical Center in the Bronx and has worked in a variety of settings, including the Rutgers Counseling Center (CAPS), the Center for the Intense Treatment of Personality Disorders (CITPD), and the Brooklyn VA. Dr. Batuure&apos;s research has largely focused on personality and how individual personality traits and attributes impact our relationship with modern social constructs.
                  </p>
                  <p>
                    Dr. Batuure is currently a first year postdoctoral fellow with Therapists of New York where she is specializing with clients in areas of trauma and personality disorders as well as with LGBTQIA+ identified clients. She is passionate about expanding access to mental health care, especially to marginalized communities whom have historically been underrepresented and underserved in the mental health community.
                  </p>
                </div>
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
    'Learn about the Arhin Foundation and our leadership. Founded by Francis Kumi Arhin, we are dedicated to expanding youth mental health access in underserved NYC communities through philanthropy and evidence-based interventions.',
  openGraph: {
    title: 'About Us',
    description: 'Learn about the Arhin Foundation, our leadership, and our mission to expand youth mental health care access in NYC.',
    type: 'website',
  },
}

export default function About() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Francis Kumi Arhin',
            alternateName: 'Kumi Arhin',
            jobTitle: 'Founder and President',
            worksFor: {
              '@type': 'Organization',
              name: 'Arhin Foundation',
              url: 'https://arhin.org',
            },
            description: 'Francis Kumi Arhin is Founder and President of the Arhin Foundation. His commitment to youth mental health is shaped by a deep understanding of its interconnected nature and the quiet, often invisible struggles children face. He brings experience from Google, YouTube, and Twitter, and is also Founder and CEO of Ofori Brothers Wine.',
            alumniOf: {
              '@type': 'EducationalOrganization',
              name: 'Columbia University',
            },
            knowsAbout: [
              'Youth Mental Health',
              'Philanthropy',
              'Mental Health Advocacy',
              'Community Mental Health',
              'Child Psychology',
              'Technology',
              'Product Development',
            ],
            sameAs: [
              'https://www.linkedin.com/in/francisarhin',
            ],
          }),
        }}
      />
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
            The color cerulean evokes skyward hope. The Cerulean Charter is our guiding vision and pledge to uphold these pillars.
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
    </RootLayout>
  )
}
