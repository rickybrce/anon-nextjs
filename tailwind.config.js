/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'blue': {
          100:"#0B0D21",
          200: "#232966",
          300:"#2E357B"
        },
        'green': {
          100:"#075985",
          200: "#5EEAD4",
        },
      },
      fontFamily: {
        thunder: ['"Quicksand", sans-serif'],
      },
    },
  },
  plugins: [plugin(function({ addUtilities }) {
    const newUtilities = {
      '.font-w-300': {
        fontWeight: 300,
        fontVariationSettings: '"wght" 300'
      },
      '.font-w-400': {
        fontWeight: 400,
        fontVariationSettings: '"wght" 400'
      },
      '.font-w-500': {
        fontWeight: 500,
        fontVariationSettings: '"wght" 500'
      },
      '.font-w-600': {
        fontWeight: 600,
        fontVariationSettings: '"wght" 600'
      },
      '.font-w-700': {
        fontWeight: 700,
        fontVariationSettings: '"wght" 700'
      },
    }

    addUtilities(newUtilities)
  }),
  require('@headlessui/tailwindcss')],
}
