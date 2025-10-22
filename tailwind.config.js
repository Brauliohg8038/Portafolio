/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./**/*.html",
    "./src/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        'electric-blue': '#5227FF',
        'deep-purple': '#1E00FF',
      },
    },
  },
  plugins: [],
}

