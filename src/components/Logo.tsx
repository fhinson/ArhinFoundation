import clsx from 'clsx'
import { site } from '@/site.config'

export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  invert?: boolean
  filled?: boolean
}) {
  return (
    <div
      className={clsx(
        'h-8 w-8 rounded-full transition-all duration-300',
        invert ? 'bg-bg' : 'bg-fg',
        filled ? 'w-8' : 'w-0 group-hover/logo:w-8',
      )}
      {...props}
    />
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  customSvg,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
  customSvg?: React.ReactNode
}) {
  if (customSvg) {
    return <div className={className}>{customSvg}</div>
  }

  return (
    <div
      className={clsx(
        'flex items-center space-x-3',
        fillOnHover && 'group/logo',
        className
      )}
      {...props}
    >
      <Logomark
        invert={invert}
        filled={filled}
      />
      <span
            className={clsx(
              'font-display text-xl font-semibold tracking-tight',
              invert ? 'text-bg' : 'text-fg'
            )}
      >
        {site.name}
      </span>
    </div>
  )
}
