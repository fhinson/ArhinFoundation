import { Container } from '@/components/Container'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'

const values = [
  {
    title: 'Dignity',
    description: 'Every person deserves respect and quality care.',
  },
  {
    title: 'Focus',
    description: 'We concentrate our efforts where we can make the most impact.',
  },
  {
    title: 'Evidence',
    description: 'We back programs that demonstrate measurable results.',
  },
  {
    title: 'Culture',
    description: 'We respect and work within diverse cultural contexts.',
  },
  {
    title: 'Leverage',
    description: 'We seek high-impact opportunities that scale change.',
  },
  {
    title: 'Accountability',
    description: 'We measure what matters and learn from every investment.',
  },
]

export function ValueGrid() {
  return (
    <div className="relative rounded-4xl bg-fg py-24 sm:py-32 lg:py-40">
      {/* Background ornament */}
      <div className="absolute inset-0 overflow-hidden rounded-4xl">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-bg/5 [mask-image:radial-gradient(white,transparent_70%)]"
          yOffset={-96}
          interactive
        />
      </div>
      
      <Container className="relative">
        <div>
          <h2 className="font-display text-3xl font-medium text-balance text-bg sm:text-4xl">
            Our Values
          </h2>
            <p className="mt-6 text-lg text-bg/80">
              Our values guide every decision and investment we make.
            </p>
        </div>
        
        <div className="mt-16">
          <GridList>
            {values.map((value) => (
              <GridListItem key={value.title} title={value.title} invert>
                {value.description}
              </GridListItem>
            ))}
          </GridList>
        </div>
      </Container>
    </div>
  )
}
