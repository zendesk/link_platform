import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown, Item, Menu, Trigger } from '@zendeskgarden/react-dropdowns'
import { OverflowButton } from '@zendeskgarden/react-tables'

const menuPopperModifiers = {
  preventOverflow: {
    boundariesElement: 'viewport',
  },
  flip: {
    enabled: false,
  },
  offset: {
    fn: data => {
      /**
       * Ensure correct placement relative to trigger
       **/
      data.offsets.popper.top -= 2
      return data
    },
  },
}

const OverflowMenu = ({ onSelectItem, menuItems }) => (
  <Dropdown
    onSelect={ onSelectItem }
  >
    <Trigger aria-label='Row Actions'>
      <OverflowButton />
    </Trigger>
    <Menu
      placement="bottom-end"
      style={ { marginTop: 0 } }
      popperModifiers={ menuPopperModifiers }
    >
      { menuItems.map(item => (
        <Item key={ item.key } value={ item.key }>{ item.label }</Item>
      )) }
    </Menu>
  </Dropdown>
)

export default OverflowMenu
