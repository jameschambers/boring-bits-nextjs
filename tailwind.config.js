module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        'internet-blue': {
          'light': '#bfbfff',
          'default': '#5452F6',
          'dark': '#672ac5',
        },
      },
    },
    aspectRatio: { // defaults to {}
      'none': 0,
      'square': [1, 1], // or 1 / 1, or simply 1
      '16/9': [16, 9],  // or 16 / 9
      '4/3': [4, 3],    // or 4 / 3
      '21/9': [21, 9],  // or 21 / 9
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial'],
    },
  },
  variants: {},
  plugins: [ 
    require('tailwindcss-aspect-ratio'),
  ]
}
