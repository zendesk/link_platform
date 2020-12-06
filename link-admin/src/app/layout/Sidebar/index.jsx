import React from 'react'
import styled from 'styled-components'

const Sidebar = () => {
  return (
    <SidebarContainer id="sidebar">
      <nav>

      </nav>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  grid-area: sidebar;
  z-index: 1000;
  background: #999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export default Sidebar
