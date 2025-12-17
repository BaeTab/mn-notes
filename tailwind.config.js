/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jua', 'sans-serif'],
      },
      colors: {
        primary: '#FFB978', // Soft Orange
        secondary: '#FF8F8F', // Soft Pink
        accent: '#8FD3FF', // Soft Blue
        background: '#FFF9F0', // Warm White
      }
    },
  },
  plugins: [],
}
