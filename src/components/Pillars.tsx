import { Container } from '@/components/Container'
import { SectionIntro } from '@/components/SectionIntro'

const pillars = [
  {
    percentage: '70%',
    title: 'Access',
    description: 'Therapy funds, clinics, provider networks—removing barriers to quality care.',
  },
  {
    percentage: '20%',
    title: 'Talent',
    description: 'Training, supervision, fellowships—developing the next generation of providers.',
  },
  {
    percentage: '10%',
    title: 'Stigma',
    description: 'Creator micro-grants with consent-first storytelling—normalizing mental health.',
  },
]

export function Pillars() {
  return (
    <>
      <SectionIntro
        title="Our Focus Areas"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
            <p>
              We focus our resources on three key areas that together create lasting change.
            </p>
      </SectionIntro>
      
      <Container className="mt-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {pillars.map((pillar) => (
                <div key={pillar.percentage} className="flex">
                  <div className="group relative flex w-full flex-col rounded-2xl bg-bg p-6 shadow-sm ring-1 ring-border transition hover:bg-muted hover:shadow-md sm:p-8">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-2xl font-semibold text-fg">
                        {pillar.title}
                      </h3>
                      <div className="text-3xl font-bold text-primary">
                        {pillar.percentage}
                      </div>
                    </div>
                    <p className="mt-4 text-base text-fg/70">
                      {pillar.description}
                    </p>
                  </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}
