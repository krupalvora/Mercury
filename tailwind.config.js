/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*/templates/*.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        'primary': '#B2867C',
        'fontColor-light-1': 'white',
        'fontColor-dark-1': 'black',
        'fontColor-primary-1': '#0a1573'

      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif']
      },
    gridTemplateColumns: {
      // Define custom grid template columns for large screens
    'home-lg': '1fr 1fr',
    'product-lg': '1fr 1fr'
    },
    gridTemplateAreas: {
      // Define custom grid template areas
    'home': [
        'home-title',
        'home-image',
      'home-info',
        'home-btn',
      ],
      'home-lg': [
        'home-title home-image',
      'home-info home-image',
    'home-btn home-image',
  ],
  'product': [
    'product-title',
    'product-image',
    'product-info',
  ],
  'product-lg': [
    'product-image product-title',
    'product-image product-info',
  ],  
    },
  },
},
plugins: [

  function ({ addUtilities }) {
    const newUtilities = {
      '.home-grid': {
        'display': 'grid',
        'grid-template-areas': `
          "home-title"
          "home-image"
          "home-info"
          "home-btn"
        `,
        'grid-template-columns': '1fr',
        'gap': '1rem',
      },
      '.home-grid-lg': {
        'display': 'grid',
        'grid-template-areas': `
          "home-title home-image"
          "home-info home-image"
          "home-btn home-image"
        `,
        'grid-template-columns': '1fr 1fr',
        'gap': '1rem',
      },
              '.product-grid': {
          'display': 'grid',
          'grid-template-areas': `
            "product-title"
            "product-image"
            "product-info"
          `,
          'grid-template-columns': '1fr',
          'gap': '1rem',
        },
        '.product-grid-lg': {
          'display': 'grid',
          'grid-template-areas': `
            "product-image product-title"
            "product-image product-info"

          `,
          'grid-template-columns': '1fr 3fr',
          'grid-template-rows': '1fr 3fr',

          'gap': '1rem',
        },
    
    };

    addUtilities(newUtilities, ['responsive']);
  },
],
}
