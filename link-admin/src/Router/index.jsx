import React from 'react'
import { Route, Switch } from 'react-router'
import Landing from 'pages/Landing'
import Organization from 'pages/Organization'
import AddOrganization from 'pages/Organization/AddOrganization'
import FourOhFour from 'pages/FourOhFour'

const base = '/organizations'
const tabRegex = 'details|locations'

const AdminRouter = () => {
  return (
    <Switch>

      <Route 
        exact
        path={ ['/', base] }
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
  )
}

export default AdminRouter
