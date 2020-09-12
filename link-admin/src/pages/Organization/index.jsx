import React from 'react'
import PropTypes from 'prop-types'
import OrganizationDetails from './OrganizationForm'
import LocationsTable from './OrganizationLocations'
import { Breadcrumb } from '@zendeskgarden/react-breadcrumbs'
import { Tabs, TabList, TabPanel, Tab } from '@zendeskgarden/react-tabs'
import { Link, useNavigation } from 'components/Routing'
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { STATUS } from 'link-rest-client/api'
import { fetchOrganization } from 'store/organizations'

import { Span } from '@zendeskgarden/react-typography';
import DataDependentComponent from 'components/DataDependentComponent'
import OrganizationTabs from './Tabs'


const Organization = () => {
  const { organizationId, tabId = 'details' } = useParams()
  const dispatch = useDispatch()
  const organizations = useSelector(state => state.organizations)
  const navigate = useNavigation()

  React.useEffect(() => {
    if(organizations.status === STATUS.IDLE) {
      dispatch(fetchOrganization(organizationId))
    }
  }, [organizations.status, dispatch, organizationId])

  return (
    <OrganizationTabs>
      <DataDependentComponent
        status={ organizations.status } 
        component={ <OrganizationDetails organization={ organizations.data.find(org => org.id === organizationId) } /> }
      />
    </OrganizationTabs>
  )
}

// Keeping as a reminder that AddOrganization should be a child of the tabbed interface
// const newOrg = <OrganizationDetails organization={ DEFAULT_ORGANIZATION } />

export default Organization
