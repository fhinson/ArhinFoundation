export const site = {
  name: "Arhin Foundation",
  tagline: "A healthy mind is the foundation of a healthy life.",
  subtagline: "Everyone deserves to dream.",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Donate", href: "/donate" },
  colors: {
    // Surfaces & text
    bg:        "#F8F7F3", // paper
    fg:        "#0B0B0B", // ink
    muted:     "#EDEAE3",
    border:    "#DCD7CE",

    // Brand
    primary:   "#5F7F72", // Sage (CTA, links)
    onPrimary: "#FFFFFF",

    accent:    "#B29A5B", // Brass (rules, icons, focus ring)
    support:   "#3E5A49", // Moss (charts, secondary fills)

    // Ceremonial (use sparingly)
    merlot:    "#7A1E33", // keylines/badges only, not body copy

    // Feedback
    success:   "#2E6D74",
    danger:    "#7A2E34",

    // Dark mode surfaces
    darkBg:    "#0B0B0B",
    darkFg:    "#F8F7F3",
    darkMuted: "#171717",
    darkBorder:"#2A2A2A",
  },
  seo: {
    title: "Arhin Foundation",
    description: "The Arhin Foundation helps children in underserved NYC communities access mental health care by funding therapy and psychiatric services and strengthening providers who put help within reach.",
    ogImage: "/school.webp",
  },
} as const

export type SiteConfig = typeof site
