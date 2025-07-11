export interface HomePage {
  title: string
  subtitle: string
  heroImage: any
  ctaText: string
  ctaLink: string
  heroStats: {
    label: string
    value: string
    icon: string
  }[]
  aboutSection: {
    heading: string
    body: string
    image: any
    ctaText: string
  }
}
