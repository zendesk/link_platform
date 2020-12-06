import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classnames from 'classnames'

import Topbar from './Topbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { useSelector } from 'react-redux'

const AdminLayout = ({ children }) => {
  const app = useSelector(state => state.app)

  return (
    <LayoutContainer className={ classnames({ 'sidebar-open': app.sidebarOpen }) }>
      <Topbar />
      <Sidebar />

      <ContentWrapper>
        <Content id="content">
          { children }
        </Content>
      </ContentWrapper>

      <Footer />
    </LayoutContainer>
  )
}


const LayoutContainer = styled.div`
	display: grid;
  height: 100vh;
  grid-template-columns: ${({ theme }) => theme.sidebar.width.closed} 1fr;
  grid-template-rows: 50px 1fr 35px;
	gap: 0;
  grid-template-areas:
    "sidebar topbar"
    "sidebar content"
    "sidebar footer";

  &.sidebar-open {
    grid-template-columns: ${({ theme }) => theme.sidebar.width.open} 1fr;
  }
`

const ContentWrapper = styled.div`
	grid-area: content;
	overflow: auto;
  width: 100%;
`

const Content = styled.main`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
  padding: 15px;
`

AdminLayout.propTypes = {
  children: PropTypes.node
}

export default AdminLayout
