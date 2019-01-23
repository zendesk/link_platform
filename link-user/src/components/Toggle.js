import { h } from 'preact';
import { createComponent, createComponentWithProxy } from 'preact-fela';

import s from './Toggle.css';

// Styles
const disabledContainerStyles = disabled =>
	disabled ? { borderColor: '#999', cursor: 'default' } : {};

const disabledHandleStyles = disabled =>
	disabled
		? {
			display: 'block',
			content: "' '",
			position: 'absolute',
			top: '0',
			left: '0',
			height: '15px',
			width: '15px',
			background: 'white',
			filter: 'alpha(opacity=50)',
			opacity: '0.5',
			borderRadius: '8px'
		  }
		: {};

const Container = createComponentWithProxy(({ disabled }) => ({
	userSelect: 'none',
	...disabledContainerStyles(disabled)
}));

const MaskContainer = createComponentWithProxy(() => ({
	height: '15px',
	padding: '1px 2px',
	overflow: 'hidden'
}));

const SwitchContainer = createComponentWithProxy(({ isSwitchOn }) => ({
	height: '12px',
	position: 'relative',
	left: isSwitchOn ? '-1px' : '-25px',
	':after': {
		transition: 'left 0.3s cubic-bezier(0.35, 0, 0.25, 1)',
		animationTimingFunction: 'cubic-bezier(0.35, 0, 0.25, 1)',
		animationDuration: '0.3s'
	},
	':focus': {
		borderColor: '#8aade1',
		boxShadow: '0 0 3px #8aade1',
		outline: 'none'
	}
}));

const SwitchUpper = createComponent(() => ({
	height: '10px',
	width: 'auto',
	margin: '3px',
	position: 'absolute',
	zIndex: '101'
}));

const Handle = createComponent(
	({ disabled }) => ({
		display: 'block',
		height: '15px',
		width: '15px',
		position: 'absolute',
		top: '-4px',
		left: '23px',
		backgroundSize: '15px 15px',
		borderRadius: '8px',
		border: 'solid 1px #d2d2d2',
		backgroundColor: '#fff',
		boxShadow: '0 2px 2px #929292',
		':after': {
			...disabledHandleStyles(disabled)
		}
	}),
	'span'
);

const SwitchLower = createComponent(() => ({
	height: '10px',
	width: '500px',
	margin: '3px',
	position: 'absolute',
	zIndex: '99'
}));

const LabelsContainer = createComponent(() => ({
	clear: 'both'
}));

const OnLabelText = createComponent(
	() => ({
		borderRight: 'none',
		background: 'rgb(243,243,243)',
		paddingRight: '10px',
		borderTopRightRadius: '0',
		borderBottomRightRadius: '0',
		width: '15px',
		':hover': {
			color: 'white',
			textDecoration: 'none'
		}
	}),
	'span'
);

const OffLabelText = createComponent(
	() => ({
		borderLeft: 'none',
		borderColor: '#660000',
		paddingLeft: '10px',
		borderTopLeftRadius: '0',
		borderBottomLeftRadius: '0',
		background: 'rgb(243,243,243)',
		width: '15px',
		':hover': {
			color: 'white',
			textDecoration: 'none'
		}
	}),
	'span'
);

const SwitchMiddleContainer = createComponent(() => ({
	height: '10px',
	width: '36px',
	border: 'solid 4px rgb(243,243,243)',
	position: 'relative',
	marginTop: '-17px',
	zIndex: '100',
	borderRadius: '9px'
}));

const Toggle = ({ disabled, onMouseUp, onLabel, offLabel, on }) => (
	<Container
		disabled={disabled}
		tabIndex="0"
		onMouseUp={e => onMouseUp && onMouseUp(e)}
	>
		<MaskContainer>
			<SwitchContainer isSwitchOn={on}>
				<SwitchUpper>
					<Handle />
				</SwitchUpper>
				<SwitchLower>
					<LabelsContainer>
						<OnLabelText tabIndex="-1">{onLabel || 'YES'}</OnLabelText>
						<OffLabelText tabIndex="-1">{offLabel || 'NO'}</OffLabelText>
					</LabelsContainer>
				</SwitchLower>
			</SwitchContainer>
		</MaskContainer>
		<SwitchMiddleContainer />
	</Container>
);

export default Toggle;
