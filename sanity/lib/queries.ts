export const homepageQuery = `
*[_type == "homePage"][0]{
  title,
  subtitle,
  heroImage,
  ctaText,
  ctaLink,
  heroStats[],
  aboutSection{
    heading,
    body,
    image,
    ctaText
  }
}
`;

export const classesQuery = `
*[_type == "class"] | order(name asc){
  name,
  description,
  schedule,
  level
}
`

export const coachesQuery = `
  *[_type == "coach"] | order(order asc){
    name,
    role,
    slug,
    bio,
    image,
    specialties
  }
`

export const testimonialsQuery = `
  *[_type == "testimonial"] | order(_createdAt desc){
    name,
    text,
    rating
  }
`