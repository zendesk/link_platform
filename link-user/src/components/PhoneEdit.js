import { h, Component } from 'preact';
import { createComponent } from 'preact-fela';

// Styles
const PhoneEditContainer = createComponent(() => ({
	flexBasis: '33%',
	padding: '5px 0'
}));

const InputLabel = createComponent(
	() => ({
		display: 'block'
	}),
	'span'
);

const PhoneInput = createComponent(
	() => ({
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		justifyContent: 'space-between'
	}),
	'input'
);

const BaseButton = createComponent(
	() => ({
		border: 'solid 1px #777',
		cursor: 'pointer',
		background: '#f3f3f3',
		borderRadius: '3px',
		borderColor: '#dbdbdb',
		padding: '8px 20px',
		width: '200px',
		fontSize: '16px'
	}),
	'button'
);

const InputGroupContainer = createComponent(() => ({
	padding: '10px 0',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	alignItems: 'left'
}));

class PhoneEdit extends Component {
	updatePhone = (property, value) => {
		const { index, handleChange } = this.props;

		handleChange(property, value, index);
	}

	deletePhone = () => {
		const { index, handleDelete } = this.props;

		handleDelete(index);
	}

	render() {
		const { phone } = this.props;

		return (
			<PhoneEditContainer>
				<InputLabel>Number </InputLabel>
				<PhoneInput
					type="tel"
					value={phone.number}
					onChange={e => this.updatePhone('number', e.target.value)}
				/>
				<InputLabel>Department </InputLabel>
				<PhoneInput
					type="text"
					value={phone.department}
					onChange={e => this.updatePhone('department', e.target.value)}
				/>
				<InputGroupContainer>
					<BaseButton onClick={this.deletePhone}>Delete this Phone</BaseButton>
				</InputGroupContainer>
			</PhoneEditContainer>
		);
	}
}

export default PhoneEdit;
