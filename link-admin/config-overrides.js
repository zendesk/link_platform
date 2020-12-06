const { addWebpackModuleRule } = require('customize-cra')

const {
  override
} = require('customize-cra')

module.exports = {
  webpack: override(
    addWebpackModuleRule({
      test: [/^@zendeskgarden\/svg-icons\/src\/.*\.svg$/],
      use: ['@svgr/webpack']
    })
  ) 
}
