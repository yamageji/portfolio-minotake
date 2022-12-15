/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        zen: ["'Zen Kaku Gothic New'", 'sans-serif'],
        barlow: ["'Barlow Condensed'", 'sans-serif'],
        'barlow-semi': ["'Barlow Semi Condensed'", 'sans-serif'],
      },
      gridTemplateRows: {
        'layout-md': 'auto minmax(auto, 1fr) auto',
        'layout-lg': 'auto minmax(auto, 1fr) auto',
      },
      gridTemplateColumns: {
        'layout-md': 'minmax(0, auto) 1fr minmax(0, auto)',
        'layout-lg':
          'minmax(8px, auto) 232px repeat(6, minmax(0, 107px)) minmax(8px, auto)',
      },
    },
    colors: {
      white: colors.white,
      slate: colors.slate,
      teal: colors.teal,
      amber: colors.amber,
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
};
