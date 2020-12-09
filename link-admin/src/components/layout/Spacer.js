import styled from 'styled-components'
import PropTypes from 'prop-types'

const Spacer = styled.div`
  width: ${props => props.space ? props.space : 1}rem;
`

Spacer.propTypes = {
  space: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Spacer
