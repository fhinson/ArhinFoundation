import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function PageIntro({
  eyebrow,
  title,
  children,
  centered = false,
}: {
  eyebrow: string
  title: string
  children: React.ReactNode
  centered?: boolean
}) {
  return (
    <Container
      className={clsx('mt-16 sm:mt-20 lg:mt-24', centered && 'text-center')}
    >
      <FadeIn>
        <h1>
          <span className="block font-sans text-sm font-semibold uppercase tracking-wider text-slate-900">
            {eyebrow}
          </span>
          <span className="sr-only"> - </span>
          <span
            className={clsx(
              'mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-6xl',
              centered && 'mx-auto',
            )}
          >
            {title}
          </span>
        </h1>
        <div
          className={clsx(
            'mt-6 max-w-3xl text-lg sm:text-xl text-neutral-950',
            centered && 'mx-auto',
          )}
        >
          {children}
        </div>
      </FadeIn>
    </Container>
  )
}
