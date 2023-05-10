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
        }
      }
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
