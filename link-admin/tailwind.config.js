module.exports = {
  purge: ['./src/**/*.jsx', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        support: '#00a656',
        explore: '#30aabc',
        gather: '#f6c8be',
        guide: '#ff6224',
        connect: '#ff6224',
        chat: '#f79a3e',
        talk: '#efc93d',
        sell: '#c38f00'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@zendeskgarden/tailwindcss')]
}
