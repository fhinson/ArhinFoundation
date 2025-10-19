export const site = {
  name: "Arhin Foundation",
  tagline: "A healthy mind is the foundation of a healthy life.",
  subtagline: "Everyone deserves to dream.",
  nav: [
    { label: "Home", href: "/" },
    { label: "Mission", href: "/mission" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
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
    description: "Philanthropy with discipline—mental health first. We back practical access to care, develop talent in the field, and reduce stigma so help feels normal and close to home.",
    ogImage: "/og.png",
  },
} as const

export type SiteConfig = typeof site
