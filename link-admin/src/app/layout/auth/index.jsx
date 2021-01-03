import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import Footer from '../admin/Footer'

const AuthLayout = ({ children }) => {
  return (
    <AuthContainer>
      <div id='content' className='h-full'>
        <main className='w-full h-full'>
          { children }
        </main>
      </div>

      <Footer id='footer' />
    </AuthContainer>
  )
}

const AuthContainer = styled.div`
	display: grid;
  height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 28px;
	gap: 0;
  grid-template-areas:
    'content'
    'footer';

  #content {
  	grid-area: content;
  }

  #footer {
    grid-area: footer;
	}
`

AuthLayout.propTypes = {
  children: PropTypes.node
}

export default AuthLayout
