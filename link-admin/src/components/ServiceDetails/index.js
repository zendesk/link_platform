import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  Textarea,
  TextField,
  Label,
  Input,
} from '@zendeskgarden/react-textfields'
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
            <TextField>
              <Label>Organization ID</Label>
              <Input />
            </TextField>
          </Col>
        </Row>
        <Row>
          <Col size={7}>
            <Label>Program ID</Label>
            <Textarea />
          </Col>
        </Row>
        <Row>
          <Col>
            <Label>Name</Label>
            <Input />
          </Col>
          <Col>
            <Label>Description</Label>
            <Input />
          </Col>
          <Col>
            <Label>Alternate Name</Label>
            <Input />
          </Col>
          <Col>
            <Label>URL</Label>
            <Input />
          </Col>
        </Row>
        <Row>
          <Col>
            <Label>Email</Label>
            <Input />
          </Col>
          <Col>
            <Label>Status</Label>
            <Input />
          </Col>
          <Col>
            <Label>Interpretation Services</Label>
            <Input />
          </Col>
          <Col>
            <Label>Application Services</Label>
            <Input />
          </Col>
        </Row>

        <Row>
          <Col>
            <Label>Wait Time</Label>
            <Input />
          </Col>
          <Col>
            <Label>Fees</Label>
            <Input />
          </Col>
          <Col>
            <Label>Accredidation</Label>
            <Input />
          </Col>
          <Col>
            <Label>Licenses</Label>
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

export default ServiceDetails
