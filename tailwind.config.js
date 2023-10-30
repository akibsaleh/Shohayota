/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/preline/dist/*.js'],
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
          300: '#DADBE7',
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
        heroBanner: "url('https://i.ibb.co/HL85t3Y/Hero-Optimized.png')",
        donateBox: "url('src/assets/donatebox.svg')",
        progressLine: 'linear-gradient(270deg, rgba(33, 90, 77, 0.20) 0%, rgba(33, 90, 77, 0.40) 25.52%, #215A4D 50.3%, rgba(33, 90, 77, 0.40) 76.04%, rgba(33, 90, 77, 0.20) 100%);',
      },
      fontSize: {
        sxl: '22.5px',
      },
      boxShadow: {
        termsBox: '0px 3px 8px 0px rgba(29, 32, 46, 0.08)',
        contactBox: '0px 6px 24px 0px rgba(29, 32, 46, 0.06)',
        donateBox: '0px 4px 8px 0px rgba(40, 45, 61, 0.08), 0px 0px 1px 0px rgba(54, 58, 77, 0.12)',
        applicationBox: '0px 6px 24px 0px rgba(29, 32, 46, 0.06)',
      },
    },
  },
  plugins: [require('preline/plugin')],
};
