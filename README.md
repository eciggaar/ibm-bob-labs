# Docs Site

A GitHub Pages documentation site powered by [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # builds to dist/
```

## Adding your docs

1. Drop your `.md` files into `src/content/docs/`
2. Add frontmatter to each file:

```yaml
---
title: My Page Title
description: A short summary shown on the home page cards.
section: Section Name   # groups pages in the sidebar
order: 1                # sort order within the section
---
```

3. Push to `main` — GitHub Actions handles the rest.

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages → Source** and select **GitHub Actions**.
3. Edit `astro.config.mjs`:
   - Set `site` to `https://your-username.github.io`
   - Set `base` to `/your-repo-name` **only** if this is a project page (not a `username.github.io` repo)
4. Push — the workflow in `.github/workflows/deploy.yml` builds and deploys automatically.

## Customisation

| File | What to change |
|---|---|
| `tailwind.config.mjs` | Brand colours, fonts |
| `src/layouts/DocsLayout.astro` | Sidebar, header, page chrome |
| `src/pages/index.astro` | Home page hero + grid |
| `astro.config.mjs` | Site URL, base path, integrations |
