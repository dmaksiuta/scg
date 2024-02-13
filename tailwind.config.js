const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      white: "#fff",
      primary: "#FF643C",
      active: "#1432B4",
      link: "#999",
      gray: "#e5e5e5",
      footer_link: "#cecece",
    },
    extend: {
      fontFamily: {
        sans: ['"Roboto"', ...defaultTheme.fontFamily.sans],
      },
      size: {
        38: "2.375rem",
        60: "3.75rem",
      },
      height: {
        60: "3.75rem",
        28: "1.75rem",
      },
      width: {
        164: "10.25rem",
      },
      padding: {
        30: "1.875rem",
      },
      translate: {
        center: "-50%",
        menu: "-120%",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1145px",
    },
    container: {
      center: true,
      padding: "16rem",
    },
  },
  plugins: [],
};
