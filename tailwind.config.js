/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'tatacoa': 'url("/src/assets/challenges/buri/desierto_tatacoa.webp")',
        'colon': 'url("/src/assets/challenges/buri/pico_colon.webp")',
        'cristales': 'url("/src/assets/challenges/buri/caño_cristales.webp")',
        'peñol': 'url("/src/assets/challenges/buri/piedra_peñol.webp")',
        'isla': 'url("/src/assets/challenges/buri/san_andres_isla.webp")',
        'mononoke': 'url("/src/assets/challenges/buri/mononoke.webp")',
        'piracy_flag': 'url("/src/assets/challenges/buri/piracy_flag.webp")',
        'original': 'url("/src/assets/challenges/buri/original.webp")',
      }
    },
  },
  plugins: [],
};
