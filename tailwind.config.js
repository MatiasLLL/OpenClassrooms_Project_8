/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'darkBlue': '#223576',
      'blue': '#35689f',
      'stone': '#b8b4ab',
      'white': '#cdf6ff',
      'darkGrey': '#233f5c',
    },
    fontSize: {
      '150': '1.50rem',
      '145': '1.45rem',
      '140': '1.40rem',
      '135': '1.35rem',
      '130': '1.30rem',
      '125': '1.25rem',
      '120': '1.20rem',
      '115': '1.15rem',
      '110': '1.10rem',
      '105': '1.05rem',
      '100': '1rem',
      '95': '0.95rem',
      '90': '0.9rem',
      '85': '0.85rem',
      '80': '0.8rem',
      '75': '0.75rem',
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'satoshi': ['Satoshi', 'sans-serif'],
    },
    screens: {
      'min2xl': {'min': '1700px'},
      'minxl': {'min': '1300px'},
      'minlg': {'min': '1030px'},
      'xl': {'max': '1200px'},
      'lg': {'max': '1030px'},
      'md': {'max': '770px'},
      'sm': {'max': '650px'},
      'xs': {'max': '480px'},
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
