/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily : {
        growth: ["growth", " sans-serif"],
        inter: ["inter", " sans-serif"],
        orbitron: ["orbitron", " sans-serif"],
        Poppins: ["Poppins", " sans-serif"],
        youth: ["youth", "cursive"],
        mokoto: ["mokoto", "cursive"],
        Sofia: ['Sofia Sans Extra Condensed', 'sans-serif'],
      },
      colors :{
        'primary' : '#04D9FF',
        'secondary' : '#7A7A7A',
        'tertary' : '#CCCCCC',
        'background' : '#161616',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

