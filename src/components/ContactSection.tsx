import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 bg-slate-900 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl font-medium text-balance text-white sm:text-5xl">
              Get in touch
            </h2>
            <p className="mt-6 text-xl text-white/70">
              We're here to listen. Share your story, your needs, or how we can help. Every message matters to us.
            </p>
            <div className="mt-6 flex">
              <Button href="/contact" invert>
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
