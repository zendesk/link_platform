import { h, Component } from 'preact';
import { createComponent, createComponentWithProxy } from 'preact-fela';

import { uuid } from '../../lib/uuid';

import ServiceEdit from '../ServiceEdit';
import ToggleButton from '../ToggleButton';
import Autocomplete from 'react-google-autocomplete';

// Styles
const LocationEditBox = createComponent(() => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-start'
}));

// const AddressBox = createComponent(() => ({
// 	display: 'flex',
// 	flexDirection: 'column',
// 	width: 175
// }));

const InputBox = createComponent(() => ({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'flex-start',
	alignItems: 'center'
}));

const InputGroup = createComponent(() => ({
	display: 'flex',
	padding: '10px 10px 10px 0',
	flexDirection: 'column',
	justifyContent: 'space-between',
	alignItems: 'left'
}));

const inputRules = () => ({
	padding: '3px',
	borderRadius: '2px',
	border: '1px solid #ccc',
	verticalAlign: 'middle',
	boxShadow: 'inset 0 1px 2px #ddd',
	color: '#777',
	width: '250px'
});

const TextInput = createComponentWithProxy(inputRules, 'input');

const TextAreaInput = createComponentWithProxy(inputRules, 'textarea');

const AutocompleteInput = createComponentWithProxy(inputRules, Autocomplete);

const AddToSubsectionButton = createComponent(
	() => ({
		color: '#666',
		padding: '0',
		fontSize: '15px',
		border: 'none',
		background: 'none',
		cursor: 'pointer',
		verticalAlign: 'baseline'
	}),
	'button'
);

const Button = createComponent(
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

const ServiceEditBox = createComponent(() => ({
	display: 'flex',
	flexFlow: 'column',
	justifyContent: 'flex-start'
}));

const ServicesList = createComponent(() => ({
	flexBasis: '15%',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	padding: '8px'
}));

// const ServicesEdit = createComponent(() => ({
// 	flexBasis: '85%',
// 	padding: '8px'
// }));

const SubsectionLabel = createComponent(() => ({
	fontWeight: 'bold',
	margin: '35px 0 10px',
	borderBottom: '1px solid #555'
}));

const blankService = location => ({
	id: uuid(),
	applicationProcess: '',
	description: '',
	eligibility: {},
	locationId: location.id,
	name: '',
	organization: location.organizationId,
	schedules: [],
	taxonomy: ''
});

const placeholderAddressText = physicalAddress => {
	if (physicalAddress.address1) {
		return physicalAddress.address1 + ', ' + physicalAddress.city;
	}
	return 'Search for location';
};

class LocationEdit extends Component {
	updateLocation = (field, value, save) => {
		const { index, location, handleChange } = this.props;
		const newLocation = location;

		newLocation[field] = value;

		handleChange(newLocation, index, save);
	}

	deleteLocation = () => {
		const { index, handleDelete } = this.props;

		handleDelete(index);
	}

	handleLocationChange = (field, event) => {
		this.updateLocation(field, event.target.value);
	}

	handleAddress = place => {
		const { physicalAddress } = this.props.location;
		const newPhysicalAddress = physicalAddress;

		newPhysicalAddress.address1 = place.name;
		newPhysicalAddress.city = place.vicinity;

		this.updateLocation('physicalAddress', newPhysicalAddress);
		this.updateLocation('latitude', place.geometry.location.lat());
		this.updateLocation('longitude', place.geometry.location.lng());
	}

	handleServices = service => {
		const { services } = this.props.location;
		const newServices = services;

		newServices[service.id] = service;

		this.updateLocation('services', newServices);
	}

	newService = () => {
		const { location } = this.props;
		const newServices = location.services || {};
		const newService = blankService(location);

		newServices[newService.id] = newService;

		this.updateLocation('services', newServices);
		this.selectService(newService);
	}

	deleteService = service => {
		const { services } = this.props.location;
		const newServices = services;

		// eslint-disable-next-line no-alert
		const answer = confirm(
			`Are you sure you want to delete the service: ${
				service.name
			}? You cannot undo this or recover the data.`
		);

		if (answer) {
			delete newServices[service.id];

			this.updateLocation('services', newServices, true);
			this.selectService(null);
		}
	}

	selectService = service => {
		this.props.handleStateUpdate({ selectedService: service });
	}

	serviceSelected = service =>
		this.props.selectedService && this.props.selectedService.id == service.id

	render() {
		const { location, selectedService, taxonomies } = this.props;

		return (
			<LocationEditBox>
				<InputBox>
					<InputGroup>
						<span>Location Name </span>
						<TextInput
							type="text"
							value={location.name}
							onChange={e => this.handleLocationChange('name', e)}
						/>
					</InputGroup>
				</InputBox>
				<InputBox>
					<InputGroup>
						<span>Location Description</span>
						<TextAreaInput
							type="text"
							value={location.description}
							onChange={e => this.handleLocationChange('description', e)}
						/>
					</InputGroup>
				</InputBox>
				<InputBox>
					<InputGroup>
						<span>Location Address</span>
						<AutocompleteInput
							placeholder={placeholderAddressText(location.physicalAddress)}
							onPlaceSelected={this.handleAddress}
							types={['geocode']}
						/>
					</InputGroup>
					<InputGroup>
						<span>Street</span>
						<TextInput
							type="text"
							value={location.physicalAddress.address1}
							disabled
						/>
					</InputGroup>
					<InputGroup>
						<span>City</span>
						<TextInput
							type="text"
							value={location.physicalAddress.city}
							disabled
						/>
					</InputGroup>
				</InputBox>
				<InputGroup>
					<Button onClick={this.deleteLocation}>Delete this Location</Button>
				</InputGroup>
				<ServiceEditBox>
					<SubsectionLabel>
						Services
						<AddToSubsectionButton
							onClick={this.newService}
							title={`Click to add a new service`}
						>
							+ Add
						</AddToSubsectionButton>
					</SubsectionLabel>
					<ServicesList>
						{Object.values(location.services || {}).map(service => (
							<ToggleButton
								key={`service-${service.id}`}
								enabled={this.serviceSelected(service)}
								onClick={e => this.selectService(service)}
								label={service.name || 'Service'}
							/>
						))}
					</ServicesList>

					<ServiceEditBox>
						{selectedService && (
							<ServiceEdit
								key={`service-${selectedService.id}`}
								service={selectedService}
								handleChange={this.handleServices}
								handleDelete={this.deleteService}
								taxonomies={taxonomies}
							/>
						)}
					</ServiceEditBox>
				</ServiceEditBox>
			</LocationEditBox>
		);
	}
}

export default LocationEdit;
