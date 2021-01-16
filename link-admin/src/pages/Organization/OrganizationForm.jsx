import React from 'react'
import PropTypes from 'prop-types'
import { Field, Textarea, Label, Input } from '@zendeskgarden/react-forms'
import { Grid, Row, Col } from '@zendeskgarden/react-grid'
import { Button } from '@zendeskgarden/react-buttons'

const OrganizationDetails = ({ organization = {} }) => {

  return (
    <Grid>
      <Row>
        <Col size={ 7 }>
          <Field>
            <Label>Name</Label>
            <Input value={ organization.name || '' } onChange={ () => {} } />
          </Field>
        </Col>
      </Row>
      <Row>
        <Col size={ 7 }>
          <Field>
            <Label>Alternate Name :)</Label>
            <Textarea />
          </Field>
        </Col>
      </Row>
      <Row>
        <Col>
          <Field>
            <Label>Description</Label>
            <Input value={ organization.description || '' } onChange={ () => {} } />
          </Field>
        </Col>
        <Col>
          <Field>
            <Label>Email</Label>
            <Input value={ organization.email || '' } onChange={ () => {} } />
          </Field>
        </Col>
        <Col>
          <Field>
            <Label>URL</Label>
            <Input value={ organization.url || '' } onChange={ () => {} } />
          </Field>
        </Col>
      </Row>
      <Row>
        <Col>
          <Field>
            <Label>Tax Status</Label>
            <Input />
          </Field>
        </Col>
        <Col>
          <Field>
            <Label>Tax ID</Label>
            <Input />
          </Field>
        </Col>
        <Col>
          <Field>
            <Label>Year Incorporated</Label>
            <Input />
          </Field>
        </Col>
        <Col>
          <Field>
            <Label>Legal Status</Label>
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

OrganizationDetails.propTypes = {
  organization: PropTypes.object
}

export default OrganizationDetails
