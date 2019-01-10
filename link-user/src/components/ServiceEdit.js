import { h, Component } from 'preact';
import { createComponent } from 'preact-fela';
import { gender, age } from '../../lib/eligibilities';
import { uuid } from '../../lib/uuid';
import TimeRangePicker from './TimeRangePicker';
import ToggleButton from './ToggleButton';

// Styles
const ServiceEditBox = createComponent(() => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	alignItems: 'flex-start'
}));

const commonInputStyles = {
	padding: '5px',
	borderRadius: '4px',
	border: '1px solid #ccc',
	verticalAlign: 'middle',
	boxShadow: 'inset 0 1px 3px #ddd',
	color: '#777'
};

const ServiceInput = createComponent(() => commonInputStyles, 'input');

const ServiceTextarea = createComponent(() => commonInputStyles, 'textarea');

const InputBox = createComponent(() => ({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'flex-start',
	alignItems: 'center',
	padding: '10px 0'
}));

const InputGroupContainer = createComponent(() => ({
	padding: '10px 10px 10px 0',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	alignItems: 'left'
}));

const FlexInputGroupContainer = createComponent(
	() => ({
		flexDirection: 'row'
	}),
	InputGroupContainer
);

const InputOptionSpan = createComponent(
	() => ({
		padding: '5px 0'
	}),
	'span'
);

const SubsectionButtonContainer = createComponent(() => ({
	fontWeight: 'bold',
	margin: '35px 0 10px',
	borderBottom: '1px solid #555',
	width: '100%'
}));

const AddToSubsectionButton = createComponent(
	() => ({
		color: '#666',
		padding: '0',
		margin: '0 5px',
		border: 'none',
		background: 'none',
		cursor: 'pointer',
		verticalAlign: 'baseline',
		':hover': {
			fontWeight: 'bold'
		}
	}),
	'button'
);

