import React from 'react'
import { RendererProvider as FelaProvider } from 'react-fela'
import { configure, addDecorator } from '@storybook/react'

import { createRenderer } from 'fela'

import '../src/index.css'
// import '../src/utils/globalStyles'

const renderer = createRenderer()

const withFelaProvider = story => (
  <FelaProvider renderer={renderer}>{story()}</FelaProvider>
)

const req = require.context('../src', true, /\.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(withFelaProvider)
configure(loadStories, module)
