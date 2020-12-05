import React from 'react'
// import { RendererProvider as FelaProvider } from 'react-fela'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import styledTheme from '../src/app/styledTheme'
import { configure, addDecorator } from '@storybook/react'

import { Provider as ReduxProvider } from 'react-redux'
import store from 'store'

import '../src/app/index.css'

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
    <ReduxProvider>
      <StyledThemeProvider theme={ styledTheme }>
        <Story />
      </StyledThemeProvider>
    </ReduxProvider>
  )
]
