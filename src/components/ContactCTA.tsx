import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

export function ContactCTA() {
  return (
    <Container>
      <div className="rounded-4xl bg-fg px-6 py-20 sm:px-12 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl font-medium text-balance text-bg sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-6 text-lg text-bg/80">
            Ready to make a difference? We&apos;d love to hear from you.
          </p>
          <div className="mt-8">
            <Button href="/contact" invert>
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}
