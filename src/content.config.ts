import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  // Le decimos a Astro que busque los archivos .md dentro de src/docs/
  loader: glob({ pattern: '**/*.md', base: './src/docs' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
  }),
});

export const collections = { docs };