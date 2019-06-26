import '@zendeskgarden/react-buttons/dist/styles.css'
import '@zendeskgarden/react-tags/dist/styles.css'
import '@zendeskgarden/react-textfields/dist/styles.css'
import '@zendeskgarden/react-tabs/dist/styles.css'

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import actions from './actions'
import OrganizationDetails from '../../components/OrganizationDetails/index'
import LocationsTable from '../../components/OrganizationLocations/index'
import { Breadcrumb, Item } from '@zendeskgarden/react-breadcrumbs'
import { Anchor } from '@zendeskgarden/react-buttons'

//Tabs tools
import { Tabs, TabPanel } from '@zendeskgarden/react-tabs'

class Organization extends React.PureComponent {
  render() {
    return (
      <>
        <Breadcrumb>
          <Anchor href="/">Root</Anchor>
          <Anchor href="..">Parent</Anchor>
          <Item>Self</Item>
        </Breadcrumb>
        <Tabs>
          <TabPanel label="Details" key="tab-1">
            Organization Details
            <OrganizationDetails />
          </TabPanel>
          <TabPanel label="Location" key="tab-2">
            Locations
            <LocationsTable />
          </TabPanel>
        </Tabs>
      </>
    )
  }
}

const mapStateToProps = state => {
  const landingState = state.landing
  return { ...landingState }
}

const mapDispatchToProps = dispatch => ({
  updateTaxonomyFilters: tf => dispatch(actions.updateTaxonomyFilters(tf)),
})

const withStateAndActions = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default withStateAndActions(Organization)
