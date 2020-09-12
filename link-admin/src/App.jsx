import React from 'react'

import { Provider } from 'react-redux'
import { RendererProvider as FelaProvider } from 'react-fela'
import { createRenderer } from 'fela'

import { ConnectedRouter } from 'connected-react-router'
import { ThemeProvider } from '@zendeskgarden/react-theming'

import store, { history } from 'store'
import Router from 'Router'

const renderer = createRenderer()

const App = () => (
  <Provider store={ store }>
    <ThemeProvider>
      <FelaProvider renderer={ renderer }>
        <ConnectedRouter history={ history }>
          <Router />
        </ConnectedRouter>
      </FelaProvider>
    </ThemeProvider>
  </Provider>
)

export default App
