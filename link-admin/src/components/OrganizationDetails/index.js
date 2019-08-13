import React from 'react'
import PropTypes from 'prop-types'
import {
  Textarea,
  TextField,
  Label,
  Input,
} from '@zendeskgarden/react-textfields'
import { Grid, Row, Col } from '@zendeskgarden/react-grid'
import { Button } from '@zendeskgarden/react-buttons'

class OrganizationDetails extends React.PureComponent {
  static propTypes = {
    organization: PropTypes.object,
  }

  render() {
    const { organization } = this.props

    return (
      <Grid>
        <Row>
          <Col size={7}>
            <TextField>
              <Label>Name</Label>
              <Input value={organization.name} />
            </TextField>
          </Col>
        </Row>
        <Row>
          <Col size={7}>
            <Label>Alternate Name :)</Label>
            <Textarea />
          </Col>
        </Row>
        <Row>
          <Col>
            <Label>Description</Label>
            <Input value={organization.description} />
          </Col>
          <Col>
            <Label>Email</Label>
            <Input value={organization.email || ''} />
          </Col>
          <Col>
            <Label>URL</Label>
            <Input value={organization.url || ''} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Label>Tax Status</Label>
            <Input />
          </Col>
          <Col>
            <Label>Tax ID</Label>
            <Input />
          </Col>
          <Col>
            <Label>Year Incorporated</Label>
            <Input />
          </Col>
          <Col>
            <Label>Legal Status</Label>
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

export default OrganizationDetails
