import { h } from 'preact';
// import icons from '../../icons/css/fontello.css';
import { createComponent } from 'preact-fela';

// import { relevantTaxonomies, getIcon } from '../../lib/taxonomies';
// import { capitalize } from '../../lib/stringHelpers';

// import GoogleMap from './GoogleMap';

// const nl2br = require('react-nl2br');

const FlexContainer = createComponent(() => ({
	display: 'flex'
}));

const Container = createComponent(
	() => ({
		flexDirection: 'column'
	}),
	FlexContainer
);

const NameHeader = createComponent(
	() => ({
		marginBottom: '35px'
	}),
	'h2'
);

const Section = createComponent(() => ({
	width: '100%',
	background: '#fff',
	padding: '20px',
	border: '1px solid #ccc',
	boxSizing: 'border-box'
}));

const ParagraphTitle = createComponent(
	() => ({
		margin: '20px 0 0 20px',
		color: '#999'
	}),
	'p'
);

const LabelText = createComponent(
	() => ({
		color: '#999',
		fontWeight: 'normal'
	}),
	'span'
);

const MapInset = createComponent(
	() => ({
		textAlign: 'left',
		boxSizing: 'border-box',
		marginBottom: '1px',
		borderRadius: '3px',
		margin: '15px 0',
		padding: '0',
		display: 'flex',
		flexDirection: 'column'
	}),
	'span'
);

const MapContainer = createComponent(
	() => ({
		height: '230px'
	}),
	'span'
);

const AddressText = createComponent(
	() => ({
		margin: '0px',
		padding: '15px 4px 15px 6px',
		background: '#fff',
		border: '1px solid #ccc'
	}),
	'p'
);

const InsetContainer = createComponent(() => ({
	margin: '15px 0 0 0',
	width: '100%',
	background: '#fff',
	padding: '20px',
	border: '1px solid #ccc',
	display: 'flex',
	fontWeight: 'lighter',
	boxSizing: 'border-box'
}));

const DirectionsLabel = createComponent(
	() => ({
		fontWeight: '700',
		cursor: 'pointer',
		fontSize: '16px',
		color: '#999999'
	}),
	'label'
);

const ContactLabel = createComponent(
	() => ({
		fontWeight: '700',
		marginRight: '8px',
		color: '#999999'
	}),
	'label'
);

const WebsiteUrlText = createComponent(
	() => ({
		textOverflow: 'ellipsis',
		overflow: 'hidden',
		width: '50%'
	}),
	'span'
);

const WebsiteUrlAnchor = createComponent(
	() => ({
		wordWrap: 'break-word',
		textDecoration: 'none',
		color: '#555'
	}),
	'a'
);

const CallPhoneSection = createComponent(() => ({
	color: '#777',
	display: 'flex',
	flexDirection: 'column',
	flexWrap: 'nowrap'
}));

const PhoneAnchor = createComponent(
	() => ({
		textDecoration: 'none',
		color: '#555'
	}),
	'a'
);

const PhoneDepartmentText = createComponent(
	() => ({
		marginLeft: '5px'
	}),
	'span'
);

const ServicesList = createComponent(
	() => ({
		listStyleType: 'none',
		padding: '0',
		margin: '0'
	}),
	'ul'
);

const ServiceListItem = createComponent(
	() => ({
		margin: '30px 0 1px 0',
		border: '1px solid #DDD',
		textAlign: 'left',
		boxSizing: 'border-box',
		borderRadius: '3px'
	}),
	'li'
);

const ServiceTitleText = createComponent(
	() => ({
		marginTop: '0'
	}),
	'h3'
);

const ServiceDescriptionText = createComponent(
	() => ({
		margin: '0 0 5px 0',
		lineHeight: '1.5'
	}),
	'p'
);

const OpenHoursTable = createComponent(
	() => ({
		marginBottom: '5px',
		padding: '3px'
	}),
	'table'
);

const LabelHourData = createComponent(
	() => ({
		padding: '0 5px 0 0'
	}),
	'td'
);

