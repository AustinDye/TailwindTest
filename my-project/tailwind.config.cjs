/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#DF654B',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#151A1F',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'black': '#000000',
      'white': '#ffffff',
      'darkblue': "#142845"

    },
  },
  plugins: [],
}