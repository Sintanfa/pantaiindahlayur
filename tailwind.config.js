// const { fontFamily } = require('html2canvas/dist/types/css/property-descriptors/font-family');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  plugins: [
    require('tw-elements/dist/plugin')
  ],
   darkMode: false, // or 'media' or 'class'
   theme: {
      fontSize : {
        'title' : "24px",
        'medium' : "18px",
        'small' : '16px',
        'xs' : '14px'
      },
      extend: {
      fontFamily: {
        larina: ['Herr Von Muellerhoff', 'sans-serif'],
      },
    },
     },
   variants: {
     extend: {},
   },
   plugins: [],
 }