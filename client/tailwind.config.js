/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      scale:{
        '102': '1.02',
      },
      keyframes: {
        'move-r-l': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'move-r-l': 'move-r-l 11s ease-out infinite', // Adjust duration and timing as needed
      },
    },
  },
  plugins: [],
}