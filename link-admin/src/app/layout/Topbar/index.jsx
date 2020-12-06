import React from 'react'
import styled from 'styled-components'

const Topbar = () => {
  return (
    <TopbarContainer id="topbar">
      <TopbarContent>
        Link SF
      </TopbarContent>
    </TopbarContainer>
  )
}

const TopbarContainer = styled.header`
  grid-area: topbar;
  background: #CCC;
  display: flex;
`

const TopbarContent = styled.div`
  flex: 1;
  padding: 10px;
`

export default Topbar
