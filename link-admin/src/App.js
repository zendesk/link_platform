import React, { Component } from 'react'
import { ThemeProvider } from '@zendeskgarden/react-theming'
import { Provider } from 'react-redux'
import { Provider as FelaProvider } from 'react-fela'
import { createRenderer } from 'fela'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'

import store, { history } from './reducer'
import Landing from './pages/Landing'

const renderer = createRenderer()

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <Provider store={store}>
          <FelaProvider renderer={renderer}>
            <ConnectedRouter history={history}>
              <Switch>
                <Route exact path="/" render={() => <Landing />} />
                <Route render={() => <div>Miss</div>} />
              </Switch>
            </ConnectedRouter>
          </FelaProvider>
        </Provider>
      </ThemeProvider>
    )
  }
}

export default App
