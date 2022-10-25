export default {
  name: 'profileSkills',
  title: 'Profile Skills',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'percentage',
      title: 'Percentage',
      type: 'number',
      validation: (Rule) => Rule.required().min(10).max(100),
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
