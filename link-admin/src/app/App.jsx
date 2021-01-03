import React from 'react'

import { Provider as ReduxProvider } from 'react-redux'
import store from 'store'

import StyleProviders from 'app/providers/style'
import Router from 'app/router'

const App = () => (
  <ReduxProvider store={ store }>
    <StyleProviders>
      <Router />
    </StyleProviders>
  </ReduxProvider>
)

export default App
