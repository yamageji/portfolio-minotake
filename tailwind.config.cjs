/** @type {import('tailwindcss').Config} */

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
          'minmax(8px, auto) 216px repeat(6, minmax(0, 107px)) minmax(8px, auto)',
      },
    },
    screens: {
      xs: '440px',
      sm: '640px',
      md: '768px',
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      bg: {
        primary: '#E2E8F0', //slate-200
        secondary: '#334155', //slate-700
        'surface-primary': '#F8FAFC', //slate-50
        'surface-secondary': '#0f172a', //slate-900
        'accent-primary': '#14b8a6', //teal-500
        'accent-secondary': '#94A3B8', //teal-400
      },
      text: {
        primary: '#0f172a', //slate-900
        secondary: '#334155', //slate-700
        tertiary: '#475569', //slate-600
        quaternary: '#1e293b', //slate-800
        light: '#f8fafc', //slate-800
        'accent-primary': '#0d9488', //teal-600
      },
      border: {
        primary: '#e2e8f0', //slate-200
        secondary: '#64748b', //slate-500
        tertiary: '#334155', //slate-700
        quaternary: '#CBD5E1', //slate-300
        'accent-primary': '#0d9488', //teal-600
      },
      fv: {
        bg: {
          primary: '#14b8a6',
        },
        tx: {
          primary: '#64748b',
        },
        logo: {
          primary: '#14b8a6',
          secondary: '#334155',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
};
