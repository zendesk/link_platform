import '@zendeskgarden/react-buttons/dist/styles.css';
import '@zendeskgarden/react-tags/dist/styles.css';
import '@zendeskgarden/react-textfields/dist/styles.css';

import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import actions from './actions'
import AdminTopBar from './components/AdminTopBar';
import * as Taxonomy from './components/Taxonomy';

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
