import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import sprite from '@zendeskgarden/svg-icons/dist/index.svg'

const Icon = ({ name, size, color, fill }) => {
  return (
    <Svg size={ size || 16 } color={ color } fill={ fill }>
      <use xlinkHref={ `${sprite}#zd-svg-icon-12-${name}` } />
    </Svg>
  )
}

const Svg = styled.svg`
	width: ${props => props.size }px;
	height: ${props => props.size }px;
`

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  fill: PropTypes.string
}

export default Icon
