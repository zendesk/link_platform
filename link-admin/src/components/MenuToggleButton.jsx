import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import classnames from 'classnames'

import Icon from 'components/Icon'
import { useDispatch, useSelector } from 'react-redux'
import { setSidebarOpen } from 'store/app'

const MenuToggleButton = ({ className, size, color }) => {
  const dispatch = useDispatch()
  const app = useSelector(state => state.app)

  const toggleMenuButton = () => {
    dispatch(setSidebarOpen(!app.sidebarOpen))
  }
	
  return (
    <ButtonContainer onClick={ toggleMenuButton } className={ classnames(['inline-block cursor-pointer', className]) }>
      <Icon name='menu-stroke' size={ size } color={ color } />
    </ButtonContainer>
  )
}

const ButtonContainer = styled.div`
  svg {
    display: inline;
  }
`

MenuToggleButton.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  className: PropTypes.string
}

export default MenuToggleButton
