import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        fg: "var(--fg)",
        muted: "var(--muted)",
        border: "var(--border)",
        primary: "var(--primary)",
        onprimary: "var(--on-primary)",
        accent: "var(--accent)",
        support: "var(--support)",
        merlot: "var(--merlot)",
        success: "var(--success)",
        danger: "var(--danger)",
        ring: "var(--ring)",
      },
    },
  },
  plugins: [],
}

export default config
