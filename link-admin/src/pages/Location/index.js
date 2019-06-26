import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import actions from './actions'
import AdminTopBar from './components/AdminTopBar';
import * as Taxonomy from './components/Taxonomy';
import LocationDetails from '../../components/LocationDetails/index'
import ServicesTable from '../../components/LocationServices/index'
import { Textarea, TextField, Label, Input } from '@zendeskgarden/react-textfields';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';

//import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Breadcrumb, Item } from '@zendeskgarden/react-breadcrumbs';
import { Anchor } from '@zendeskgarden/react-buttons';



//Tabs tools
import { Tabs, TabPanel } from '@zendeskgarden/react-tabs';
import { ThemeProvider } from 'react-fela';

class Landing extends React.PureComponent {
  static propTypes = {
    activeTaxonomyFilters: PropTypes.array.isRequired,
    updateTaxonomyFilters: PropTypes.func.isRequired,
    taxonomies: PropTypes.array.isRequired
  };

  static defaultProps = {
    taxonomies: [],
  }

  render() {
    const { activeTaxonomyFilters, updateTaxonomyFilters, taxonomies } = this.props;

    return (
      <>

  /* This will probably need to be hardcoded by each page */
  <ThemeProvider>
    <Breadcrumb>
      <Anchor href="/">Organization</Anchor>
      <Anchor href="..">Locations</Anchor>
      <Item>Self</Item>
    </Breadcrumb>
  </ThemeProvider>


    <Tabs>
      <TabPanel label="Location Details" key="tab-1">
       Location Details
      <LocationDetails/>


      </TabPanel>
      <TabPanel label="Services" key="tab-2">
        
        <ServicesTable/>
      </TabPanel>
    </Tabs>
    
          

      </>
    );
  }
}

const mapStateToProps = state => {
  const landingState = state.landing;
  return { ...landingState };
};

const mapDispatchToProps = dispatch => ({
  updateTaxonomyFilters: tf => dispatch(actions.updateTaxonomyFilters(tf))
});

const withStateAndActions = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default withStateAndActions(Landing);
