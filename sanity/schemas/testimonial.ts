export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'text', title: 'Testimonial Text', type: 'text' },
    {
      name: 'rating',
      title: 'Rating (1–5)',
      type: 'number',
      validation: (Rule: any) => Rule.min(1).max(5),
    },
  ],
}