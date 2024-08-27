/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#52555d",
        text: "#c2b9bf",
        bg:{
          background:"#000018"
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