import '@zendeskgarden/react-buttons/dist/styles.css';
import '@zendeskgarden/react-tags/dist/styles.css';
import '@zendeskgarden/react-textfields/dist/styles.css';

import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import actions from './actions'
import { Textarea, TextField, TextGroup, Label, Hint, Input, Message } from '@zendeskgarden/react-textfields';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

class Organization extends React.PureComponent {
  static propTypes = {
  };

  static defaultProps = {
  }

  render() {
    const { } = this.props;

    return (
      <div>
        <TextField>
          <Label>Location Name</Label>
          <Input placeholder="Zendesk HQ" />
        </TextField>
        <Label>Description</Label>
        <Textarea placeholder="Description" />
        <Grid>
          <Row>
            <Col lg>
              <TextField>
                <Label>Address</Label>
                <Input placeholder="1019 Market St" />
              </TextField>
            </Col>
            <Col lg>
              <TextField>
                <Label>City</Label>
                <Input placeholder="San Francisco" />
              </TextField>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
};

const mapDispatchToProps = dispatch => ({
  updateTaxonomyFilters: tf => dispatch(actions.updateTaxonomyFilters(tf))
});

const withStateAndActions = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default withStateAndActions(Organization);
