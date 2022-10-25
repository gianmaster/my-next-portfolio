export default {
  name: 'profileSection',
  title: 'Profile Sections',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Section Name',
      type: 'string',
    },
    {
      name: 'lang',
      title: 'Language',
      type: 'reference',
      to: { type: 'language' },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
