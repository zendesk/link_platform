import '@zendeskgarden/react-buttons/dist/styles.css';
import '@zendeskgarden/react-tags/dist/styles.css';
import '@zendeskgarden/react-textfields/dist/styles.css';
import '@zendeskgarden/react-grid/dist/styles.css';
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
              <Input value={location.name} />
            </TextField>
          </Col>
        </Row>
        <Row>
          <Col size={7}>
            <Label>Description</Label>
            <Textarea value={location.description} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Label>Address</Label>
            <Input value={location.address} />
          </Col>
          <Col>
            <Label>City</Label>
            <Input value={location.city} />
          </Col>
          <Col>
            <Label>Postal Code</Label>
            <Input value={location.postal_code} />
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
