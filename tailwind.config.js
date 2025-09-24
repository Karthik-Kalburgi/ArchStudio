/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      colors: {
        background: "#F5F5F5",
        text: "#333333",
        primaryCTA: "#6A7FDB",
        secondaryCTA: "#D2691E",
        accent: "#708238",
        highlights: "#D4A017",
      },
    },
  },
  plugins: [],
}