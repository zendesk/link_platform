import React from 'react'
import { RendererProvider as FelaProvider } from 'react-fela'
import { configure, addDecorator } from '@storybook/react'

import { Provider } from 'react-redux'
import store from 'store'
import { createRenderer } from 'fela'

import '../src/index.css'

const renderer = createRenderer()

const withFelaProvider = story => (
  <FelaProvider renderer={renderer}>{ story() }</FelaProvider>
)

const withReduxProvider = story => (
  <Provider store={ store }>{ story() }</Provider>
)

const req = require.context('../src', true, /\.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(withFelaProvider)
addDecorator(withReduxProvider)
configure(loadStories, module)