const NoteWrapperContainer = createComponent(() => ({
	padding: '20px',
	background: '#fff'
}));

const NotesContainer = createComponent(() => ({
	background: '#EAEAEA',
	padding: '20px',
	borderRadius: '3px'
}));

const EligibilityContainer = createComponent(() => ({
	background: '#fff',
	padding: '20px',
	borderRadius: '3px'
}));

const getGender = abbr => {
	if (abbr === '' || abbr === 'MF' || abbr === 'FM') return 'Everyone';
	return abbr === 'F' ? 'Women' : 'Men';
};

const getGenderAdj = abbr => {
	if (abbr === '' || abbr === 'MF' || abbr === 'FM') {
		return 'All';
	}
	return abbr === 'F' ? 'Female' : 'Male';
};

const getAge = abbr => {
	switch (abbr) {
		case 'C':
			return 'children';
		case 'Y':
			return 'teens';
		case 'A':
			return 'adults';
		case 'S':
			return 'seniors';
		default:
			return '';
	}
};

const getAllGendersAndAges = services => {
	const allGendersAndAges = Object.values(services)
		.map(service => service.eligibility)
		.reduce(
			(acc, eligibility) => {
				const { gender, age } = acc;
				const moreGender = [...gender, eligibility.gender];
				const moreAge = eligibility.age ? [...age, ...eligibility.age] : age; // ['C', 'Y']
				return { gender: moreGender, age: moreAge };
			},
			{ gender: [], age: [] }
		);
	return {
		gender: Array.from(new Set(allGendersAndAges.gender)).join(''),
		age: Array.from(new Set(allGendersAndAges.age))
	};
};

const getEligibility = ({ gender, age = [] }) => {
	if (gender === '' && age.length === 0) {
		return getGender(gender);
	}

	const ages = age.map(getAge).join(', ');

	return `${getGenderAdj(gender)} ${ages}`;
};

const getMapsUrl = location => {
	const { latitude, longitude } = location;
	return `https://maps.google.com/maps?q=loc:${latitude},${longitude}`;
};

const DAYS = {
	0: 'sunday',
	1: 'monday',
	2: 'tuesday',
	3: 'wednesday',
	4: 'thursday',
	5: 'friday',
	6: 'saturday'
};

const DAY_ABBREVIATIONS = {
	sunday: 'Sun',
	monday: 'Mon',
	tuesday: 'Tue',
	wednesday: 'Wed',
	thursday: 'Thu',
	friday: 'Fri',
	saturday: 'Sat'
};

const convertMilitaryTime = time => {
	const hours = Math.floor(time / 100);
	const mins = time % 100;
	let output = '';
	if (hours < 12) {
		if (hours === 0) {
			output += 12;
		}
		else {
			output += hours;
		}
		if (mins > 0) {
			output += `:${mins}`;
		}
		output += 'am';
	}
	else {
		if (hours === 12) {
			output += hours;
		}
		else {
			output += hours - 12;
		}
		if (mins > 0) {
			output += `:${mins}`;
		}
		output += 'pm';
	}
	return output;
};

const getDailySchedules = schedules => {
	const daySchedules = Object.assign({}, DAY_ABBREVIATIONS);
	Object.keys(daySchedules).forEach(day => {
		daySchedules[day] = [];
	});
	schedules.forEach(schedule => {
		if (schedule.opensAt !== schedule.closesAt) {
			// Check if location is open
			const day = schedule.weekday.toLowerCase();
			const daySchedule = daySchedules[day];
			daySchedule.push({
				opensAt: schedule.opensAt,
				closesAt: schedule.closesAt
			});
		}
	});
	return daySchedules;
};

const getTimeRange = hours => {
	if (hours.opensAt === 0 && hours.closesAt === 2359) {
		return `24 hours`;
	}
	return `${convertMilitaryTime(hours.opensAt)} - ${convertMilitaryTime(
		hours.closesAt
	)}`;
};

