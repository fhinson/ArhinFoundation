import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Arhin Foundation',
}

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h1 className="font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-6xl">
            Privacy Policy
          </h1>
          
          <div className="mt-8 max-w-3xl text-lg text-slate-700 space-y-6">
            <p className="text-xl font-medium text-slate-900">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            
            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Information We Collect</h2>
              <p>
                The Arhin Foundation respects your privacy. We collect information you provide directly to us, such as when you subscribe to our newsletter, make a donation, or contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">How We Use Your Information</h2>
              <p>
                We use the information we collect to communicate with you about our programs, provide updates on our work, process donations, and respond to your inquiries.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website or conducting our foundation activities, so long as those parties agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us through our{' '}
                <a href="/contact" className="text-primary hover:text-primary/80 transition-colors">
                  contact page
                </a>
                .
              </p>
            </section>
          </div>
        </FadeIn>
      </Container>
      <SiteFooter />
    </>
  )
}

