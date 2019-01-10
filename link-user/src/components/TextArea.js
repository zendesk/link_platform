import { h } from 'preact';
import { createComponent } from 'preact-fela';

const TextareaInput = createComponent(
	() => ({
		display: 'block',
		margin: '3px 0',
		maxWidth: '150px',
		width: '100%',
		border: '1px solid #ccc',
		padding: '2px'
	}),
	'textarea'
);

const TextArea = props => <TextareaInput {...props} />;

export default TextArea;
