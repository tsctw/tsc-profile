/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'code-light': '#322931',
        'nord-green': '#A3BE8C'
      }
    },
    screens: {
      'normal': '1024px'
    }
  },
  plugins: [],
  darkMode: 'class',
};
