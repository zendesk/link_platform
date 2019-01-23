import { h } from 'preact';
import { createComponent } from 'preact-fela';

// Style
const Container = createComponent(() => ({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between'
}));

const Select = createComponent(
	() => ({
		marginTop: '8px'
	}),
	'select'
);

const PickerLabel = createComponent(
	() => ({
		marginTop: '8px'
	}),
	'span'
);

const PickerInput = createComponent(
	() => ({
		padding: '3px',
		borderRadius: '2px',
		border: '1px solid #ccc',
		verticalAlign: 'middle',
		boxShadow: 'inset 0 1px 2px #ddd',
		color: '#777'
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
		padding: '10px 22px'
	}),
	'button'
);

// Helper functions
const TimeRangePicker = props => {
	const weekdays = [
		'-',
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	];

	function startLabel() {
		return props.startLabel || 'Opens at:';
	}

	function endLabel() {
		return props.endLabel || 'Closes at:';
	}

	function startTime() {
		if (props.startTime) {
			let startTime = props.startTime.toString();
			if (startTime.length !== 4) {
				startTime = '0' + startTime;
			}
			return startTime.slice(0, 2) + ':' + startTime.slice(2, 4);
		}
		return '00:00';
	}

	function endTime() {
		if (props.endTime) {
			let endTime = props.endTime.toString();
			if (endTime.length !== 4) {
				endTime = '0' + endTime;
			}
			return endTime.slice(0, 2) + ':' + endTime.slice(2, 4);
		}
		return '00:00';
	}

	return (
		<Container>
			<Select
				value={props.weekday}
				onChange={e => props.handleUpdate(e, 'weekday', props.metadata)}
			>
				{weekdays.map(day => (
					<option value={day}>{day}</option>
				))}
			</Select>
			<PickerLabel>{startLabel()}</PickerLabel>
			<PickerInput
				type="time"
				value={startTime()}
				onChange={e => props.handleUpdate(e, 'start', props.metadata)}
			/>
			<PickerLabel>{endLabel()}</PickerLabel>
			<PickerInput
				type="time"
				value={endTime()}
				onChange={e => props.handleUpdate(e, 'end', props.metadata)}
			/>
			<BaseButton onClick={e => props.handleDelete(props.metadata.scheduleNum)}>
				Delete
			</BaseButton>
		</Container>
	);
};

export default TimeRangePicker;
