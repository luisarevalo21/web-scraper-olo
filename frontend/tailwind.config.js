// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-1': '#B57AFF', // Dark Purple
        'background-2': '#FAF3F1', // Light Pink
        'background-3': '#F3EAFF', // Light Purple
        'background-4': '#FFE0CA', // Light Orange
        'background-5': '#FAF3F1', // Off-white
        'background-6': '#b0b0b0', // Bone Grey
        'text-1': '#070707', // Black
        'text-2': '#161616', // Slightly darker black
        'text-90': '#B57AFF', // Purple - Popular
        'text-75': '#22c55e', // Green - Recommended
        'text-60': '#FEDE00', // Yellow - Decent
        'text-50': '#1A1A1A', // Black - Unpopular
      },
      fontFamily: {
        header: ['Poppins', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      borderWidth: {
        '3': '6px',
      },
      borderStyle: {
        'dotted': 'dotted',
      },
    },
  },
  plugins: [],
}
