'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

// Grid constants adapted from the original. Smaller cells = more circles.
const CELL_X = 96
const CELL_Y = 96
const SKEW_X_PER_Y = 32
// Calibration to reduce perceived hover offset (in px)
const CALIBRATION_X = -4
const CALIBRATION_Y = -2
// Circle drawing radius and hover activation radius (smaller than full circle)
const RADIUS = 20
const ACTIVATE_RADIUS = Math.floor(RADIUS * 0.8)
const HOVER_FILL_R = Math.max(1, RADIUS - 2)
const STATIC_FILL_R = Math.max(1, RADIUS - 3)

// (Removed old trapezoid Block; we use circles now.)

// Circle primitive positioned on the same isometric grid as the original blocks
function Circle({
  x,
  y,
  r = RADIUS,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof motion.circle>, 'x' | 'y'> & {
  x: number
  y: number
  r?: number
}) {
  return (
    <motion.circle
      transform={`translate(${-SKEW_X_PER_Y * y + CELL_X * x} ${CELL_Y * y})`}
      cx={0}
      cy={0}
      r={r}
      {...props}
    />
  )
}

export function GridPattern({
  yOffset = 0,
  interactive = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  yOffset?: number
  interactive?: boolean
}) {
  let ref = useRef<React.ElementRef<'svg'>>(null)
  let currentBlock = useRef<[x: number, y: number] | undefined>(undefined)
  let counter = useRef(0)
  let [hoveredBlocks, setHoveredBlocks] = useState<
    Array<[x: number, y: number, key: number]>
  >([])
  let staticBlocks = [
    [1, 1],
    [2, 2],
    [4, 3],
    [6, 2],
    [7, 4],
    [5, 5],
  ]

  // Frame circle outlines across the field, aligned to the isometric grid
  let frameBlocks: Array<[x: number, y: number]> = []
  for (let gy = -6; gy <= 10; gy++) {
    for (let gx = -10; gx <= 16; gx++) {
      frameBlocks.push([gx, gy])
    }
  }

  useEffect(() => {
    if (!interactive) {
      return
    }

    function onMouseMove(event: MouseEvent) {
      if (!ref.current) {
        return
      }

      let rect = ref.current.getBoundingClientRect()
      let x = event.clientX - rect.left
      let y = event.clientY - rect.top
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
        return
      }

      // translate into inner svg coordinate system
      x = x - rect.width / 2 + CALIBRATION_X
      y = y - yOffset + CALIBRATION_Y

      // invert the isometric transform used in Circle:
      // u = -S*y + A*x, v = B*y  => y = v/B; x = (u + S*y)/A
      let gy = y / CELL_Y
      let gx = (x + SKEW_X_PER_Y * gy) / CELL_X
      let ix = Math.round(gx)
      let iy = Math.round(gy)

      // compute the actual center of that cell in the same coordinate space
      let cx = -SKEW_X_PER_Y * iy + CELL_X * ix
      let cy = CELL_Y * iy
      let dist = Math.hypot(x - cx, y - cy)

      // only activate when hovering close enough to the circle center
      if (dist > ACTIVATE_RADIUS) {
        return
      }

      if (currentBlock.current?.[0] === ix && currentBlock.current?.[1] === iy) {
        return
      }

      currentBlock.current = [ix, iy]
      setHoveredBlocks((blocks) => {
        let key = counter.current++
        let block = [ix, iy, key] as (typeof hoveredBlocks)[number]
        return [...blocks, block].filter(
          (block) => !(block[0] === ix && block[1] === iy && block[2] !== key),
        )
      })
    }

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [yOffset, interactive])

  return (
    <svg ref={ref} aria-hidden="true" {...props}>
      <rect width="100%" height="100%" fill="transparent" strokeWidth="0" />
      <svg x="50%" y={yOffset} strokeWidth="0" className="overflow-visible">
        {/* Faint circle outlines as the background frame */}
        {frameBlocks.map(([gx, gy]) => (
          <Circle
            key={`frame-${gx}-${gy}`}
            x={gx}
            y={gy}
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
            opacity={0.102}
            vectorEffect="non-scaling-stroke"
          />
        ))}

        {/* Static accent circles (subtle filled) */}
        {staticBlocks.map((block) => (
          <Circle
            key={`${block}`}
            x={block[0]}
            y={block[1]}
            fill="currentColor"
            opacity={0.029}
            r={STATIC_FILL_R}
          />
        ))}

        {/* Hover pulses as filled circles that fade in/out */}
        {hoveredBlocks.map((block) => (
          <Circle
            key={block[2]}
            x={block[0]}
            y={block[1]}
            fill="currentColor"
            r={HOVER_FILL_R}
            animate={{ opacity: [0, 0.085, 0] }}
            transition={{ duration: 1, times: [0, 0, 1] }}
            onAnimationComplete={() => {
              setHoveredBlocks((blocks) =>
                blocks.filter((b) => b[2] !== block[2]),
              )
            }}
          />
        ))}
      </svg>
    </svg>
  )
}
