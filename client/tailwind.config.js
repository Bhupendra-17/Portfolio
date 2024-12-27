/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      scale: {
        '102': '1.02',
      },
      keyframes: {
        'move-r-l': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'move-r-l': 'move-r-l 11s ease-out infinite',
        'slide-in': 'slideIn 1s ease-out',
        'fade-in': 'fadeIn 1s ease-in', // Fade-in animation with 2 seconds duration
      },
    },
  },
  plugins: [],
};
