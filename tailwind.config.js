const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "white-300": "#c1cfdc",
      green: "#08cd40",
      teal: "#2dd3be",
      "blue-400": "#243A7340",
      pink: "#CB1C8D"
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
