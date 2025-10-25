import { type Metadata } from 'next'
import { RootLayout } from '@/components/RootLayout'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'

export const metadata: Metadata = {
  title: 'Donate',
  description:
    'Support youth mental health in New York City. Your donation helps remove barriers to care for children in underserved communities. Every gift makes a difference.',
  openGraph: {
    title: 'Donate',
    description: 'Your donation helps children in underserved NYC communities access the mental health care they need.',
    type: 'website',
  },
}

export default function Donate() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Support Our Work" title="Every gift makes a difference">
        <p>
          Your donation helps us remove barriers to mental health care for young people across New York City. 
          Whether you give once or monthly, you&apos;re helping a child access the support they need to thrive.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-3xl bg-slate-50 p-8 sm:p-12 lg:p-16">
              <h2 className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl mb-6">
                Ways to Give
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    Online Donation
                  </h3>
                  <p className="text-base text-slate-700 mb-4">
                    Make a secure one-time or recurring gift through our donation platform.
                  </p>
                  <div className="rounded-lg bg-white p-6 border border-slate-200">
                    <p className="text-sm text-slate-600 mb-4">
                      Donation processing will be available soon. In the meantime, please contact us directly to make a gift.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    Check or Wire Transfer
                  </h3>
                  <p className="text-base text-slate-700 mb-4">
                    For larger gifts, we accept checks and wire transfers. Please contact us at{' '}
                    <a href="mailto:giving@arhin.org" className="text-primary hover:underline">
                      giving@arhin.org
                    </a>
                    {' '}for wire instructions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    Donor-Advised Funds
                  </h3>
                  <p className="text-base text-slate-700 mb-4">
                    Many donors find it convenient to give through their donor-advised fund. 
                    Please reach out if you&apos;d like to coordinate a DAF gift.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    Corporate Matching
                  </h3>
                  <p className="text-base text-slate-700">
                    Many employers match charitable donations. Check with your HR department 
                    to see if your company participates in a matching gift program.
                  </p>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-200">
                <p className="text-sm text-slate-600">
                  All donations directly support youth mental health programs in New York City.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-3xl bg-slate-900 p-8 sm:p-12 lg:p-16">
              <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl mb-4">
                Questions about giving?
              </h2>
              <p className="text-lg text-white/80 mb-6">
                We&apos;re here to help. Reach out to discuss your philanthropic goals 
                and how your gift can make the greatest impact.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:bg-white/90 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}

