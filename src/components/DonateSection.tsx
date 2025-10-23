import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logomark } from '@/components/Logo'

export function DonateSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="relative -mx-6 bg-fg px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        {/* Decorative monogram in top right */}
        <div className="absolute top-4 right-4 sm:top-8 sm:right-8 opacity-10">
          <Logomark className="h-12 w-auto sm:h-24 sm:w-auto" invert />
        </div>
        <div className="mx-auto max-w-4xl relative">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl font-medium text-balance text-white sm:text-5xl">
              Make a difference today
            </h2>
            <p className="mt-6 text-xl text-white">
              Every dollar you give helps a child access the mental health care they need. Your support turns waiting lists into healing, and uncertainty into hope.
            </p>
            <div className="mt-8 flex">
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

