/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        zen: ["'Zen Kaku Gothic New'", 'sans-serif'],
        barlow: ["'Barlow Condensed'", 'sans-serif'],
      },
      gridTemplateRows: {
        layout: 'auto minmax(auto, 1fr) auto',
      },
      gridTemplateColumns: {
        layout:
          'minmax(0, auto) 240px repeat(6, minmax(0, 107px)) minmax(0, auto)',
      },
    },
    colors: {
      white: colors.white,
      slate: colors.slate,
      teal: colors.teal,
      amber: colors.amber,
    },
  },
  plugins: [],
};
