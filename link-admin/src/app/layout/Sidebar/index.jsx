import React from 'react'
import styled from 'styled-components'

import MenuToggleButton from 'components/MenuToggleButton'

const Sidebar = () => {
  return (
    <SidebarContainer id="sidebar" className="flex flex-col justify-between bg-yellow-700">
      <nav>
        <div className="pt-2 pr-4 text-right">
          <MenuToggleButton color="white" size="36" />
        </div>
      </nav>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  z-index: 1000;
`

export default Sidebar
