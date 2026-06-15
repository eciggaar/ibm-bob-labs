---
title: Configuration
description: All available configuration options and environment variables.
section: Getting Started
order: 2
---

# Configuration

Edit `astro.config.mjs` to configure your site.

## Site URL

Set your GitHub Pages URL so Astro generates correct canonical links:

```js
export default defineConfig({
  site: 'https://your-username.github.io',
  base: '/your-repo-name', // Only needed for project pages, not user/org pages
});
```

## Tailwind theme

Open `tailwind.config.mjs` to change the brand colour palette, fonts, and any other tokens.

| Token | Default |
|---|---|
| `brand-500` | `#0ea5e9` (sky blue) |
| `font-sans` | Inter |
| `font-mono` | JetBrains Mono |
