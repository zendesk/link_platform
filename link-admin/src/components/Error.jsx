import React from 'react'
import PropTypes from 'prop-types'

const Error = ({ error }) => {
  return (
    <div>
      <h1>Error:</h1>
      <p>{ error }</p>
    </div>
  )
}

Error.propTypes = {
  error: PropTypes.node
}

export default Error
