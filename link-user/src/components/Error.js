import { h } from 'preact';
import { createComponent } from 'preact-fela';

const Container = createComponent(() => ({
	background: '#FFFFBA',
	height: '15px',
	textAlign: 'center',
	paddingTop: '3px'
}));

const Error = ({ message }) => <Container>{message}</Container>;

export default Error;
