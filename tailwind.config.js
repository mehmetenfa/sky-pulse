/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        HFbgColor: '#232931',
        HFtextColor: '#4ECCA3',
        bgColor: '#EEEEEE',
        textColor: '#393E46',
      }
    },
  },
  plugins: [],
}