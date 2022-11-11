/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('/src/assets/images/desktop/image-header.jpg')",
        'graphic': "url('/src/assets/images/desktop/image-graphic-design.jpg')",
        'Photography': "url('/src/assets/images/desktop/image-photography.jpg')",
      }
    },
  },
  plugins: [],
}