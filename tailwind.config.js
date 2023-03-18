/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pinkk: "#cc2b5e",
        purplee: "#753a88",
        dark: "#161618",
        darkgray: "#2b2b2b",
        grayy: "#f0f2f5",
      },
      fontFamily: {
        Zen: ["Zen Loop", " cursive"],
      },
    },
  },
  plugins: [],
};
