import { h } from 'preact';
import { createComponent } from 'preact-fela';

const Input = createComponent(() => ({
	display: 'block',
	margin: '3px 0',
	maxWidth: '150px',
	height: '10px',
	width: '100%',
	border: '1px solid #ccc',
	padding: '2px'
}), 'input');

const TextInput = props => <Input {...props} type="text" />;

export default TextInput;
