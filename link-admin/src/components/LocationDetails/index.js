import React from 'react'
import PropTypes from 'prop-types'

import {
  Field,
  Textarea,
  Label,
  Input,
} from '@zendeskgarden/react-forms'
import { Grid, Row, Col } from '@zendeskgarden/react-grid'
import { Button } from '@zendeskgarden/react-buttons'

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
      <Grid>
        <Row>
          <Col size={7}>
            <Field>
              <Label>Name</Label>
              <Input />
            </Field>
          </Col>
        </Row>
        <Row>
          <Col size={7}>
            <Label>Alternate Name</Label>
            <Textarea />
          </Col>
        </Row>
        <Row>
          <Col>
            <Label>Description</Label>
            <Input />
          </Col>
          <Col>
            <Label>Transportation</Label>
            <Input />
          </Col>
          <Col>
            <Label>Latitude</Label>
            <Input />
          </Col>
          <Col>
            <Label>Longitude</Label>
            <Input />
          </Col>
        </Row>
        <Row>
          <Col>
            <Label>Organization ID</Label>
            <Input />
          </Col>
        </Row>
        <Row style={{ marginTop: 15 }}>
          <Col>
            <Button danger>Delete Location</Button>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default LocationDetails
