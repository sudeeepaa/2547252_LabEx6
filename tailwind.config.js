/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        handwritten: ['Pacifico', 'cursive'],
      },
      colors: {
        boho: {
          beige: "#F3E9DC",
          light: "#EADBC8",
          brown: "#8B5E3C",
          accent: "#B87D4B",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'), 
  ],
}
