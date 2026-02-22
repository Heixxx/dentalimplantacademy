/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0F4C81", // Deep Blue
        secondary: "#1E293B", // Slate Gray
        teal: "#0d9488", // Medical Teal
        "background-light": "#F8FAFC",
        "background-dark": "#0F172A",
        "surface-light": "#FFFFFF",
        "surface-dark": "#1E293B",
        "accent": "#38BDF8", // Lighter blue accent
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        "xl": "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      animation: {
        'blob': 'blob 7s infinite',
        'text-slide': 'text-slide 10s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'text-slide': {
          '0%, 20%': { transform: 'translateY(0%)' },
          '25%, 45%': { transform: 'translateY(-25%)' },
          '50%, 70%': { transform: 'translateY(-50%)' },
          '75%, 95%': { transform: 'translateY(-75%)' },
          '100%': { transform: 'translateY(-100%)' },
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}