import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { remarkBaseUrl } from './remark-base-url.mjs';

export default defineConfig({
  integrations: [tailwind()],
  // GitHub Pages configuration for eciggaar/ibm-bob-labs
  base: '/ibm-bob-labs',
  site: 'https://eciggaar.github.io',
  markdown: {
    remarkPlugins: [[remarkBaseUrl, '/ibm-bob-labs']],
  },
});
