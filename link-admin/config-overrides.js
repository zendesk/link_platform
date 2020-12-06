const { addWebpackModuleRule } = require('customize-cra')

const {
  override
} = require('customize-cra')
const path = require('path')

module.exports = {
  webpack: override(
    addWebpackModuleRule({
      test: /@zendeskgarden\/.*\.svg$/,
      use: ['@svgr/webpack']
    })
  ) 
}
