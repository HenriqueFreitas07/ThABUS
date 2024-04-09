/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //our colors
        'blue': '#333A73',
        'light-blue': '#50C4ED',
        'medium-blue': '#387ADF',
        'orange': '#FBA834',
        // normal colors
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',

      },
    },
  },
  plugins: [],
}