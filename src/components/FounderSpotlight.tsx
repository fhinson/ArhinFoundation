import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import imageFounder from '@/images/team/leslie-alexander.jpg'

export function FounderSpotlight() {
  return (
    <div className="mt-24 rounded-4xl bg-fg py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="font-display text-3xl font-medium text-balance text-bg sm:text-4xl">
                Meet Our Founder
              </h2>
              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border border-merlot/30 text-merlot">
                Founder
              </span>
            </div>
            <p className="mt-6 text-lg text-bg/80">
              <strong>Kumi Arhin</strong> is a technologist and entrepreneur building enduring institutions. The Arhin Foundation is his commitment to disciplined, high-leverage giving.
            </p>
            <div className="mt-8">
              <Button href="/about" invert>
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-100">
              <Image
                src={imageFounder}
                alt="Kumi Arhin, Founder"
                className="h-full w-full object-cover grayscale transition duration-500 motion-safe:hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
