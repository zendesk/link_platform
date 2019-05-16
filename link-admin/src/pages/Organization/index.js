import '@zendeskgarden/react-buttons/dist/styles.css';
import '@zendeskgarden/react-tags/dist/styles.css';
import '@zendeskgarden/react-textfields/dist/styles.css';

import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import actions from './actions'
import { Textarea, TextField, Label, Hint, Input, Message } from '@zendeskgarden/react-textfields';

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
        <Textarea>
          <Label>Location Description</Label>
        </Textarea>
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
