import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';

// const SITE_URL = '';

export default defineConfig({
  // site: SITE_URL,
  integrations: [
    tailwind(),
    svelte(),
    sitemap(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
});
