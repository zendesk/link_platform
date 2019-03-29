import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Organization extends Component {
  static propTypes = {
    organization: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>org</div>
    );
  }
}


export default Organization;
