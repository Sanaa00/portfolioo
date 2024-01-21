/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple1:"#C9ACDA",
        purple2:"#C9ACDA",
        purple3:"#C9ACDA",
        purple4:"#C9ACDA",
        purple5:"#C9ACDA",
        purple6:"#C9ACDA",
        // pinkk: "#cc2b5e",
        // purplee: "#8549A7",
        // dark: "#20262E",
        // darkgray: "#2D4356",
        // grayy: "#f0f2f5",
        cardgrayy: "#f0f2f9",
        orange: "#8549A7",
        lightOrange: "#edd2cb",
        lightGray: "#f1e8e6",
      },
      fontFamily: {
        Zen: ["Zen Loop", "cursive"],
        Alkatra: ["Alkatra", "cursive"],
        Poppins: ["Poppins", "sans-serif"],
        oswald: ['Oswald', "sans-serif"],
        josefin: ['Josefin Sans', "sans-serif"],
      jost:[ 'Jost', "sans-serif"]
      },
    },
  },
  plugins: [],
};
