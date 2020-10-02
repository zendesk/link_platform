import React from 'react'

import { Provider } from 'react-redux'
import { RendererProvider as FelaProvider } from 'react-fela'
import { createRenderer } from 'fela'

import { ConnectedRouter } from 'connected-react-router'
import { ThemeProvider } from '@zendeskgarden/react-theming'

import store, { history } from './reducer'
import AdminRouter from './AdminRouter'

const renderer = createRenderer()

const App = () => (
  <ThemeProvider>
    <Provider store={store}>
      <FelaProvider renderer={renderer}>
        <ConnectedRouter history={history}>
          <AdminRouter />
        </ConnectedRouter>
      </FelaProvider>
    </Provider>
  </ThemeProvider>
)

export default App
