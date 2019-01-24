import { h } from 'preact';
import { createComponent } from 'preact-fela';

const enabledStyles = enabled =>
	enabled
		? { background: '#007aff', color: '#FFF', borderColor: '#007aff' }
		: {};

const Container = createComponent(({ enabled }) => ({
	color: 'rgb(153, 153, 153)',
	border: 'solid 1px #777',
	cursor: 'pointer',
	fontSize: '15px',
	background: '#f3f3f3',
	borderRadius: '4px',
	borderColor: 'rgb(153, 153, 153)',
	padding: '5px 11px',
	...enabledStyles(enabled),
	':first-child': {
		marginRight: '10px'
	}
}));

// A button with toggle classes based on state and
// either a visual-only display (for putting inside of an a link)
// or onClick support (which will render as a button)
const ToggleButton = ({
	enabled,
	extraClassName,
	visualOnly,
	label,
	onClick
}) => {
	if (visualOnly) {
		return (
			<Container
				className={extraClassName}
				enabled={enabled}
				// No onClick support - use button for that
				title={label}
			>
				{label}
			</Container>
		);
	}
	return (
		<button className={extraClassName} onClick={onClick} title={label}>
			{label}
		</button>
	);
};

export default ToggleButton;
