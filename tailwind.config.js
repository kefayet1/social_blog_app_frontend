/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'box-boxShadow': '0 0 0 2px black'
      },
      fontSize: {
        "emoji" : "18px",
        "socialIcon" : "22px"
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

