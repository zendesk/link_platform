import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import{ history } from 'store'

import { useSelector } from 'react-redux'

import AdminLayout from 'app/layout/admin'
import AuthLayout from 'app/layout/auth'

import Login from 'pages/auth/Login'

import Landing from 'pages/Landing'
import Organization from 'pages/Organization'
import AddOrganization from 'pages/Organization/AddOrganization'
import FourOhFour from 'pages/FourOhFour'

const base = '/organizations'
const tabRegex = 'details|locations'

const AdminRouter = () => {
  const auth = useSelector(state => state.auth)

  return (
    <ConnectedRouter history={ history }>
      <Switch>
        <Route exact path='/'>
          <Redirect to={ base } />
        </Route>

        <Route path={ ['/login', 'register'] }>
          { auth.admin && <Redirect to='/' /> }
          <AuthLayout>
            <Switch>
              <Route exact path='/login' component={ Login } />
            </Switch>
          </AuthLayout>
        </Route>

        <Route path={ base }>
          <AdminLayout>
            <Switch>
              <Route 
                exact
                path={ base }
                component={ Landing }
              />

              <Route 
                exact
                path={ [`${base}/new`, `${base}/new/:tabId(${tabRegex})`] }
                component={ AddOrganization }
              />

              <Route
                exact
                path={ [`${base}/:organizationId`, `${base}/:organizationId/:tabId(${tabRegex})`] }
                component={ Organization }
              />

              <Route component={ FourOhFour } />
            </Switch>
          </AdminLayout>
        </Route>

      </Switch>
    </ConnectedRouter>
  )
}

export default AdminRouter
