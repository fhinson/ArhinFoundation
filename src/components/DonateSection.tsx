import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function DonateSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 bg-fg px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl font-medium text-balance text-white sm:text-5xl">
              Make a difference today
            </h2>
            <p className="mt-6 text-xl text-white">
              Every dollar you give helps a child access the mental health care they need. Your support turns waiting lists into healing, and uncertainty into hope.
            </p>
            <div className="mt-6 flex">
              <Button href="/donate" invert className="px-8 py-4 text-xl">
                Donate Now →
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

