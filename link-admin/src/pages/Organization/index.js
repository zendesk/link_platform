import React from 'react'
import PropTypes from 'prop-types'
import OrganizationDetails from './components/OrganizationDetails'
import LocationsTable from './components/OrganizationLocations'
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

  return (
    <>
      <Breadcrumb>
        <Anchor href="/">Home</Anchor>
        <Item>Organization</Item>
      </Breadcrumb>
      <Tabs selectedKey={tabs.active} onChange={tabs.handleChange}>
        <TabPanel label="Details" key="details">
          {
            organizationId
            ? <OrganizationDetails organization={existing(
                Client.organization.find(cache, organizationId),
                fetchOrganization,
                organizationId
              )} />
            : newOrg
          }
        </TabPanel>
        <TabPanel label="Locations" key="locations">
          {
            organizationId
            ? <LocationsTable organization={existing(
                Client.organization.find(cache, organizationId),
                fetchOrganization,
                organizationId
              ).locations} />
            : newOrg
          }
        </TabPanel>
      </Tabs>
    </>
  )
}

const DEFAULT_ORGANIZATION = {
  name: '',
  description: '',
}

const newOrg = <OrganizationDetails organization={DEFAULT_ORGANIZATION} />

const existing = (organizationData, fetchOrg, organizationId) => {
  if (!organizationData) {
    fetchOrg(organizationId)
    return <Loading />
  }

  return organizationData.case({
    NotAsked: () => 'Initializating',
    Pending: () => <Loading />,
    Success: organization => (
      <OrganizationDetails organization={organization} />
    ),
    Failure: error => <p>{`${error}`}</p>,
  })
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
