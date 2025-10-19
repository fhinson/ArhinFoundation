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
        {children}
      </Container>
    </Component>
  )
}
