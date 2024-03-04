export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Blog Article Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Blog Article Slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Article Title Image',
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Small Description',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}
