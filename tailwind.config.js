/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'color1': '#00d275',
      'color2': '#af52ce',
      'color3': '#5cf8d7',
      'color4': '#dd9e9d',
      'color5': '#d39b96',
      'color6': '#f1f8f8',
      'color7': '#5188aa',
      'color8': '#bfab60',
      'color9': '#333d38',
      'color10': '#80afcf',
      'color11': '#6fcdff',
      'color12': '#b6e6ff',
    },
    fontSize: {
      'title': '1.5rem',
      'link': '1.15rem',
      'cat': '0.85rem',
      'active': '0.95rem',
      // '2xl': '1.563rem',
      // '3xl': '1.953rem',
      // '4xl': '2.441rem',
    },
    fontFamily: {
      'aquatico': ['Aquatico', 'sans-serif'],
    },
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
      'xs': {'max': '450px'},
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    // require('tailwind-scrollbar'),
  ],
}

// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// /** @type {import('tailwindcss').Config} */
// export default