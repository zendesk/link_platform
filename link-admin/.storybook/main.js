const path = require('path')

module.exports = {
  addons: [
		'@storybook/preset-create-react-app',
		'@storybook/addon-actions',
		// '@storybook/addon-links'
	],
	webpackFinal: config => {
		config.resolveLoader.modules.push(
			path.resolve(__dirname, '../src'),
		)
		return config
	}
}
