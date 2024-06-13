/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*/templates/*.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        'primary': '#B2867C',
        'fontColor-light-1':'white',
        'fontColor-dark-1':'black',
        'fontColor-primary-1':'#0a1573'

      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
