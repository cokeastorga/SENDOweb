/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',    // azul SENDO
        secondary: '#1E40AF',
        accent: '#38BDF8',
      },
    },
  },
  plugins: [],
}
