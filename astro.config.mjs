import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';
import robotsTxt from "astro-robots-txt";
const SITE_URL = 'https://minotake.dev/';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [tailwind(), svelte(), sitemap(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), robotsTxt()]
});