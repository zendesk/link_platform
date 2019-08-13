import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { createComponent, createComponentWithProxy } from 'react-fela'
import { Button } from '@zendeskgarden/react-buttons';
import { Input } from '@zendeskgarden/react-textfields';

import sailor from '../../../images/sailor.svg'
import strings from '../../../strings'
import Spacer from '../../../components/layout/Spacer'
import Row from '../../../components/layout/Row'
import Padded from '../../../components/layout/Padded'

const AdminTopBarContainer = createComponent(() => ({}));

const SailorImage = createComponent(() => ({
    bottom: '-.5rem',
    position: 'relative',
    zIndex: '-1'
  }),
  'img',
  ['src']
);

const NewButton = createComponentWithProxy(() => ({
    alignSelf: 'flex-end'
  }),
  Button
);

const SearchBarContainer = createComponent(() => ({
    minWidth: '500px',
    display: 'flex',
    flexDirection: 'column'
  })
);

class AdminTopBar extends Component {
  static propTypes = {
    tags: PropTypes.array.isRequired,
  };

  static defaultProps = {
    tags: [],
  }

  render() {
    const { tags } = this.props;

    return (
      <AdminTopBarContainer>
        <Row>
          <SearchBarContainer>
            <SailorImage src={sailor} />
            <Input
              placeholder={strings.AdminTopBar_SearchPlaceholder}
              aria-label={strings.AdminTopBar_SearchPlaceholder}
            />
          </SearchBarContainer>
            <Spacer space={'2.2'} />
            <NewButton>{strings.AdminTopBar_NewButton}</NewButton>
        </Row>
        <Padded>
          {tags}
        </Padded>
      </AdminTopBarContainer>
    );
  }
}

export default AdminTopBar;
