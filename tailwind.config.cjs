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
      white: '#ffffff',
      'bg-primary': '#E2E8F0', //slate-200
      'bg-secondary': '#334155', //slate-700
      'bg-surface-primary': '#F8FAFC', //teal-50
      'bg-surface-secondary': '#0f172a', //slate-900
      'bg-accent-primary': '#14b8a6', //teal-500
      'bg-accent-secondary': '#94A3B8', //teal-400

      'text-primary': '#0f172a', //slate-900
      'text-secondary': '#334155', //slate-700
      'text-tertiary': '#475569', //slate-600
      'text-quaternary': '#1e293b', //slate-800
      'text-light': '#f8fafc', //slate-800
      'text-accent-primary': '#0d9488', //teal-600

      'border-primary': '#e2e8f0', //slate-200
      'border-secondary': '#64748b', //slate-500
      'border-tertiary': '#334155', //slate-700
      'border-quaternary': '#CBD5E1', //slate-300
      'border-accent-primary': '#0d9488', //teal-600
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
};
