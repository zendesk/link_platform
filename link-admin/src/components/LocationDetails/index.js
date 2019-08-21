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
            <Field>
              <Label>Alternate Name</Label>
              <Textarea />
            </Field>
          </Col>
        </Row>
        <Row>
          <Col>
            <Field>
              <Label>Description</Label>
              <Input />
            </Field>
          </Col>
          <Col>
            <Field>
              <Label>Transportation</Label>
              <Input />
            </Field>
          </Col>
          <Col>
            <Field>
              <Label>Latitude</Label>
              <Input />
            </Field>
          </Col>
          <Col>
            <Field>
              <Label>Longitude</Label>
              <Input />
            </Field>
          </Col>
        </Row>
        <Row>
          <Col>
            <Field>
              <Label>Organization ID</Label>
              <Input />
            </Field>
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
