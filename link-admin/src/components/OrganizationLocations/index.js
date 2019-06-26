

import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Table } from '@zendeskgarden/react-tables'

// import { Textarea, TextField, Label, Input } from '@zendeskgarden/react-textfields';
// import { Grid, Col } from '@zendeskgarden/react-grid';
// import { Button } from '@zendeskgarden/react-buttons';



import { ThemeProvider } from '@zendeskgarden/react-theming';
import {
  Caption,
  Head,
  HeaderRow,
  HeaderCell,
  Body,
  Row,
  Cell
} from '@zendeskgarden/react-tables';

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

        <ThemeProvider>
  <Table>
    <Caption>Organizations</Caption>
    <Head>
      <HeaderRow>
        <HeaderCell width="25%">Location</HeaderCell>
        <HeaderCell width="25%">Address</HeaderCell>
        <HeaderCell width="25%">Services</HeaderCell>
        <HeaderCell width="25%">Delete Button</HeaderCell>
      </HeaderRow>
    </Head>
    <Body>
      <Row>
        <Cell width="25%">San Francisco</Cell>
        <Cell width="25%">1 Market</Cell>
        <Cell width="25%">Housing, Computer Lab, Showers</Cell>
        <Cell width="25%">Delete</Cell>
      </Row>
      <Row>
        <Cell width="25%">Oakland</Cell>
        <Cell width="25%">2 Mission Way</Cell>
        <Cell width="25%">Clothing, Food Pantry, Showers</Cell>
        <Cell width="25%">Delete</Cell>
      </Row>
    </Body>
  </Table>
</ThemeProvider>
     
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
