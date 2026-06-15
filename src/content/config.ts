// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    section: z.string().optional(),   // Groups pages in sidebar, e.g. "Getting Started"
    order: z.number().optional(),     // Sort order within a section (lower = first)
  }),
});

const labs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    lab_series: z.string(),           // e.g. "bob-intro" or "documentalist"
    section_number: z.number().optional(), // For lab sections
    duration: z.string().optional(),  // e.g. "15 min" or "~30 minutes"
    audience: z.string().optional(),  // e.g. "Mixed — content administrators & business analysts"
    total_sections: z.number().optional(), // For lab landing pages
    estimated_duration: z.string().optional(), // For lab landing pages
    bob_mode: z.string().optional(),  // e.g. "Advance" or "Code"
    layout: z.string().optional(),    // For compatibility with Jekyll layouts
  }),
});

export const collections = { docs, labs };
