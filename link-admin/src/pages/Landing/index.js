import React from 'react'
import PropTypes from 'prop-types'
import { createComponent } from 'react-fela'
import AdminTopBar from './components/AdminTopBar'
import * as Taxonomy from './components/Taxonomy'
import OrganizationList from './components/OrganizationList'
import * as Client from 'link-rest-client'

const Viewport = createComponent(() => {})

const renderError = error => <p>{`${error}`}</p>

class Landing extends React.PureComponent {
  static propTypes = {
    activeTaxonomyFilters: PropTypes.array.isRequired,
    cache: PropTypes.object.isRequired,
    updateTaxonomyFilters: PropTypes.func.isRequired,
    goToEditOrganization: PropTypes.func.isRequired,
  }

  render() {
    const {
      activeTaxonomyFilters,
      updateTaxonomyFilters,
      goToNewOrganization,
      goToEditOrganization,
      cache,
    } = this.props

    const organizationsData = Client.organizations.all(cache)

    return (
      <Viewport>
        <AdminTopBar
          tags={Taxonomy.all.map((taxonomy, index) => (
            <Taxonomy.Tag
              key={taxonomy.id}
              onClick={updateTaxonomyFilters}
              isActive={activeTaxonomyFilters.includes(taxonomy.id)}
              taxonomy={{ index, ...taxonomy }}
            />
          ))}
          onAdd={goToNewOrganization}
        />
        {organizationsData.case({
          NotAsked: () => 'Initializing...',
          Pending: () => 'Loading...',
          Success: organizations => (
            <OrganizationList
              organizations={Object.values(organizations)}
              onSelectEdit={org => goToEditOrganization(org.id)}
              onSelectDelete={() => console.log('delete')}
            />
          ),
          Failure: renderError,
        })}
      </Viewport>
    )
  }
}

export default Landing
