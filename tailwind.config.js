/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#e6f8ff",
          400: "#00A0DD",
          500: "#0092cc",
          600: "#006e99",
          700: "#0D436B",
        },
        gray: {
          50: "#F3F5F7",
          100: "#E7EAEE",
          150: "#CFD5DE",
          200: "#ABB6C4",
          300: "#8797AB",
          400: "#6F829C",
          500: "#546478",
          600: "#3B4654",
          650: "#2A323C",
          700: "#20262E",
          800: "#191E24",
          900: "#080A0C",
        },
      },
      fontFamily: {
        heading: ["Nunito Sans", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          stack: value => ({
            "& > * + *": {
              marginTop: value,
            },
          }),
        },
        { values: theme("spacing") }
      );
    }),
    plugin(({ addVariant }) => {
      addVariant("error", '&[data-error="error"]');
      addVariant("child-svg", "& > svg");
      addVariant("scrollbar", "&::-webkit-scrollbar");
      addVariant("scrollbar-track", "&::-webkit-scrollbar-track");
      addVariant("scrollbar-thumb", "&::-webkit-scrollbar-thumb");
    }),
  ],
};
