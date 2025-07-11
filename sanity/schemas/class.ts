export default {
  name: 'class',
  title: 'Class',
  type: 'document',
  fields: [
    { name: 'name', title: 'Class Name', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'schedule', title: 'Schedule', type: 'string' },
    {
      name: 'level',
      title: 'Skill Level',
      type: 'string',
      options: {
        list: ['Beginner', 'Intermediate', 'Advanced', 'All Levels'],
      },
    },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
  ],
}
