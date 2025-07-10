export default {
  name: 'homePage',
  title: 'Homepage',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Hero Title' },
    { name: 'subtitle', type: 'string', title: 'Hero Subtitle' },
    { name: 'heroImage', type: 'image', title: 'Hero Image' },
    { name: 'ctaText', type: 'string', title: 'CTA Button Text' },
    { name: 'ctaLink', type: 'url', title: 'CTA Button Link' },
    {
      name: 'featuredCoaches',
      title: 'Featured Coaches',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'coach' }] }],
    },
  ],
}