/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple1:"#C9ACDA",
        purple2:"#BC97D1",
        purple3:"#AE82C8",
        purple4:"#A16DBF",
        purple5:"#9358B6",
        purple6:"#8549A7",
        purple7:"#764194",
        purple8:"#673982",
        purple9: "#58316F",
        purple10:"#4A295D",
        bgPink:"#FDE6E6",
        // pinkk: "#cc2b5e",
        // purplee: "#8549A7",
        dark: "#20262E",
        // darkgray: "#2D4356",
        // grayy: "#f0f2f5",
        cardgrayy: "#f0f2f9",
        // orange: "#8549A7",
        // lightOrange: "#edd2cb",
        // lightGray: "#f1e8e6",
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
