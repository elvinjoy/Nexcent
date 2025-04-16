/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightGray: '#F5F7FA', // your custom bg color
      },
    },
  },
  plugins: [],
};
