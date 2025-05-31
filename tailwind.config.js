/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
     colors: {
        aqua: {
          100: '#e0f7fa',
          400: '#26c6da',
          600: '#00acc1',
          900: '#006064',
        }
      }
  },
  plugins: [],
}

