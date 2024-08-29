/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,ts}",],
  theme: {
    extend: { fontFamily: {
      maison: ['MaisonExtended', 'Arial', 'sans-serif'],
    },
      keyframes: {
        slideIn: {
          '0%': { transform: 'scale(1)', opacity: '0' },
          '100%': { transform: 'scale(1.2)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '1' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        // Diğer animasyonlar burada
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-out', // Ana menü için yukarıdan aşağıya kayma animasyonu
        slideUp: 'slideUp 0.25s ease-out', // Alt menü için yukarıdan aşağıya kayma animasyonu
        // Diğer animasyonlar burada
      },
    },
  },
  plugins: [],
}
