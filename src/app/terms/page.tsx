import { SiteHeader } from '@/components/SiteHeader'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Arhin Foundation',
}

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h1 className="font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-6xl">
            Terms of Service
          </h1>
          
          <div className="mt-8 max-w-3xl text-lg text-slate-700 space-y-6">
            <p className="text-xl font-medium text-slate-900">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            
            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Acceptance of Terms</h2>
              <p>
                By accessing and using the Arhin Foundation website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Use of Website</h2>
              <p>
                This website is provided for informational purposes about the Arhin Foundation&apos;s mission, programs, and activities. You may use this website for lawful purposes only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Donations</h2>
              <p>
                All donations made through this website are voluntary and will be used to support the Arhin Foundation&apos;s mission of improving youth mental health care access. Donations are processed securely through trusted third-party payment processors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Intellectual Property</h2>
              <p>
                The content, design, graphics, and other materials on this website are protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Disclaimer</h2>
              <p>
                The information provided on this website is for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind about the completeness, accuracy, reliability, or availability of the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us through our{' '}
                <a href="/contact" className="text-primary hover:text-primary/80 transition-colors">
                  contact page
                </a>
                .
              </p>
            </section>
          </div>
        </FadeIn>
      </Container>
      <Footer />
    </>
  )
}

