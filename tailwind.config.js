/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Path ini sangat penting
  ],
  theme: {
    extend: {
      colors: {
        'c-pink': '#ec4899',
        'c-orange': '#f97316',
        'c-amber': '#f59e0b',
        'c-dark': '#111827',
      }
    },
  },
  plugins: [],
}