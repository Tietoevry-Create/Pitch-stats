/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { coffe: "FBF0E7", tepurple: "560E62" },
      fontFamily: {
        sans: ["Karla", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
