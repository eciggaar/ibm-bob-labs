# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## Content Collections Architecture

**Critical**: Labs use a two-tier structure that's non-obvious from file names:
- Landing pages (e.g., `index.md`) MUST have `total_sections` in frontmatter
- Section pages MUST NOT have `total_sections` (this is the filter in `getStaticPaths`)
- Slug extraction uses `.split('/').pop()` to get filename only (not full path)
- Lab series identifier (`lab_series`) must match the directory name for routing

## Dynamic Route Patterns

**URL structure**: `/labs/[series]/[slug]` where:
- `[series]` = `lab_series` frontmatter value (e.g., "bob-intro", "documentalist")
- `[slug]` = filename without path (extracted via `.split('/').pop()`)
- Landing pages route to `/labs/[series]/` (index route)

**Hardcoded series titles**: Lab series names are hardcoded in layouts:
- "bob-intro" → "Bob Intro Lab"
- "documentalist" → "Documentalist Lab"
- Add new mappings in `LabLayout.astro` line 19 and `[series]/index.astro` line 35

## Frontmatter Schema Requirements

**Labs collection** (`src/content/config.ts`):
- `lab_series`: Required string, must match directory structure
- `section_number`: Optional number for ordering (lower = first)
- `total_sections`: Only for landing pages (triggers different rendering)
- `estimated_duration`: Only for landing pages
- `duration`: Only for section pages

**Docs collection**:
- `section`: Groups pages in sidebar (defaults to "General")
- `order`: Sort order within section (lower = first)

## Client-Side TOC Generation

**Non-standard approach**: Table of contents is generated client-side via JavaScript (not at build time):
- Scans for `h2` and `h3` elements in `#main-content`
- Auto-generates IDs from heading text if missing
- Uses IntersectionObserver for scroll highlighting
- Located in `LabLayout.astro` lines 186-251

## Astro Config Deployment

**GitHub Pages setup**: Must manually configure in `astro.config.mjs`:
- `site`: Set to `https://your-username.github.io`
- `base`: Only needed for project pages (not username.github.io repos)
- Currently commented out (line 7) - uncomment and configure before deploying