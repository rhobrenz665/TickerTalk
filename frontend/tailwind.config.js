/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      colors: {
        lightPink: "hsl(330, 100%, 75%)", // A light pastel pink
        mediumPink: "hsl(330, 100%, 60%)", // A medium pink shade
        darkPink: "hsl(330, 100%, 50%)",   // A vibrant pink
        deepPink: "hsl(330, 100%, 40%)",   // A deeper pink
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      spacing: {
        180: "32rem",
      },
    },
  },
  plugins: [],
};