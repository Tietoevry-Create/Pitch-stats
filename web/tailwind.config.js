/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        100: '25rem',
        104: '26rem',
        108: '27rem',
        112: '28rem',
        116: '29rem',
        120: '30rem',
        124: '31rem',
        128: '32rem'
      },
      colors: { coffe: '#FBF0E7', tepurple: '#560E62' },
      fontFamily: {
        sans: ['Karla', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
};
