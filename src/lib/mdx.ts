import { type ImageProps } from 'next/image'

type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string }

export type MDXEntry<T> = T & { href: string; metadata: T }

export interface ContentPage {
  title: string
  description: string
  content: string
}

export async function loadContent(slug: string): Promise<ContentPage | null> {
  try {
    const content = await import(`../../content/${slug}.mdx`)
    return {
      title: content.title || slug.charAt(0).toUpperCase() + slug.slice(1),
      description: content.description || '',
      content: content.default || '',
    }
  } catch (error) {
    console.error(`Failed to load content for ${slug}:`, error)
    return null
  }
}
