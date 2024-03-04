/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'code-light': '#322931'
      },
      inset: {
        'minus-80': '-20rem'
      },
      height: {
        'calc-5rem': 'calc(100% - 5rem)'
      }
    },
    screens: {
      'normal': '1024px',
      'small': '600px'
    }
  },
  plugins: [],
  darkMode: 'class'
};
