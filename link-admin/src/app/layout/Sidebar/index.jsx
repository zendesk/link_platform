import React from 'react'
import styled from 'styled-components'

import Icon from 'components/Icon'
import { useDispatch, useSelector } from 'react-redux'
import { setSidebarOpen } from 'store/app'

const Sidebar = () => {
  const dispatch = useDispatch()
  const app = useSelector(state => state.app)

  const toggleMenuButton = () => {
    dispatch(setSidebarOpen(!app.sidebarOpen))
  }

  return (
    <SidebarContainer id="sidebar">
      <nav>
        <MenuToggleButton onClick={ toggleMenuButton }>
          <Icon name='menu-stroke' size='36' />
        </MenuToggleButton>
      </nav>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  grid-area: sidebar;
  z-index: 1000;
  background: ${({ theme }) => theme.palette.grey[500]};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const MenuToggleButton = styled.div`
  text-align: right;
  padding: 10px 16px 0 0;
  cursor: pointer;

  svg {
    font-size: 36px;
  }
`

export default Sidebar