const DeleteServiceButton = createComponent(
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

/* The existing times range 0-2359. This was the easiest way I could think of to make sure that the previous day always weighted less than the next day. */
const scheduleSorter = {
	'-': -1,
	Sunday: 0,
	Monday: 10000,
	Tuesday: 20000,
	Wednesday: 30000,
	Thursday: 40000,
	Friday: 50000,
	Saturday: 60000
};

class ServiceEdit extends Component {
	blankSchedule = () => {
		const { service } = this.props;
		return {
			opensAt: '0000',
			closesAt: '0000',
			id: uuid(),
			locationId: service.locationId,
			organizationId: service.organization,
			serviceId: service.id,
			weekday: '-'
		};
	}

	updateService = (field, value) => {
		const { service, handleChange } = this.props;
		const newService = service;

		newService[field] = value;
		handleChange(newService);
	}

	deleteService = () => {
		const { service, handleDelete } = this.props;

		handleDelete(service);
	}

	handleServiceChange = (field, event) => {
		this.updateService(field, event.target.value);
	}

	handleGender = value => {
		const { eligibility } = this.props.service;
		const newEligibility = eligibility;

		newEligibility.gender = value.key;
		this.updateService('eligibility', newEligibility);
	}

	handleAge = value => {
		const { eligibility } = this.props.service;
		const newEligibility = eligibility;
		let newAge = newEligibility.age || '';

		if (newAge.includes(value.key)) {
			newAge = newAge.replace(value.key, '');
		}
		else {
			newAge = newAge + value.key;
		}

		newEligibility.age = newAge;
		this.updateService('eligibility', newEligibility);
	}

	getAgeClass = value => {
		const { eligibility } = this.props.service;
		let stateVal = eligibility ? eligibility.age || '' : '';

		return stateVal.includes(value.key);
	}

	getGenderClass = value => {
		const { eligibility } = this.props.service;
		let stateVal = eligibility ? eligibility.gender : '';

		return stateVal === value.key;
	}

	getCategoryClass = value => {
		const { taxonomy } = this.props.service;

		return taxonomy.toLowerCase() === value;
	}

	handleTimeChange = (event, value_changed, metadata) => {
		const { schedules } = this.props.service;
		const newSchedules = schedules;

		if (value_changed === 'start') {
			newSchedules[metadata.scheduleNum].opensAt = event.target.value.replace(
				':',
				''
			);
		}
		else if (value_changed === 'end') {
			newSchedules[metadata.scheduleNum].closesAt = event.target.value.replace(
				':',
				''
			);
		}
		else {
			if (event.target.value === '-') {
				window.alert('You must choose a weekday for a schedule');
				return;
			}
			newSchedules[metadata.scheduleNum].weekday = event.target.value;
		}

		this.updateService('schedules', newSchedules);
	}

	handleTimeDelete = index => {
		const { schedules } = this.props.service;
		const newSchedules = schedules;

		newSchedules.splice(index, 1);

		this.updateService('schedules', newSchedules);
	}

	sortSchedules = schedules =>
		schedules.sort(
			(a, b) =>
				scheduleSorter[a.weekday] +
				parseInt(a.opensAt, 10) -
				(scheduleSorter[b.weekday] + parseInt(b.opensAt, 10))
		)

	newSchedule = () => {
		const { schedules } = this.props.service;
		const newSchedules = schedules;

		newSchedules.push(this.blankSchedule());

		this.updateService('schedules', newSchedules);
	}

	render() {
		const { service, taxonomies } = this.props;

		return (
			<ServiceEditBox>
				<InputBox>
					<InputGroupContainer>
						<span>Service Name</span>
						<ServiceInput
							type="text"
							value={service.name}
							onChange={e => this.handleServiceChange('name', e)}
						/>
					</InputGroupContainer>
					<InputGroupContainer>
						<span>Service Description</span>
						<ServiceInput
							type="text"
							value={service.description}
							onChange={e => this.handleServiceChange('description', e)}
						/>
					</InputGroupContainer>
				</InputBox>
				<InputBox>
					<InputGroupContainer>
						<span>Application Process</span>
						<ServiceTextarea
							type="text"
							value={service.applicationProcess}
							onChange={e => this.handleServiceChange('applicationProcess', e)}
						/>
					</InputGroupContainer>
				</InputBox>
				<InputBox>
					<FlexInputGroupContainer>
						<span>Category: </span>
						{taxonomies.map((category, i) => (
							<InputOptionSpan>
								<ToggleButton
									key={`category-${i}`}
									enabled={this.getCategoryClass(category.name.toLowerCase())}
									onClick={e =>
										this.updateService('taxonomy', category.name.toLowerCase())
									}
									label={category.name}
								/>
							</InputOptionSpan>
						))}
					</FlexInputGroupContainer>
				</InputBox>
				<h4>Select all that apply:</h4>
				<InputBox>
					<GenderBox
						gender={service.eligibility && service.eligibility.gender}
						getGenderClass={this.getGenderClass}
						handleGender={this.handleGender}
					/>
				</InputBox>
				<InputBox>
					<AgeBox getAgeClass={this.getAgeClass} handleAge={this.handleAge} />
				</InputBox>
				<SubsectionButtonContainer>
					Schedules
					<AddToSubsectionButton
						onClick={this.newSchedule}
						title={`Click to add a new schedule`}
					>
						+ Add
					</AddToSubsectionButton>
				</SubsectionButtonContainer>
				<InputBox>
					<FlexInputGroupContainer>
						<span>Schedule: </span>
						{this.sortSchedules(service.schedules).map((schedule, index) => (
							<ScheduleBox
								key={`schedule-${index}`}
								index={index}
								schedule={schedule}
								handleTimeChange={this.handleTimeChange}
								handleTimeDelete={this.handleTimeDelete}
							/>
						))}
					</FlexInputGroupContainer>
				</InputBox>
				<InputBox>
					<InputGroupContainer>
						<DeleteServiceButton onClick={this.deleteService}>
							Delete this Service
						</DeleteServiceButton>
					</InputGroupContainer>
				</InputBox>
			</ServiceEditBox>
		);
	}
}

const GenderBox = props => (
	<FlexInputGroupContainer>
		<span>Gender Eligibility: </span>
		{gender.map((gender, i) => (
			<InputOptionSpan>
				<ToggleButton
					key={`gender-${gender.name}`}
					enabled={props.getGenderClass(gender)}
					onClick={e => props.handleGender(gender)}
					label={gender.name}
				/>
			</InputOptionSpan>
		))}
	</FlexInputGroupContainer>
);

const AgeBox = props => (
	<FlexInputGroupContainer>
		<span>Age Eligibility: </span>
		{age.map((age, i) => (
			<InputOptionSpan>
				<ToggleButton
					key={`age-${age.name}`}
					enabled={props.getAgeClass(age)}
					onClick={e => props.handleAge(age)}
					label={age.name}
				/>
			</InputOptionSpan>
		))}
	</FlexInputGroupContainer>
);

const ScheduleBox = props => (
	<FlexInputGroupContainer>
		<TimeRangePicker
			key={`timePicker-${props.index}`}
			weekday={props.schedule.weekday}
			startTime={props.schedule.opensAt}
			endTime={props.schedule.closesAt}
			handleUpdate={props.handleTimeChange}
			handleDelete={props.handleTimeDelete}
			metadata={{ scheduleNum: props.index, day: props.index }}
		/>
	</FlexInputGroupContainer>
);

export default ServiceEdit;
