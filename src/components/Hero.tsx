import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'
import { site } from '@/site.config'

interface HeroProps {
  title?: string
  subtitle?: string
  className?: string
}

export function Hero({ 
  title = site.tagline, 
  subtitle = site.subtagline, 
  className 
}: HeroProps) {
  return (
    <div className="relative">
      {/* Subtle background ornament */}
      <div className="absolute inset-0 -z-10">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-muted/20 [mask-image:radial-gradient(white,transparent_70%)]"
          yOffset={-96}
          interactive
        />
      </div>
      
      <Container className={`mt-24 sm:mt-32 md:mt-56 ${className || ''}`}>
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-fg sm:text-7xl">
            {title}
          </h1>
          <p className="mt-6 text-xl text-fg/70">
            {subtitle}
          </p>
        </div>
      </Container>
    </div>
  )
}
