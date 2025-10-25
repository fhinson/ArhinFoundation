import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { SiteHeader } from '@/components/SiteHeader'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'The Cerulean Charter',
  description: 'The Cerulean Charter outlines the Arhin Foundation\'s core pillars: See the Unseen, Combat Stigma, and Measure and Move. Learn about our commitment to youth mental health.',
  openGraph: {
    title: 'The Cerulean Charter',
    description: 'Our guiding vision and pledge to uphold our core values in youth mental health philanthropy.',
  },
}

export default function Charter() {
  return (
    <>
      <SiteHeader />
      <PageIntro eyebrow="" title="The Cerulean Charter">
        <p>
          The color cerulean evokes skyward hope. The Cerulean Charter is our guiding vision and pledge to uphold these pillars.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <FadeIn>
          <div className="max-w-3xl space-y-12">
            <section>
              <h2 className="font-display text-2xl font-semibold text-slate-900 mb-4">
                See the Unseen
              </h2>
              <div className="space-y-4 text-lg text-slate-700">
                <p>
                  We believe in transparency and honesty in all our work. Every decision, every partnership, and every dollar is guided by clear facts and real outcomes. We share our progress openly, acknowledge our challenges, and commit to continuous learning.
                </p>
                <p>
                  Truth means facing the reality of mental health challenges in underserved communities without romanticizing or simplifying the work. It means listening to the voices of those we serve and letting their experiences shape our approach.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-slate-900 mb-4">
                Combat Stigma
              </h2>
              <div className="space-y-4 text-lg text-slate-700">
                <p>
                  Mental health care should never be a source of shame. We work to normalize conversations about mental health, ensuring that seeking support is seen as a sign of strength, not weakness.
                </p>
                <p>
                  We put youth voices first, honor their stories, and advocate for a culture where dignity and respect are paramount. By combating stigma, we create spaces where young people feel safe to seek the help they need.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-slate-900 mb-4">
                Measure and Move
              </h2>
              <div className="space-y-4 text-lg text-slate-700">
                <p>
                  We believe in simple plans executed with steady action. Our approach is disciplined and intentional, focusing on measurable growth and sustainable impact. We avoid overcomplication and stay focused on what works.
                </p>
                <p>
                  Diligence means doing the hard work of evaluation, iteration, and refinement. It means being patient with progress while maintaining urgency about the need. Every initiative is designed with care, implemented with rigor, and measured for real impact.
                </p>
              </div>
            </section>

            <section className="pt-8 border-t border-slate-200">
              <h2 className="font-display text-2xl font-semibold text-slate-900 mb-4">
                Our Commitment
              </h2>
              <div className="space-y-4 text-lg text-slate-700">
                <p>
                  The Cerulean Charter is more than a statement of values—it&apos;s our promise to the communities we serve. It guides every decision we make, from selecting partners to allocating resources. It holds us accountable to the young people who depend on us and to the future we&apos;re working to build.
                </p>
                <p>
                  This is our commitment: to bring light to invisible battles, to make care accessible, and to uphold these values with unwavering dedication.
                </p>
              </div>
            </section>
          </div>
        </FadeIn>
      </Container>

      <Footer />
    </>
  )
}

