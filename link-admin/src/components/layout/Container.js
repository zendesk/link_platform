import styled from 'styled-components'
import propTypes from 'prop-types'

const Container = styled.div`
	margin: 0 auto;
	width: 100%;
	max-width: ${ props => props.theme.breakpoints[props.maxWidth ? props.maxWidth : 'xl'] };
`

Container.propTypes = {
  maxWidth: propTypes.oneOf(['sm', 'md', 'lg', 'xl'])
}

export default Container
