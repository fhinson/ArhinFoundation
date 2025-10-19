import { Container } from '@/components/Container'

interface SectionProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export function Section({ children, className, as: Component = 'section' }: SectionProps) {
  return (
    <Component className={className}>
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          {children}
        </div>
      </Container>
    </Component>
  )
}
