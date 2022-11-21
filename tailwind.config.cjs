/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bgc: '#182747',
        textCol: '#D8D8D8',
      },
    },
  },
  plugins: [],
};
