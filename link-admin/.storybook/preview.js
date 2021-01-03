import React from 'react'
import { configure, addDecorator } from '@storybook/react'

import { Provider as ReduxProvider } from 'react-redux'
import store from 'store'

import StyleProviders from '../src/app/providers/style'

const withReduxProvider = story => (
  <ReduxProvider store={ store }>{ story() }</ReduxProvider>
)

const req = require.context('../src', true, /\.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(withReduxProvider)
configure(loadStories, module)

export const decorators = [
  (Story) => (
    <StyleProviders>
      <Story />
    </StyleProviders>
  )
]
