import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'

const Link = ({ to, children, ...rest }) => {
  const dispatch = useDispatch()

  const doNavigation = e => {
    e.preventDefault()
    dispatch(push(to))
  }

  return <a href={ to } onClick={ doNavigation } { ...rest }>{ children }</a>
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  rest: PropTypes.object
}

export default Link
