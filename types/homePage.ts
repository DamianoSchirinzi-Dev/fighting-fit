export interface HomePage {
  title: string
  subtitle: string
  heroImage: any
  ctaText: string
  ctaLink: string
  featuredCoaches: {
    name: string
    slug: { current: string }
    image: any
  }[]
}