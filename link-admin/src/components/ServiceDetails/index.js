import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  Field,
  Textarea,
  Label,
  Input,
} from '@zendeskgarden/react-forms'
import { Grid, Row, Col } from '@zendeskgarden/react-grid'
import { Button } from '@zendeskgarden/react-buttons'

class ServiceDetails extends React.PureComponent {
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
              <Label>Organization ID</Label>
              <Input />
            </Field>
          </Col>
        </Row>
        <Row>
          <Col size={7}>
            <Field>
              <Label>Program ID</Label>
              <Textarea />
            </Field>
          </Col>
        </Row>
        <Row>
          <Col>
            <Field>
              <Label>Name</Label>
              <Input />
            </Field>
          </Col>
          <Col>
            <Field>
              <Label>Description</Label>
              <Input />
            </Field>
          </Col>
          <Col>
            <Field>
              <Label>Alternate Name</Label>
              <Input />
            </Field>
          </Col>
          <Col>
            <Field>
              <Label>URL</Label>
              <Input />
            </Field>
          </Col>
        </Row>
        <Row>
          <Col>
            <Field>
              <Label>Email</Label>
              <Input />
            </Field>
          </Col>
          <Col>
            <Field>
              <Label>Status</Label>
              <Input />
            </Field>
          </Col>
          <Col>
            <Field>
              <Label>Interpretation Services</Label>
              <Input />
            </Field>
          </Col>
          <Col>
            <Field>
              <Label>Application Services</Label>
              <Input />
            </Field>
          </Col>
        </Row>

        <Row>
          <Col>
            <Field>
              <Label>Wait Time</Label>
              <Input />
            </Field>
          </Col>
          <Col>
            <Field>
              <Label>Fees</Label>
              <Input />
            </Field>
          </Col>
          <Col>
            <Field>
              <Label>Accredidation</Label>
              <Input />
            </Field>
          </Col>
          <Col>
            <Field>
              <Label>Licenses</Label>
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

export default ServiceDetails
