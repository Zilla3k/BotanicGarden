/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      white: '#fff',
      black: '#000',
      'btn-green': {
        DEFAULT: '#e6eddb',
        hover: '#dfe6d5',
      },
    }
  },
  plugins: [],
};