import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Item } from '@zendeskgarden/react-menus'
import { OverflowButton } from '@zendeskgarden/react-tables'

const OverflowMenu = ({ onSelectItem, menuItems }) => (
  <Menu
    onChange={onSelectItem}
    placement="bottom-end"
    style={{ marginTop: 0 }}
    popperModifiers={{
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
    }}
    trigger={({ ref, isOpen }) => {
      const buttonProps = {
        innerRef: ref,
        active: isOpen,
        'aria-label': 'Row Actions',
      }

      if (isOpen) {
        buttonProps.focused = false
      }

      return (
        <OverflowButton
          {...buttonProps}
          onBlur={e => {
            /** Used to keep visual focus within row once menu is exanded */
            if (isOpen) {
              e.preventDefault()
            }
          }}
        />
      )
    }}
  >
    {menuItems.map(item => (
      <Item key={item.key}>{item.label}</Item>
    ))}
  </Menu>
)

export default OverflowMenu
