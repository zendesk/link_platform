import { h } from 'preact';
import { createComponent } from 'react-fela';

const ButtonContainer = createComponent(
	() => ({
		cursor: 'pointer',
		backgroundColor: '#F3F3F3',
		border: '1px solid #DCDCDC',
		borderRadius: '13px',
		color: '#989898',
		fontSize: '8px',
		padding: '4px 7px'
	}),
	'button'
);

const Button = props => <ButtonContainer>{props.children}</ButtonContainer>;

export default Button;
