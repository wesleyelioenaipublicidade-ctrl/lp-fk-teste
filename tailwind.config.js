/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fk-blue': '#1a3a6b',
        'fk-blue-light': '#2557a7',
        'fk-gray': '#f5f5f7',
        'fk-gray-dark': '#333333',
        'fk-gray-mid': '#6e6e73',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
