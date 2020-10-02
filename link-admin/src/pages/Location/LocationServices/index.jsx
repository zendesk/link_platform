import React from 'react'
import PropTypes from 'prop-types'

import {
  Textarea,
  Label,
  Input,
} from '@zendeskgarden/react-forms'
import { Grid, Col } from '@zendeskgarden/react-grid'
import { Button } from '@zendeskgarden/react-buttons'

import {
  Table,
  Caption,
  Head,
  HeaderRow,
  HeaderCell,
  Body,
  Row,
  Cell,
} from '@zendeskgarden/react-tables'

class LocationDetails extends React.PureComponent {
  static propTypes = {
    location: PropTypes.object,
  }

  static defaultProps = {
    location: {
      name: '',
      description: '',
      address: '',
      city: '',
      postal_code: '',
    },
  }

  render() {
    const { location } = this.props

    return (
      <Table>
        <Caption>Organizations</Caption>
        <Head>
          <HeaderRow>
            <HeaderCell width="25%">Service</HeaderCell>
            <HeaderCell width="25%">Hours</HeaderCell>
            <HeaderCell width="25%">Details</HeaderCell>
            <HeaderCell width="25%">Delete Button</HeaderCell>
          </HeaderRow>
        </Head>
        <Body>
          <Row>
            <Cell width="25%">Housing</Cell>
            <Cell width="25%">9AM - 5PM MWF</Cell>
            <Cell width="25%">Family</Cell>
            <Cell width="25%">Delete</Cell>
          </Row>
          <Row>
            <Cell width="25%">Soup Kitche</Cell>
            <Cell width="25%">12PM MWFS</Cell>
            <Cell width="25%">Lunch Provided</Cell>
            <Cell width="25%">Delete</Cell>
          </Row>
        </Body>
      </Table>
    )
  }
}

export default LocationDetails
