import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ============================================================
// projects collection — project case studies
// one file per locale per project, under <locale>/<slug>.md
// (e.g. en/cocle-solar.md, es/cocle-solar.md). the locale prefix
// stays in the id so en/<slug> and es/<slug> don't collide.
// ============================================================
const projects = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/projects',
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    locale: z.enum(['en', 'es']),
    eyebrow: z.string().optional(),
    lede: z.string(),
    location: z.string(),
    // year can be a number, a year range, or 'TBD' for new drafts
    year: z.union([z.number(), z.string()]),
    // technology sector(s) — drives the project filters
    sector: z.enum(['solar', 'wind', 'storage', 'mixed']),
    // delivery scope: development, epc, o&m, owners-engineer ...
    scope: z.array(z.string()).optional(),
    role: z.string().optional(),
    status: z.string().optional(),
    // hero metric (single number that earned the project) — optional
    metric: z
      .object({
        value: z.string(),
        unit: z.string().optional(),
        label: z.string(),
        note: z.string().optional(),
      })
      .optional(),
    // secondary key metrics shown in the project meta band
    metrics: z
      .array(z.object({ value: z.string(), unit: z.string().optional(), label: z.string() }))
      .optional(),
    // photo handling
    heroImage: z.string().optional(),
    gallery: z.array(z.object({ src: z.string(), tag: z.string().optional() })).optional(),
    // narrative — problem / approach / outcome
    challenge: z.string().optional(),
    approach: z.string().optional(),
    result: z.string().optional(),
    servicesProvided: z.array(z.string()).optional(),
    closingQuote: z.string().optional(),
    featured: z.boolean().default(false),
    comingSoon: z.boolean().default(false),
    order: z.number().optional(),
  }),
});

// ============================================================
// blog / insights collection — knowledge-center articles
// files live under <locale>/<slug>.md
// ============================================================
const blog = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/blog',
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    locale: z.enum(['en', 'es']),
    eyebrow: z.string().optional(),
    summary: z.string(),
    date: z.coerce.date(),
    author: z.string().default('forward energy'),
    heroImage: z.string().optional(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    keywords: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
