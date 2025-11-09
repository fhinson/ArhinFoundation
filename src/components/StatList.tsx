import { Border } from '@/components/Border'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

export function StatList({
  children,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof FadeInStagger>, 'children'> & {
  children: React.ReactNode
}) {
  return (
    <FadeInStagger {...props}>
      <dl className="grid grid-cols-3 gap-2 sm:gap-4 max-w-4xl items-center">
        {children}
      </dl>
    </FadeInStagger>
  )
}

export function StatListItem({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <Border as={FadeIn} position="left" className="flex flex-col-reverse pl-3 h-full justify-center">
      <dt className="mt-2 text-base text-neutral-600">{label}</dt>
      <dd className="font-display text-xs font-semibold text-neutral-950 leading-tight sm:text-base md:text-lg lg:text-xl">
        {value}
      </dd>
    </Border>
  )
}
