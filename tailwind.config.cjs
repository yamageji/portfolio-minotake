/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        zen: ["'Zen Kaku Gothic New'", "sans-serif"],
        barlow: ["'Barlow Condensed'", "sans-serif"],
      },
    },
    colors: {
      slate: colors.slate,
      teal: colors.teal,
      amber: colors.amber,
    },
  },
  plugins: [],
};
