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
      colors: {
        peach: '#EACBBB',
        peach40: '#F7EAE4',
        peach20: '#FBF5F1',
        peach10: '#FDFAF8',
        heroblue: '#280071',
        violet: '#B1B5CE',
        violet40: '#E0E1EB',
        violet20: '#EFF0F5',
        violet10: '#F7F7FA'
      },
      fontFamily: {
        //sans: ['Karla', ...defaultTheme.fontFamily.sans]
        sans: ['TietoevrySans1-Regular', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
};
