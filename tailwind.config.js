const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Roboto"', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [],
};