import '@zendeskgarden/react-buttons/dist/styles.css';
import '@zendeskgarden/react-tags/dist/styles.css';
import '@zendeskgarden/react-textfields/dist/styles.css';
import '@zendeskgarden/react-grid/dist/styles.css';
import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import actions from './actions';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Textarea, TextField, TextGroup, Label, Hint, Input, Message } from '@zendeskgarden/react-textfields';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Button, ButtonGroup } from '@zendeskgarden/react-buttons';

class Organization extends React.PureComponent {
  static propTypes = {
  };

  static defaultProps = {
  }

  render() {
    const { } = this.props;

    return (
      <Grid>
      <Row>
        <Col lg={7}>
        <TextField>
          <Label>Location Name</Label>
          <Input placeholder="Zendesk HQ" />
        </TextField>
        </Col>
        </Row>
          <Row>
          <Col lg={7}>
          <Label>Location Description</Label>
          <Textarea placeholder="Description" />
          </Col>
          </Row>
          <Row>
            <Col >
            <Label>Location Address</Label>
            <Input placeholder="Zendesk HQ" />
            </Col>
            <Col >
              <Label>City</Label>
              <Input placeholder="San Francisco" />
            </Col>
            <Col >
              <Label>Postal Code</Label>
              <Input placeholder="94107" />
            </Col>
          </Row>
          <Row justifyContent="start">
            <Col>
              <br/>
              <Button key="delete" danger>Delete Location</Button>
              <Button key="add">Add Location</Button>
            </Col>
          </Row>
        </Grid>
     
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


