import { defineCollection, z } from 'astro:content';

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string().default('Anonymous'),
    draft: z.boolean().default(false),
    coverImage: z.string().optional(),
    coverImageAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  articles: articlesCollection,
};
