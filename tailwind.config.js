const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
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
      boxShadow: {
        btn: "0 10px 20px 0 rgba(8, 12, 28, 0.23)",
        drop: "0 5px 10px 0 rgba(22, 37, 101, 0.23)",
      },
      height: {
        60: "3.75rem",
        28: "1.75rem",
        114: "114%",
        94: "5.875rem",
        44: "2.75rem",
        2: "0.125rem",
      },
      borderRadius: {
        drop: "0.312rem",
      },
      width: {
        164: "10.25rem",
        94: "5.875rem",
        44: "2.75rem",
        2: "0.125rem",
      },
      minWidth: {
        120: "120%",
      },
      maxWidth: {
        title: "25.43rem",
        desc: "17.56rem",
      },
      padding: {
        30: "1.875rem",
        drop: "6.625rem 4.06rem 5.75rem 4.06rem",
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
      "2xl": "1366px",
    },
    container: {
      center: true,
      padding: "16rem",
    },
  },
  plugins: [],
};
