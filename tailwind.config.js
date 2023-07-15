/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azure': '#0290FF',
        'black-two' : '#121212',
        'platinum' : '#e8e8e8',
        'lotion' : '#fafafa',
        'cyan-blue' : '#4386bf',
        'taupe-gray' : '#888888',
      },
    },
  },
  plugins: [],
}
