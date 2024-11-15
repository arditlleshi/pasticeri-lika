/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to right, rgba(225, 29, 72, 0.8), rgba(225, 29, 72, 0.4))',
        'card-gradient': 'linear-gradient(to bottom right, rgba(225, 29, 72, 0.05), rgba(225, 29, 72, 0.1))',
        'footer-gradient': 'linear-gradient(to bottom, rgb(17, 24, 39), rgb(31, 41, 55))',
      },
    },
  },
  plugins: [],
};