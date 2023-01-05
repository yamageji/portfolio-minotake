import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';

// const SITE_URL = '';

export default defineConfig({
  // site: SITE_URL,
  integrations: [tailwind(), svelte(), sitemap()],
});
