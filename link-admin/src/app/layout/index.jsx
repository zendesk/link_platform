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
      <Topbar id="topbar" />
      <Sidebar id="sidebar" />

      <div id="content" className="w-full overflow-auto">
        <main className="flex flex-col p-4 m-auto my-0">
          { children }
        </main>
      </div>

      <Footer id="footer" />
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div`
	display: grid;
  height: 100vh;
  grid-template-columns: ${({ theme }) => theme.sidebar.width.closed} 1fr;
  grid-template-rows: 53px 1fr 35px;
	gap: 0;
  grid-template-areas:
    "sidebar topbar"
    "sidebar content"
    "sidebar footer";

  &.sidebar-open {
    grid-template-columns: ${({ theme }) => theme.sidebar.width.open} 1fr;
  }

  #topbar {
    grid-area: topbar;
  }

  #sidebar {
    grid-area: sidebar;
  }

  #content {
  	grid-area: content;
  }

  #footer {
    grid-area: footer;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "topbar"
      "content"
      "footer";

    #sidebar {
      grid-area: unset;
      position: fixed;
      top: 0;
      left: -100vw;
      width: 100vw;
      height: 100vh;
    }

    &.sidebar-open {
      grid-template-columns: unset;

      #sidebar {
        left: 0;
        transition: left 150ms ease-in-out;
      }
    }
  }
`

AdminLayout.propTypes = {
  children: PropTypes.node
}

export default AdminLayout
