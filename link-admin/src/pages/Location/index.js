import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import LocationDetails from 'components/LocationDetails'
import ServicesTable from 'components/LocationServices'
import * as Client from 'link-rest-client'

//Tabs tools
import { Tabs, TabPanel } from '@zendeskgarden/react-tabs'

class Location extends React.PureComponent {
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

export default Location
