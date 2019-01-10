import preact from 'preact';
import s from './ToggleButton.css';

// A button with toggle classes based on state and
// either a visual-only display (for putting inside of an a link)
// or onClick support (which will render as a button)
const ToggleButton = props => {
	const className = `${s.toggleButton}
                     ${props.enabled ? s.enabled : ''}
                     ${props.extraClassName || ''}`;

	if (props.visualOnly) {
		return (
			<span
				className={props.className}
				// No onClick support - use button for that
				title={props.label}
			>
				{props.label}
			</span>
		);
	}
	return (
		<button className={className} onClick={props.onClick} title={props.label}>
			{props.label}
		</button>
	);
	
};

export default ToggleButton;
