import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'

const Redirect = ({ to }) => {
  const dispatch = useDispatch()
  dispatch(push(to))
}

Redirect.propTypes = {
  to: PropTypes.string.isRequired
}

export default Redirect
