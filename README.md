# Arhin Foundation Website

A minimal philanthropic foundation website built with Next.js, TypeScript, and Tailwind CSS.

## Overview

This is a 4-page foundation website with the following routes:
- **Home** (`/`) - Hero, mission overview, approach, current priorities
- **Mission** (`/mission`) - Values, approach, focus areas
- **About** (`/about`) - Founder bio, affiliations, external links
- **Contact** (`/contact`) - Contact form with validation

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with disciplined color system
- **Fonts**: Google Fonts (Cormorant for headings, Karla for body text)
- **Content**: MDX files in `/content` directory
- **Validation**: Zod
- **UI Components**: Custom components with Tailwind UI patterns

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Content Management

#### Editing Content

All page content is managed through MDX files in the `/content` directory:

- `/content/home.mdx` - Home page content
- `/content/mission.mdx` - Mission page content  
- `/content/about.mdx` - About page content
- `/content/contact.mdx` - Contact page content

#### Updating Site Configuration

Edit `/src/site.config.ts` to update:

- Foundation name and taglines
- Navigation items
- Color scheme
- SEO metadata

```typescript
export const site = {
  name: "Arhin Foundation",
  tagline: "Your tagline here",
  subtagline: "Your subtitle here",
  nav: [
    { label: "Home", href: "/" },
    // ... other nav items
  ],
  colors: { 
    base: "#0B0B0B", 
    paper: "#F8F7F3", 
    accent: "#B29A5B" 
  },
  seo: {
    title: "Arhin Foundation",
    description: "Your site description",
    ogImage: "/og.png",
  },
}
```

## Color System

The Arhin Foundation uses a disciplined color system based on Noir & Brass with strategic use of Sage and Merlot accents.

### Color Palette

**Core Brand (80% usage):**
- **Paper**: `#F8F7F3` - Primary backgrounds
- **Ink**: `#0B0B0B` - Primary text
- **Brass**: `#B29A5B` - Accents, focus rings, icons

**Primary CTA (15% usage):**
- **Sage**: `#5F7F72` - Buttons, links, mental health aligned

**Ceremonial (≤2% usage):**
- **Merlot**: `#7A1E33` - Keylines, badges only (never body text)

**Supporting Colors:**
- **Moss**: `#3E5A49` - Charts, secondary fills
- **Muted**: `#EDEAE3` - Soft backgrounds
- **Border**: `#DCD7CE` - Dividers

### Usage Guidelines

**Dosage Rules:**
- ~80%: Paper/Ink (core surfaces and text)
- ~15%: Muted bands and Sage CTAs
- ≤5%: Brass accents (rules, icons, focus)
- ≤2%: Merlot ceremonial (keylines, badges only)

**Merlot Restrictions:**
- ❌ Never use for body text
- ❌ Never use for buttons
- ❌ Never use for large backgrounds
- ✅ Only for: 1px keylines, small badges, tiny tags

### Implementation

Colors are defined as CSS variables in `/src/styles/tailwind.css` and mapped to semantic Tailwind utilities in `tailwind.config.ts`. All components use semantic color classes (e.g., `text-fg`, `bg-primary`, `border-border`).

### Theme Variants

- **Default**: Noir & Brass with Sage CTAs
- **Mission page**: `theme-sage` wrapper for softer backgrounds
- **About page**: Merlot keyline under founder heading

#### Customizing Colors & Fonts

1. Update color tokens in `/src/site.config.ts`
2. Modify CSS variables in `/src/styles/tailwind.css`
3. Update Tailwind mappings in `tailwind.config.ts`
4. To change fonts, update the Google Fonts import and font variables in `/src/styles/tailwind.css`

#### Content Placeholders

Replace all TODO placeholders with actual content:

- `TAGLINE_PLACEHOLDER` → Your foundation tagline
- `MISSION_INTRO_TODO` → Mission statement
- `VALUE_1_LABEL_TODO` → First value title
- `FOUNDER_BIO_SNIPPET_TODO` → Founder bio
- And many more...

## Contact Form

The contact form includes:

- **Validation**: Client and server-side validation with Zod
- **Security**: Honeypot field and math captcha
- **Fields**: Name, Email, Organization, Reason, Message (500 char limit)
- **API**: POST to `/api/contact` with server logging

### Form Configuration

To integrate with email services:

1. Update `/src/app/api/contact/route.ts`
2. Add email service (SendGrid, Resend, etc.)
3. Configure environment variables
4. Add database storage if needed

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables if needed
3. Deploy automatically on push to main branch

### Other Platforms

The site can be deployed to any platform that supports Next.js:

- **Netlify**: Use Next.js build command
- **Railway**: Deploy with Docker
- **AWS/GCP**: Use container deployment

### Environment Variables

```bash
# Optional: Set base URL for sitemap
NEXT_PUBLIC_BASE_URL=https://your-domain.com
```

## Performance

- **Images**: Optimized with `next/image`
- **Fonts**: Self-hosted Mona Sans font
- **SEO**: Automatic sitemap and robots.txt
- **Accessibility**: WCAG AA compliant
- **Lighthouse**: Target 90+ Performance, 95+ Accessibility

## Development

### Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── api/             # API routes
│   ├── mission/         # Mission page
│   ├── about/           # About page
│   └── contact/         # Contact page
├── components/         # React components
├── lib/                 # Utilities and validations
└── styles/              # CSS and Tailwind config

content/                 # MDX content files
public/                  # Static assets
```

### Key Components

- `SiteHeader` - Navigation with mobile drawer
- `SiteFooter` - Simplified footer
- `Hero` - Large display sections
- `Section` - Content wrapper
- `ContactForm` - Form with validation
- `ValueGrid` - Mission values display
- `HowWeWork` - Process steps
- `Pillars` - Focus areas
- `FounderSpotlight` - Founder section

## Accessibility

- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Proper ARIA labels
- **Color Contrast**: WCAG AA compliant
- **Focus Management**: Visible focus indicators
- **Reduced Motion**: Respects user preferences

## License

Private foundation website - not for public use.