/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'tatacoa': 'url("/src/assets/challenges/desierto_tatacoa.webp")',
        'colon': 'url("/src/assets/challenges/pico_colon.webp")',
        'cristales': 'url("/src/assets/challenges/caño_cristales.webp")',
        'peñol': 'url("/src/assets/challenges/piedra_peñol.webp")',
        'isla': 'url("/src/assets/challenges/san_andres_isla.webp")',
      }
    },
  },
  plugins: [],
};
