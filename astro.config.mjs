import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';
import { defineConfig, sharpImageService } from 'astro/config';
const SITE_URL = 'https://minotake.dev';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [tailwind(), svelte(), sitemap(), robotsTxt()],
  experimental: {
    assets: true,
    viewTransitions: true,
  },
  image: {
    service: sharpImageService(),
  },
});
