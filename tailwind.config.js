/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  theme: {
    screens: {
      xs: '340px',
      //@media (min-width: 340px) { ... }
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: '#9C0424',
      },
    },
  },
  plugins: [],
}
