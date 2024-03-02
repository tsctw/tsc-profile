/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'nord-blue': '#8FBCBB',
        'nord-green': '#A3BE8C'
      }
    }
  },
  plugins: [],
  darkMode: 'class',
};
