import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Topbar from './Topbar'
import Sidebar from './Sidebar'
import Footer from './Footer'

const AdminLayout = ({ children }) => {
  return (
    <>
      <Topbar />
      <Sidebar />

      <Content>
        { children }
      </Content>

      <Footer />
    </>
  )
}

const Content = styled.div``

AdminLayout.propTypes = {
  children: PropTypes.node
}

export default AdminLayout
