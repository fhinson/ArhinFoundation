import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps = {
  invert?: boolean
  size?: 'sm' | 'md' | 'lg'
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
)

export function Button({
  invert = false,
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const sizeClasses =
    size === 'lg'
      ? 'px-6 py-3 text-lg'
      : size === 'sm'
      ? 'px-3 py-1 text-sm'
      : 'px-4 py-1.5 text-base'

  className = clsx(
    'inline-flex font-semibold transition',
    sizeClasses,
    invert ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-slate-800 text-white hover:bg-slate-700',
    className,
  )

  let inner = <span className="relative top-px">{children}</span>

  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    )
  }

  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  )
}
