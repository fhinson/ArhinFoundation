import clsx from 'clsx'

import { Border } from '@/components/Border'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

export function GridList({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <FadeInStagger>
      <ul
        role="list"
        className={clsx(
          'grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3',
          className,
        )}
      >
        {children}
      </ul>
    </FadeInStagger>
  )
}

export function GridListItem({
  title,
  children,
  className,
  invert = false,
}: {
  title: string
  children: React.ReactNode
  className?: string
  invert?: boolean
}) {
  return (
    <li
      className={clsx(
        'text-base',
        invert
          ? 'text-bg/80 before:bg-bg after:bg-bg/10'
          : 'text-fg/70 before:bg-fg after:bg-muted',
        className,
      )}
    >
      <FadeIn>
        <Border position="left" className="pl-8" invert={invert}>
          <strong
            className={clsx(
              'font-semibold',
              invert ? 'text-bg' : 'text-fg',
            )}
          >
            {title}.
          </strong>{' '}
          {children}
        </Border>
      </FadeIn>
    </li>
  )
}
