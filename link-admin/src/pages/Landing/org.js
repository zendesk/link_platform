import '@zendeskgarden/react-buttons/dist/styles.css';
import '@zendeskgarden/react-tags/dist/styles.css';
import '@zendeskgarden/react-textfields/dist/styles.css';

import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import actions from './actions'
import AdminTopBar from './components/AdminTopBar';
import * as Taxonomy from './components/Taxonomy';