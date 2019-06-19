import '@zendeskgarden/react-buttons/dist/styles.css';
import '@zendeskgarden/react-tags/dist/styles.css';
import '@zendeskgarden/react-textfields/dist/styles.css';
import '@zendeskgarden/react-tabs/dist/styles.css';

//Tabs tools
import { Tabs, TabPanel } from '@zendeskgarden/react-tabs';

import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import actions from './actions'
import AdminTopBar from './components/AdminTopBar';
import * as Taxonomy from './components/Taxonomy';
import Location from '../../components/LocationDetails/index'



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

    <Tabs>
      <TabPanel label="Tab 1" key="tab-1">
        Tab 1 content
      </TabPanel>
      <TabPanel label="Tab 2" key="tab-2">
        Tab 2 content
        <Location/>
      </TabPanel>
      <TabPanel label="Disabled Tab" disabled>
        Disabled content
      </TabPanel>
      <TabPanel label="Tab 3" key="tab-3">
        Tab 3 content
      </TabPanel>
    </Tabs>

          


      <AdminTopBar
        tags={taxonomies.map((taxonomy, index) => (
          <Taxonomy.Tag
            key={taxonomy.id}
            onClick={updateTaxonomyFilters}
            isActive={activeTaxonomyFilters.includes(taxonomy.id)}
            taxonomy={{index, ...taxonomy}}
          />
        ))}
      />
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
