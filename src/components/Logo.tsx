import { useId } from 'react'
import clsx from 'clsx'

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
        'w-8 h-8 rounded flex items-center justify-center transition-all duration-300',
        invert ? 'bg-white text-slate-900' : 'bg-slate-900 text-white',
        filled ? 'opacity-100' : 'opacity-0 group-hover/logo:opacity-100',
        props.className
      )}
      {...props}
    >
      <span className="text-sm font-bold">A</span>
    </div>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <div
      className={clsx(
        'flex items-center gap-3',
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
          'text-sm font-semibold',
          invert ? 'text-white' : 'text-slate-900'
        )}
      >
        Arhin Foundation
      </span>
    </div>
  )
}
