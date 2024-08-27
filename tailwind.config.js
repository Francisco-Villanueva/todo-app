/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#884cb1",
        bg:{
          background:"#d4ceea"
        }
      },
      keyframes:{
        loader: {
          "0%": { width: "0%" },
          "50%": { width: "50%" },
          "100%": { width: "100%" },
        },
      },
      animation:{
        pepe: "loader 1s  ease-in infinite",
      }
    },
  },
  plugins: [],
}