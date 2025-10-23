import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
    './mdx-components.tsx',
  ],
  theme: {
    extend: {
      colors: {
        bg: "#fefdf8",
        fg: "#2c1810",
        muted: "#f7f4f0",
        border: "#e8ddd4",
        primary: "#722f37",
        "on-primary": "#fefdf8",
        accent: "#B08D57",
        brass: "#B08D57",
        "brass-deep": "#8A6C3A",
        "brass-hover": "#9C7B43",
        "brass-tint": "#EFE6D6",
        merlot: "#722f37",
        "merlot-light": "#8b4a52",
        ivory: "#fefdf8",
        "ivory-dark": "#f5f1e8",
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)'],
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'slide-in': 'slide-in 0.3s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
