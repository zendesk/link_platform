import '@zendeskgarden/react-buttons/dist/styles.css'
import '@zendeskgarden/react-tags/dist/styles.css'
import '@zendeskgarden/react-textfields/dist/styles.css'
import '@zendeskgarden/react-tabs/dist/styles.css'

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import actions from './actions'
import LocationDetails from '../../components/LocationDetails/index'
import ServicesTable from '../../components/LocationServices/index'

//Tabs tools
import { Tabs, TabPanel } from '@zendeskgarden/react-tabs'

class Location extends React.PureComponent {
  static propTypes = {
    activeTaxonomyFilters: PropTypes.array.isRequired,
    updateTaxonomyFilters: PropTypes.func.isRequired,
    taxonomies: PropTypes.array.isRequired,
  }

  static defaultProps = {
    taxonomies: [],
  }

  render() {
    return (
      <>
        <Tabs>
          <TabPanel label="Location Details" key="tab-1">
            Location Details
            <LocationDetails />
          </TabPanel>
          <TabPanel label="Services" key="tab-2">
            <ServicesTable />
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

export default withStateAndActions(Location)
