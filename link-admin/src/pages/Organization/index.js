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

const Organization = ({ match, goToTab }) => {
  const { organizationId, tabId = 'details' } = match.params

  const tabs = {
    handleChange: goToTab(organizationId),
    active: tabId,
  }

  return (
    <>
      <Breadcrumb>
        <Anchor href="/">Home</Anchor>
        <Item>Organization</Item>
      </Breadcrumb>
      <Tabs selectedKey={tabs.active} onChange={tabs.handleChange}>
        <TabPanel label="Details" key="details">
          <OrganizationDetails />
        </TabPanel>
        <TabPanel label="Locations" key="locations">
          <LocationsTable />
        </TabPanel>
      </Tabs>
    </>
  )
}

Organization.propTypes = {
  // UI state
  match: PropTypes.object.isRequired,
  // navigation
  goToLanding: PropTypes.func.isRequired,
  goToTab: PropTypes.func.isRequired,
}

export default Organization
