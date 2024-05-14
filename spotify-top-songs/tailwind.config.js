/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkGray: '#1F2937',
        lightGray: '#374151',
        hoverGray: '#4B5563',
        white: '#FFFFFF',
        teal: '#10B981',
        nude: '#e6dcd2'
      }
    },
  },
  plugins: [],
}

