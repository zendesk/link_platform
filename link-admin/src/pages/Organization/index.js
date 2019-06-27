import React from 'react'
import PropTypes from 'prop-types'
import OrganizationDetails from '../../components/OrganizationDetails'
import LocationsTable from '../../components/OrganizationLocations/index'
import { Breadcrumb, Item } from '@zendeskgarden/react-breadcrumbs'
import { Anchor } from '@zendeskgarden/react-buttons'
import * as Client from 'link-rest-client'

//Tabs tools
import { Tabs, TabPanel } from '@zendeskgarden/react-tabs'

const Loading = () => <div>Loading...</div>

const Organization = ({ fetchOrganization, cache, match, goToTab }) => {
  const { organizationId, tabId = 'details' } = match.params

  const tabs = {
    handleChange: goToTab(organizationId),
    active: tabId,
  }

  const organizationData = Client.organization.find(cache, organizationId)
  if (!organizationData) {
    fetchOrganization(organizationId)
    return <Loading />
  }

  return (
    <>
      <Breadcrumb>
        <Anchor href="/">Home</Anchor>
        <Item>Organization</Item>
      </Breadcrumb>
      <Tabs selectedKey={tabs.active} onChange={tabs.handleChange}>
        <TabPanel label="Details" key="details">
          {organizationData.case({
            NotAsked: () => 'Initializating',
            Pending: () => <Loading />,
            Success: organization => (
              <OrganizationDetails organization={organization} />
            ),
            Failure: error => <p>{`${error}`}</p>,
          })}
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
  fetchOrganization: PropTypes.func.isRequired,
}

export default Organization
