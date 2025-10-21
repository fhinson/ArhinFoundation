import { useId } from 'react'
import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

type Props = ImageProps & {
  className?: string
  keyline?: boolean
  objectPosition?: string
  flipHorizontal?: boolean
  fadeFrom?: number // pixel y from top where fade begins
  ovalLift?: number // pixels to lift the oval center upward
  ovalRxScale?: number // 0..1 scale of oval rx relative to width
  ovalRyScale?: number // 0..1 scale of oval ry relative to height
  stylize?: boolean // apply digital illustration style filter
  posterizeLevels?: number // number of color steps
  edgeStrength?: number // 0..2 edge multiplier
  backgroundEnabled?: boolean
  backgroundColor?: string
  backgroundRotationDeg?: number
  backgroundScale?: number
  backgroundOpacity?: number
}

export function DigitalMaskedImage({
  className,
  keyline = false,
  objectPosition,
  flipHorizontal = false,
  fadeFrom,
  ovalLift,
  ovalRxScale,
  ovalRyScale,
  stylize = false,
  posterizeLevels = 5,
  edgeStrength = 1.2,
  backgroundEnabled = false,
  backgroundColor = '#e5e7eb', // slate-200
  backgroundRotationDeg = -8,
  backgroundScale = 1,
  backgroundOpacity = 0.12,
  alt,
  ...img
}: Props) {
  const id = useId()
  // A responsive viewBox. We design the digital bottom in this coordinate space
  const width = 600
  const height = 800
  const fadeStart = fadeFrom ?? height + 100 // disable bottom fade for now
  const feather = 24 // side feather width in px
  const cx = width / 2
  const cy = height * 0.48 - (ovalLift ?? 0)
  const rx = width * (ovalRxScale ?? 0.46)
  const ry = height * (ovalRyScale ?? 0.48)
  const posterizeTable = Array.from({ length: Math.max(2, posterizeLevels) }, (_, i) => (i / (Math.max(1, posterizeLevels - 1))).toFixed(3)).join(' ')

  return (
    <div className={clsx('relative flex', className)}>
      <svg viewBox={`0 0 ${width} ${height}`} className="h-auto w-full" fill="none" aria-hidden="true">
        <defs>
          {/* Soft oval edge via radial gradient mapped to the ellipse */}
          <radialGradient id={`${id}-ovalRG`} cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform={`translate(${cx} ${cy}) scale(${rx} ${ry})`}>
            <stop offset={0} stopColor="white" stopOpacity={1} />
            <stop offset={0.88} stopColor="white" stopOpacity={1} />
            <stop offset={1} stopColor="black" stopOpacity={1} />
          </radialGradient>
          {/* Bottom fade: white (show) to black (hide) */}
          <linearGradient id={`${id}-fadeY`} x1="0" y1={fadeStart} x2="0" y2={height} gradientUnits="userSpaceOnUse">
            {stylize ? (
              <>
                {/* Stepped fade for a digitized feel */}
                <stop offset={0} stopColor="white" stopOpacity={1} />
                <stop offset={0.2} stopColor="white" stopOpacity={0.85} />
                <stop offset={0.4} stopColor="white" stopOpacity={0.6} />
                <stop offset={0.6} stopColor="white" stopOpacity={0.35} />
                <stop offset={0.8} stopColor="white" stopOpacity={0.15} />
                <stop offset={1} stopColor="black" stopOpacity={1} />
              </>
            ) : (
              <>
                {/* Smooth fade for clean presentation */}
                <stop offset={0} stopColor="white" stopOpacity={1} />
                <stop offset={0.35} stopColor="white" stopOpacity={0.45} />
                <stop offset={1} stopColor="black" stopOpacity={1} />
              </>
            )}
          </linearGradient>
          {/* Mask combines soft oval edge with bottom fade */}
          <mask id={`${id}-mask`}>
            {/* Start fully hidden */}
            <rect x={0} y={0} width={width} height={height} fill="black" />
            {/* Soft oval reveal */}
            <rect x={0} y={0} width={width} height={height} fill={`url(#${id}-ovalRG)`} />
            {/* Stronger bottom fade applied over oval area */}
            <rect x={0} y={fadeStart} width={width} height={height - fadeStart} fill={`url(#${id}-fadeY)`} />
          </mask>
          {stylize && (
            <filter id={`${id}-illustrate`} x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
              {/* Posterize */}
              <feComponentTransfer result="posterized">
                <feFuncR type="discrete" tableValues={posterizeTable} />
                <feFuncG type="discrete" tableValues={posterizeTable} />
                <feFuncB type="discrete" tableValues={posterizeTable} />
              </feComponentTransfer>
              {/* Slight saturation boost */}
              <feColorMatrix in="posterized" type="saturate" values="1.2" result="sat" />
              {/* Edge detect and mix in for inked look */}
              <feConvolveMatrix in="sat" order="3" kernelMatrix="-1 -1 -1 -1 8 -1 -1 -1 -1" divisor="1" result="edges" />
              <feComponentTransfer in="edges" result="edgesStrong">
                <feFuncR type="linear" slope={edgeStrength.toString()} />
                <feFuncG type="linear" slope={edgeStrength.toString()} />
                <feFuncB type="linear" slope={edgeStrength.toString()} />
              </feComponentTransfer>
              <feBlend in="sat" in2="edgesStrong" mode="multiply" />
            </filter>
          )}
        </defs>
        {/* Background decorative shape behind the cutout */}
        {backgroundEnabled && (
          <g>
            {(() => {
              const bgRx = rx * 1.18 * backgroundScale
              const bgRy = ry * 1.12 * backgroundScale
              return (
                <ellipse
                  cx={cx}
                  cy={cy}
                  rx={bgRx}
                  ry={bgRy}
                  fill={backgroundColor}
                  opacity={backgroundOpacity}
                  transform={`rotate(${backgroundRotationDeg} ${cx} ${cy})`}
                />
              )
            })()}
          </g>
        )}
        <g mask={`url(#${id}-mask)`} className="group" filter={stylize ? `url(#${id}-illustrate)` : undefined}>
          <foreignObject width={width} height={height}>
            <Image
              {...img}
              alt={alt}
              style={{ imageRendering: stylize ? 'pixelated' as any : undefined, objectPosition, transform: flipHorizontal ? 'scaleX(-1)' : undefined, transformOrigin: 'center', opacity: 0.9, ...(img.style || {}) }}
              className={clsx('h-full w-full object-cover', (img as any).className)}
            />
          </foreignObject>
          {keyline && (
            <ellipse cx={cx} cy={cy} rx={rx} ry={ry} className="stroke-neutral-900/10" strokeWidth={1} fill="none" />
          )}
        </g>
      </svg>
    </div>
  )
}


