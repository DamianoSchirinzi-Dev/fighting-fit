export const homepageQuery = `
  *[_type == "homePage"][0]{
    title,
    subtitle,
    heroImage,
    ctaText,
    ctaLink,
    featuredCoaches[]->{
      name,
      slug,
      image
    }
  }
`