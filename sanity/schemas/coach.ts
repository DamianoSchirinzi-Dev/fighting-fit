export default {
  name: 'coach',
  title: 'Coach',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'role', title: 'Role', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
    { name: 'bio', title: 'Bio', type: 'text' },
    { name: 'image', title: 'Image', type: 'image' },
    {
      name: 'specialties',
      title: 'Specialties',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
}