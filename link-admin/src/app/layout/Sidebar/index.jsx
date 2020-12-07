import React from 'react'
import styled from 'styled-components'

import MenuToggleButton from 'components/MenuToggleButton'

const Sidebar = () => {
  return (
    <SidebarContainer id="sidebar" className="bg-kale-700 flex flex-col justify-between">
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
