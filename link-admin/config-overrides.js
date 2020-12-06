const { addWebpackModuleRule } = require('customize-cra')

const {
  override
} = require('customize-cra')

module.exports = {
  webpack: override(
    addWebpackModuleRule({
      test: [/svg-icons\/.*\.svg$/, /@zendeskgarden\/.*\.svg$/],
      use: ['@svgr/webpack']
    })
  ) 
}
