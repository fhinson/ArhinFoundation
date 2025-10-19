import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'

interface HeroProps {
  title?: string
  subtitle?: string
  className?: string
}

export function Hero({ 
  title = "A healthy mind is the foundation of a healthy life.", 
  subtitle = "Everyone deserves to dream.", 
  className 
}: HeroProps) {
  return (
    <div className="relative">
      {/* Background ornaments */}
      <div className="absolute inset-0 -z-10">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 [mask-image:radial-gradient(white,transparent_70%)]"
          yOffset={-96}
          interactive
        />
        {/* Radial glow ornaments */}
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
        {/* Rounded square ornaments */}
        <div className="absolute top-1/4 right-1/4 h-32 w-32 rounded-2xl bg-blue-500/5 rotate-12" />
        <div className="absolute bottom-1/4 left-1/4 h-24 w-24 rounded-xl bg-purple-500/5 -rotate-12" />
      </div>
      
      <Container className={`py-24 sm:py-32 lg:py-40 ${className || ''}`}>
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 text-xl text-neutral-600 sm:text-2xl">
            {subtitle}
          </p>
        </div>
      </Container>
    </div>
  )
}
