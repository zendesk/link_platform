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
import { ThemeProvider } from '@zendeskgarden/react-theming';

//Breadcrumbs
import '@zendeskgarden/react-breadcrumbs/dist/styles.css';
//import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Breadcrumb, Item } from '@zendeskgarden/react-breadcrumbs';
import { Anchor } from '@zendeskgarden/react-buttons';



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

      <>


    
    <ThemeProvider>
    <Breadcrumb>
      <Anchor href="/">Organization</Anchor>
      <Anchor href="..">Location</Anchor>
      <Item>Services</Item>
    </Breadcrumb>
  </ThemeProvider>;


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
            <Textarea/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Label>Name</Label>
            <Input/>
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
            <Input/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Label>Email</Label>
            <Input/>
          </Col>
          <Col>
            <Label>Status</Label>
            <Input />
          </Col>
          <Col>
            <Label>Interpretation Services</Label>
            <Input/>
          </Col>
          <Col>
            <Label>Application Services</Label>
            <Input/>
          </Col>
        </Row>

        <Row>
          <Col>
            <Label>Wait Time</Label>
            <Input/>
          </Col>
          <Col>
            <Label>Fees</Label>
            <Input />
          </Col>
          <Col>
            <Label>Accredidation</Label>
            <Input/>
          </Col>
          <Col>
            <Label>Licenses</Label>
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

      </>
     
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
