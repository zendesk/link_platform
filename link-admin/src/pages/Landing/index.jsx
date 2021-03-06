import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createComponent } from 'react-fela'

import { updateTaxonomyFilters } from 'store/landing'
import { fetchOrganizations } from 'store/organizations'
import { STATUS } from 'link-rest-client/api'

import * as Taxonomy from './Taxonomy'
import OrganizationList from './OrganizationList'

import DataDependentComponent from 'components/DataDependentComponent'
import AdminTopBar from './AdminTopBar'

const Landing = () => {

  // const organizationsData = Client.organizations.all(cache)

  const dispatch = useDispatch()
  const { activeTaxonomyFilters } = useSelector(state => state.landing)
  
  const organizations = useSelector(state => state.organizations)

  React.useEffect(() => {
    if(organizations.status === STATUS.IDLE) {
      dispatch(fetchOrganizations())
    }
  }, [organizations.status, dispatch])

  return (
    <Viewport>
      <AdminTopBar
        tags={ Taxonomy.all.map((taxonomy, index) => (
          <Taxonomy.Tag
            key={ taxonomy.id }
            onClick={ updateTaxonomyFilters }
            isActive={ activeTaxonomyFilters.includes(taxonomy.id) }
            taxonomy={ { index, ...taxonomy } }
          />
        )) }
      />

      <DataDependentComponent
        status={ organizations.status } 
        component={ <OrganizationList organizations={ organizations.data } /> } 
      />

    </Viewport>
  )
}

const Viewport = createComponent(() => {})

export default Landing
