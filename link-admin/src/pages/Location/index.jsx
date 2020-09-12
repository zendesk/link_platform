import React from 'react'
import PropTypes from 'prop-types'
import { Tabs, TabPanel } from '@zendeskgarden/react-tabs'

import LocationDetails from './LocationDetails'
import ServicesTable from './LocationServices'

const Location = () => {
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

export default Location
