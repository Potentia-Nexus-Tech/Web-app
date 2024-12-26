/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#818cf8',
          main: '#6366f1',
          dark: '#4f46e5',
        },
        secondary: {
          light: '#f472b6',
          main: '#ec4899',
          dark: '#db2777',
        },
      },
    },
  },
  plugins: [],
} 