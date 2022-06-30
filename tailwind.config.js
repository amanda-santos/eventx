/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        blur: "url(/src/public/assets/blur.png)",
      },
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
      colors: {
        pink: {
          300: "#FC3FBA",
          500: "#AF2C82",
          700: "#96266F",
        },
        blue: {
          500: "#81D8F7",
          700: "#207EA1",
        },
        gray: {
          100: "#E1E1E6",
          200: "#C4C4CC",
          300: "#8D8D99",
          500: "#323238",
          600: "#29292E",
          700: "#121214",
          900: "#09090A",
        },
      },
    },
  },
  plugins: [],
};
