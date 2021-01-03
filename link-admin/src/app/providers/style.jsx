import React from 'react'
import PropTypes from 'prop-types'

import theme from 'app/theme/theme'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider as ZengardenThemeProvider } from '@zendeskgarden/react-theming'

import 'app/index.css'

const Providers = ({ children }) => (
  <StyledThemeProvider theme={ theme }>
    <ZengardenThemeProvider theme={ theme }>
      { children }
    </ZengardenThemeProvider>
  </StyledThemeProvider>
)

Providers.propTypes = {
  children: PropTypes.element
}

export default Providers
