/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
        nsb: ['Noto Serif Bengali', 'serif'],
        lss: ['Sirajee Shaikh', 'cursive'],
      },
      colors: {
        plant: {
          100: '#DADBE7',
          300: '#87C6B6',
          600: '#347666',
          700: '#215A4D',
          800: '#19493E',
        },
        apache: '#ECB869',
        thunder: {
          500: '#585A6A',
          700: '#272836',
        },
        haze: '#F2F3F8',
        snow: '#F9FAFC',
      },
      maxWidth: {
        1440: '1440px',
      },
      backgroundImage: {
        heroBanner: "url('src/assets/HeroOptimized.png')",
      },
      fontSize: {
        sxl: '22.5px',
      },
    },
  },
  plugins: [],
};
