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
      name: 'heroStats',
      title: 'Hero Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'stat',
          fields: [
            { name: 'label', type: 'string', title: 'Label' },
            { name: 'value', type: 'string', title: 'Value' },
            { name: 'icon', type: 'string', title: 'Lucide Icon Name' }, // e.g., "Users", "Trophy"
          ],
        },
      ],
    },
    {
      name: 'aboutSection',
      title: 'About Section',
      type: 'object',
      fields: [
        { name: 'heading', type: 'string' },
        { name: 'body', type: 'text' },
        { name: 'image', type: 'image' },
        { name: 'ctaText', type: 'string' },
      ],
    },
    {
      name: 'featuredClasses',
      title: 'Featured Classes',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'class' }] }],
    }
  ],
}
