const zendeskTheme = require('@zendeskgarden/tailwindcss')
const extras = require('./src/app/themeExtras')

module.exports = {
  purge: ['./src/**/*.jsx', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: extras
  },
  variants: {
    extend: {}
  },
  plugins: [zendeskTheme]
}
