import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router'
import Landing from './pages/Landing'
import * as landing from './pages/Landing/actions'
import Organization from './pages/Organization'
import * as organization from './pages/Organization/actions'

const base = '/organizations'

const withRouteActions = (Component, additionalProps) => {
  const InnerRouteActions = directProps => {
    const push = directProps.history.push
    const goToLanding = () => push(base)
    const goToNewOrganization = () => push(`${base}/new`)
    const goToEditOrganization = orgId => push(`${base}/${orgId}`)
    const goToTab = id => tabId => {
      if (id) {
        push(`${base}/${id}/${tabId}`)
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

const AdminRouter = ({
  cache,
  landing,
  organization,
  updateTaxonomyFilters,
  fetchOrganization,
}) => {
  const propsforLanding = { ...landing, cache, updateTaxonomyFilters }
  const propsForOrganization = {
    ...organization,
    cache,
    fetchOrganization,
  }

  const renderLandingPage = withRouteActions(Landing, propsforLanding)
  const renderOrganizationPage = withRouteActions(
    Organization,
    propsForOrganization
  )

  return (
    <Switch>
      <Route exact path={'/'} render={renderLandingPage} />
      <Route exact path={base} render={renderLandingPage} />
      <Route
        exact
        path={`${base}/new/:tabId(${tabRegex})`}
        render={renderOrganizationPage}
      />
      <Route exact path={`${base}/new`} render={renderOrganizationPage} />
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
  )
}

const mapStateToProps = state => state.app

const mapDispatchToProps = dispatch => ({
  updateTaxonomyFilters: tf => dispatch(landing.updateTaxonomyFilters(tf)),
  fetchOrganization: id => dispatch(organization.fetchOrganization(id)),
})

const withStateAndActions = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default withStateAndActions(AdminRouter)
