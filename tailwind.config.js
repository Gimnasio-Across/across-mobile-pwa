/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        across: {
          rojo: '#E53935',
          naranja: '#FB8C00',
          amarillo: '#FDD835',
          'gris-perla': '#F4F5F7',
          'gris-carbon': '#212121',
        },
      },
    },
  },
  plugins: [],
}
