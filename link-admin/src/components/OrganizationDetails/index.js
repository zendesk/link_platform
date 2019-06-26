
import React from 'react';
import PropTypes from 'prop-types'


import { connect } from 'react-redux';

import { Textarea, TextField, Label, Input } from '@zendeskgarden/react-textfields';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';

class LocationDetails extends React.PureComponent {
  static propTypes = {
    location: PropTypes.object
  };

  static defaultProps = {
    location: {
      name: "",
      description: "",
      address: "",
      city: "",
      postal_code: ""
    }
  }

  render() {
    const { location } = this.props;

    return (
        <Grid>
        <Row>
          <Col size={7}>
            <TextField>
              <Label>Name</Label>
              <Input />
            </TextField>
          </Col>
        </Row>
        <Row>
          <Col size={7}>
            <Label>Alternate Name</Label>
            <Textarea/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Label>Description</Label>
            <Input/>
          </Col>
          <Col>
            <Label>Email</Label>
            <Input />
          </Col>
          <Col>
            <Label>URL</Label>
            <Input/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Label>Tax Status</Label>
            <Input/>
          </Col>
          <Col>
            <Label>Tax ID</Label>
            <Input />
          </Col>
          <Col>
            <Label>Year Incorporated</Label>
            <Input/>
          </Col>
          <Col>
            <Label>Legal Status</Label>
            <Input/>
          </Col>
        </Row>
        <Row
          style={{ marginTop: 15 }}
        >
          <Col>
            <Button danger>Delete Location</Button>
          </Col>
        </Row>
      </Grid>
     
    );
  }
}

const mapStateToProps = state => {
};

const mapDispatchToProps = dispatch => ({
});

const withStateAndActions = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default withStateAndActions(LocationDetails);
