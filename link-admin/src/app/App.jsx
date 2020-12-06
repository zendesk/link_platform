import React from 'react'

import { Provider } from 'react-redux'

import './index.css'
import theme from './theme'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider as ZengardenThemeProvider } from '@zendeskgarden/react-theming'

import { ConnectedRouter } from 'connected-react-router'
import store, { history } from 'store'
import Router from 'router'

console.log({ theme })

const App = () => (
  <Provider store={ store }>
    <StyledThemeProvider theme={ theme }>
      <ZengardenThemeProvider theme={ theme }>
        <ConnectedRouter history={ history }>
          <Router />
        </ConnectedRouter>
      </ZengardenThemeProvider>
    </StyledThemeProvider>
  </Provider>
)

export default App
