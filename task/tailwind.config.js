/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      'gray-light': '#f5f5f5',
      'dark': '#374151',
      'dark-light': "#6b7280",
      'error' : '#e8303c',
      'white' : '#e7ebee'
    },
    extend: {},
  },
  plugins: [],
}