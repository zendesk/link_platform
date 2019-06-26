import React, { Component } from 'react'
import { ThemeProvider } from '@zendeskgarden/react-theming'
import { Provider } from 'react-redux'
import { Provider as FelaProvider } from 'react-fela'
import { createRenderer } from 'fela'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'

import store, { history } from './reducer'
import Landing from './pages/Landing'
import Organization from './pages/Organization'

const renderer = createRenderer()

const base = '/organizations'

const withRouteActions = (Component, additionalProps) => {
  const InnerRouteActions = directProps => {
    const push = directProps.history.push
    const goToLanding = () => push(base)
    const goToNewOrganization = () => push(`${base}/new`)
    const goToEditOrganization = orgId => push(`${base}/${orgId}`)
    const goToTab = orgId => tabId => {
      if (orgId) {
        push(`${base}/${orgId}/${tabId}`)
      } else {
        push(`${base}/new/${tabId}`)
      }
    }
    const routeActions = {
      goToLanding,
      goToNewOrganization,
      goToEditOrganization,
      goToTab,
    }
    return <Component {...directProps} {...additionalProps} {...routeActions} />
  }

  InnerRouteActions.displayName = 'InnerRouteActions'

  return InnerRouteActions
}

const tabRegex = 'details|locations'

class App extends Component {
  render() {
    const propsforLanding = {}
    const propsForCreation = {}

    const renderLandingPage = withRouteActions(Landing, propsforLanding)
    const renderOrganizationPage = withRouteActions(
      Organization,
      propsForCreation
    )

    return (
      <ThemeProvider>
        <Provider store={store}>
          <FelaProvider renderer={renderer}>
            <ConnectedRouter history={history}>
              <Switch>
                <Route exact path={'/'} render={renderLandingPage} />
                <Route exact path={base} render={renderLandingPage} />
                <Route
                  exact
                  path={`${base}/new/:tabId(${tabRegex})`}
                  render={renderOrganizationPage}
                />
                <Route
                  exact
                  path={`${base}/new`}
                  render={renderOrganizationPage}
                />
                <Route
                  exact
                  path={`${base}/:organizationId/:tabId(${tabRegex})`}
                  render={renderOrganizationPage}
                />
                <Route
                  exact
                  path={`${base}/:organizationId`}
                  render={renderOrganizationPage}
                />
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