const Schedule = props => {
	const daySchedules = getDailySchedules(props.schedules);
	const indexToDaySchedule = index => daySchedules[DAYS[index]];
	const dayHasSchedules = daySchedule =>
		indexToDaySchedule(daySchedule).length > 0;
	const scheduleRows = Object.keys(DAYS)
		.sort()
		.filter(dayHasSchedules)
		.map(index => (
			<tr key={`day-${index}`}>
				<LabelHourData>
					<b>{DAY_ABBREVIATIONS[DAYS[index]]}</b>
				</LabelHourData>
				<LabelHourData>
					{indexToDaySchedule(index)
						.sort((a, b) => a.opensAt < b.opensAt)
						.map(getTimeRange)
						.join(', ')}
				</LabelHourData>
			</tr>
		));
	return (
		<OpenHoursTable>
			<tbody>{scheduleRows}</tbody>
		</OpenHoursTable>
	);
};

const Location = props => {
	const { location, organization } = props;
	const { services = [] } = location;
	return (
		<Container>
			<Section>
				<NameHeader>{location.name}</NameHeader>
				<LabelText>Welcome: </LabelText>
				{getEligibility(getAllGendersAndAges(services))}
			</Section>
			<ParagraphTitle>Services</ParagraphTitle>
			<Section>
				<FlexContainer>
					{/* {relevantTaxonomies(services).map((taxonomy, index) => (
						<span key={`category-${index}`}>
							<i className={`category-icon ${getIcon(taxonomy)}`} />
							{taxonomy}
						</span>
					))} */}
				</FlexContainer>
			</Section>
			{location.physicalAddress && (
				<MapInset>
					<MapContainer>
						{/* <GoogleMap lat={location.latitude} long={location.longitude} /> */}
					</MapContainer>
					<AddressText>{location.physicalAddress.address1}</AddressText>
				</MapInset>
			)}
			{organization.phones && (
				<InsetContainer>
					<ContactLabel className={'icon-phone'}>
						Call{' '}
					</ContactLabel>
					<CallPhoneSection>
						{organization.phones.map((phone, index) => (
							<div key={`phone-${index}`}>
								<PhoneAnchor href={'tel:' + phone.number.replace(/[^\d]/g, '')}>
									{phone.number}
								</PhoneAnchor>
								<PhoneDepartmentText>{phone.department}</PhoneDepartmentText>
							</div>
						))}
					</CallPhoneSection>
				</InsetContainer>
			)}
			{organization.url && (
				<InsetContainer>
					<ContactLabel className={'icon-website'}>
						Website{' '}
					</ContactLabel>
					<WebsiteUrlText>
						<WebsiteUrlAnchor
							href={organization.url}
							rel="nofollow"
							target="_blank"
						>
							{organization.url}
						</WebsiteUrlAnchor>
					</WebsiteUrlText>
				</InsetContainer>
			)}
			<InsetContainer>
				<a
					href={getMapsUrl(location)}
					rel="nofollow"
					target="_blank noopener noreferrer"
				>
					<button>
						<DirectionsLabel className={`icon-compass`}>
							Directions
						</DirectionsLabel>
					</button>
				</a>
			</InsetContainer>
			<ServicesList title="Services details">
				{services &&
					Object.values(services).map((service, index) => (
						<ServiceListItem key={`service-${index}`}>
							<NoteWrapperContainer>
								<ServiceTitleText>{service.name}</ServiceTitleText>
								<ServiceDescriptionText>
									{service.description}
								</ServiceDescriptionText>
								<Schedule schedules={service.schedules} />
							</NoteWrapperContainer>
							<NotesContainer>
								<label>Notes</label>
								<p>{service.applicationProcess}</p>
							</NotesContainer>
							{service.eligibility.notes && (
								<EligibilityContainer>
									<label>Eligibility Notes</label>
									<p>{service.eligibility.notes}</p>
								</EligibilityContainer>
							)}
						</ServiceListItem>
					))}
			</ServicesList>
		</Container>
	);
};

export default Location;
