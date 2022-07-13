/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
       
    },
    // screens: {
    //   'sm': '440px',
    //   'md': '576px',
    //   'lg': '768px',
    //   'xl': '1024px',
    //   '2xl': '1680px'
    // },
    extend: {
      fontFamily: {
        nunito: 'nunito'

      },
      colors: {
        white: "#fff",
        primary: "#21268f",
        secondary: "#fdf9ff",
        light: "#e8dfec",
        blue: {
          900: "#1e3a8a",
          800: "#1e40af",
          700: "#1d4ed8",
          600: "#2563eb",
          500: "#3b82f6"
        },
        barn: "#a3c7c9",
        purple: '#7e5bef',
        pink: '#ff49db',
        orange: '#ff7849',
        green: '#13ce66',
        yellow: '#ffc82c',
        gray: '#8492a6',
      }
    },
  },
  plugins: [require('@tailwindcss/forms')({
    strategy: 'className'
  })],
}
