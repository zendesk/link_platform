import styled from 'styled-components'
import propTypes from 'prop-types'

const Container = styled.div`
	margin: 0 auto;
	width: 100%;
	max-width: ${ props => props.theme.sizes[props.maxWidth ? props.maxWidth : 'xl'] }px;
`

Container.propTypes = {
  maxWidth: propTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl'])
}

export default Container
