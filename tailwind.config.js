/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto Slab"', 'serif'],
        manrope: ['Manrope', 'sans-serif'],       
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        lora: ['Lora', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        fredoka: ['"Fredoka One"', 'cursive'],
      },
      colors: {
        jeruk: '#FF4500', // 🎯 Warna oranye kemerahan seperti jeruk matang
      },
    },
  },
  plugins: [],
}