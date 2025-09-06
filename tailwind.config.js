/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ["Fredoka", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        lora: ["Lora", "serif"],
        playfair: ["Playfair Display", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        jeruk: "#FF4500", // 🎯 Warna oranye kemerahan seperti jeruk matang
        bravepink: "#e44c99", // 🎯 Warna oranye kemerahan seperti jeruk matang
        herogreen: "#01a923", // 🎯 Warna oranye kemerahan seperti jeruk matang
        resistanceblue: "#000072", // 🎯 Warna oranye kemerahan seperti jeruk matang
      },
    },
  },
  plugins: [],
};
