/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      fontFamily: {
        'lato': ["Lato", 'sans-serif'],
        'outfit': ["Outfit", 'sans-serif'],
        'dancing': ["Dancing Script", 'cursive'],
        'poppins': ["Poppins", 'cursive'],
      }
    },
  },
  plugins: [],
};
