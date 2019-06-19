import React from 'react'
import PropTypes from 'prop-types'
import { createComponent } from 'react-fela'
import { connect } from 'react-redux'
import actions from './actions'
import AdminTopBar from './components/AdminTopBar'
import * as Taxonomy from './components/Taxonomy'
import OrganizationList from './components/OrganizationList'
import * as Client from 'link-rest-client'

const Viewport = createComponent(() => {})

const renderError = error => <p>{`${error}`}</p>

class Landing extends React.PureComponent {
  static propTypes = {
    activeTaxonomyFilters: PropTypes.array.isRequired,
    updateTaxonomyFilters: PropTypes.func.isRequired,
    organizationData: PropTypes.object.isRequired,
  }

  render() {
    const {
      activeTaxonomyFilters,
      updateTaxonomyFilters,
      organizationData,
    } = this.props

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
        />
        {organizationData.case({
          NotAsked: () => 'Initializing...',
          Pending: () => 'Loading...',
          Success: organizations => (
            <OrganizationList
              organizations={Object.values(organizations)}
              onSelectEdit={() => console.log('edit')}
              onSelectDelete={() => console.log('delete')}
            />
          ),
          Failure: renderError,
        })}
      </Viewport>
    )
  }
}

const mapStateToProps = ({ app }) => {
  const landingState = app.landing
  const organizationData = Client.organizations.all(app.cache)

  return { ...landingState, organizationData }
}

const mapDispatchToProps = dispatch => ({
  updateTaxonomyFilters: tf => dispatch(actions.updateTaxonomyFilters(tf)),
})

const withStateAndActions = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default withStateAndActions(Landing)
