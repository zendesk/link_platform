import React from 'react'

import { Provider } from 'react-redux'

import './index.css'
import styledTheme from './styledTheme'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider as ZengardenThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming'

import { ConnectedRouter } from 'connected-react-router'
import store, { history } from 'store'
import Router from 'router'

const App = () => (
  <Provider store={ store }>
    <StyledThemeProvider theme={ styledTheme }>
      <ZengardenThemeProvider theme={ DEFAULT_THEME }>
        <ConnectedRouter history={ history }>
          <Router />
        </ConnectedRouter>
      </ZengardenThemeProvider>
    </StyledThemeProvider>
  </Provider>
)

export default App
