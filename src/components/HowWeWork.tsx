import { Container } from '@/components/Container'
import { SectionIntro } from '@/components/SectionIntro'

const steps = [
  {
    number: '01',
    title: 'Listen',
    description: 'We start by understanding the real needs and challenges in mental health access.',
  },
  {
    number: '02',
    title: 'Back what works',
    description: 'We invest in evidence-based programs and proven approaches that deliver results.',
  },
  {
    number: '03',
    title: 'Learn and refine',
    description: 'We continuously evaluate impact and adapt our approach based on what we learn.',
  },
]

export function HowWeWork() {
  return (
    <>
      <SectionIntro
        title="How We Work"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
            <p>
              Our approach is simple: listen to the field, back what works, and learn from every investment.
            </p>
      </SectionIntro>
      
      <Container className="mt-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {steps.map((step) => (
                <div key={step.number} className="flex">
                  <div className="group relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-border transition hover:bg-muted hover:ring-primary/20 sm:p-8">
                    <div className="flex items-center gap-x-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-onprimary">
                        {step.number}
                      </div>
                      <h3 className="font-display text-xl font-semibold text-fg">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-base text-fg/70">
                      {step.description}
                    </p>
                  </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}
