import React from 'react'
import PropTypes from 'prop-types'
import LocationsTable from 'pages/Organization/OrganizationLocations'
import { Breadcrumb } from '@zendeskgarden/react-breadcrumbs'
import { Tabs, TabList, TabPanel, Tab } from '@zendeskgarden/react-tabs'
import { Link, useNavigation } from 'components/Routing'
import { useParams, useRouteMatch } from 'react-router-dom'

import { Span } from '@zendeskgarden/react-typography'

const OrganizationTabs = ({ children }) => {
  const { organizationId, tabId = 'details' } = useParams()
  const navigate = useNavigation()
	
  const { url } = useRouteMatch()

  return (
    <>
      <Breadcrumb>
        <Link to="/">Home</Link>
        <Span>Organization</Span>
      </Breadcrumb>

      <Tabs selectedItem={ tabId } onChange={ tab => navigate(`${url}/${tab}`) }>
        <TabList>
          <Tab item="details">Details</Tab>
          <Tab item="locations">Locations</Tab>
        </TabList>

        <TabPanel item="details">
          { children }
        </TabPanel>

        <TabPanel item="locations">
          <LocationsTable />
        </TabPanel>

      </Tabs>
    </>
  )
}

OrganizationTabs.propTypes = {
  children: PropTypes.node
}

// Keeping as a reminder that AddOrganization should be a child of the tabbed interface
// const newOrg = <OrganizationDetails organization={ DEFAULT_ORGANIZATION } />

export default OrganizationTabs
