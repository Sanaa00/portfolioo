/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        purple1: '#C9ACDA',
        purple2: '#BC97D1',
        purple3: '#AE82C8',
        purple4: '#A16DBF',
        purple5: '#9358B6',
        purple6: '#8549A7',
        purple7: '#764194',
        purple8: '#673982',
        purple9: '#58316F',
        purple10: '#4A295D',
        bgPerple: '#F3E8FF',
        bgPinkSection: '#EAC4D5',
        bgPink: '#F8E4EC',
        txColor: '#4A3C31 ',
        bgPinkLight: '#F8E4EC',
        bgPinkdark: '#F1B6C0',
        dark: '#20262E',
        cardgrayy: '#f0f2f9',
      },
      fontFamily: {
        Zen: ['Zen Loop', 'cursive'],
        Alkatra: ['Alkatra', 'cursive'],
        Poppins: ['Poppins', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
        jost: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
