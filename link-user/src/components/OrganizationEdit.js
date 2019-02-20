import { h, Component } from 'preact';
import { createComponent } from 'preact-fela';
import R from 'ramda';

import { taxonomiesWithIcons } from '../../lib/taxonomies';
import { redirectTo } from '../lib/navigation';
import { uuid } from '../../lib/uuid';
import {
	fetchLocations,
	updateLocation,
	deleteLocation,
	updateOrganization,
	deleteOrganization,
	fetchTaxonomies
} from '../../core/firebaseRestAPI';

import Banner from '../Banner';
import LocationEdit from '../LocationEdit';
import ToggleButton from '../ToggleButton';
import PhoneEdit from '../PhoneEdit';

// import history from '../core/history';
// TODO: History
let history = {};

// Constants
const changesMessage =
	'There are unsaved changes. Are you sure you want to discard them?';

// Helper functions
const blankPhone = () => ({
	department: '',
	number: ''
});

const blankLocation = organization => ({
	id: uuid(),
	description: '',
	latitude: 0,
	longitude: 0,
	name: '',
	organizationId: organization.id || '',
	physicalAddress: {
		address1: '',
		city: ''
	}
});

// Styles
const OrganizationEditBox = createComponent(() => ({
	paddingTop: '20px'
}));

const SubmitBanner = createComponent(() => ({
	paddingBottom: '20px'
}));

const commonInputStyles = {
	padding: '3px',
	borderRadius: '2px',
	border: '1px solid #ccc',
	color: '#333',
	width: 'calc(100% - 10px)',
	resize: 'vertical'
};

const InputField = createComponent(() => commonInputStyles, 'input');

const DescriptionInput = createComponent(
	() => ({
		...commonInputStyles,
		height: '72px'
	}),
	'textarea'
);

const BaseOrganizationProperties = createComponent(() => ({
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'nowrap',
	justifyContent: 'space-between'
}));

const BaseOrganizationItem = createComponent(() => ({
	flexBasis: '50%'
}));

const MainInputGroup = createComponent(() => ({
	display: 'inline-block',
	marginBottom: '20px',
	width: '100%'
}));

const Description = createComponent(() => ({
	height: '72px'
}));

const MainLabel = createComponent(() => ({
	display: 'block'
}));

const SectionLabel = createComponent(() => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center'
}));

const SubsectionLabel = createComponent(() => ({
	fontWeight: 'bold',
	margin: '25px 0 10px',
	borderBottom: '1px solid #555'
}));

const BaseButton = createComponent(
	() => ({
		border: 'solid 1px #777',
		cursor: 'pointer',
		background: '#f3f3f3',
		borderRadius: '3px',
		borderColor: '#dbdbdb',
		padding: '8px 20px',
		minWidth: '200px',
		marginRight: '10px',
		fontSize: '16px'
	}),
	'button'
);

const DeleteButton = createComponent(
	() => ({
		float: 'right',
		color: 'white',
		backgroundColor: '#e05050'
	}),
	BaseButton
);

const SubmitButton = createComponent(
	() => ({
		color: 'white',
		backgroundColor: 'rgb(0, 122, 255)'
	}),
	BaseButton
);

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

const PhonesBox = createComponent(() => ({
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
	justifyContent: 'space-between'
}));

const LocationsEditBox = createComponent(() => ({
	display: 'flex',
	flexDirection: 'column',
	flexWrap: 'nowrap',
	justifyContent: 'flex-start'
}));

const LocationsList = createComponent(() => ({
	flexBasis: '15%',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	padding: '8px'
}));

const LocationEditContainer = createComponent(() => ({
	flexBasis: '85%',
	padding: '8px'
}));

class OrganizationEdit extends Component {
	//TODO: only fetch locations for org rather than filter them down after
	refreshLocations = () => {
		const { organization } = this.state;

		fetchLocations()
			.then(locations =>
				locations.filter(location => location.organizationId == organization.id)
			)
			.then(locations => {
				this.setState({ locations });
			});
	}

	refreshTaxonomies = () => {
		fetchTaxonomies().then(taxonomies => {
			this.setState({
				taxonomies: taxonomiesWithIcons(taxonomies)
			});
		});
	}

	handleDeleteOrganization = () => {
		const { organization, locations } = this.state;
		const answer = confirm(
			`Are you sure you want to delete ${
				organization.name
			}? You cannot undo this or recover the data.`
		);

		if (answer) {
			deleteOrganization(organization.id);
			locations.map(location => {
				deleteLocation(location.id);
			});
			redirectTo('/admin');
		}
	}

	// Updates our representation of the organization in the state
	handleChange = (property, event) => {
		const { organization } = this.state;
		const newOrganization = {};

		newOrganization[property] = event.target.value;

		const updatedOrganization = R.merge(organization, newOrganization);

		this.setState({
			organization: updatedOrganization,
			changesExist: true
		});
	}

	handlePhones = (property, newValue, index) => {
		const { organization } = this.state;

		const newPhone = {};
		newPhone[property] = newValue;

		const newPhones = [...organization.phones];
		newPhones[index] = R.merge(newPhones[index], newPhone);

		const newOrganization = {};
		newOrganization.phones = newPhones;

		const updatedOrganization = R.merge(organization, newOrganization);

		this.setState({
			organization: updatedOrganization,
			changesExist: true
		});
	}

	newPhone = () => {
		const { organization } = this.state;
		const newPhones = [...organization.phones];
		const newOrganization = {};

		newPhones.push(blankPhone());
		newOrganization.phones = newPhones;

		const updatedOrganization = R.merge(organization, newOrganization);

		this.setState({ organization: updatedOrganization });
	}

	deletePhone = index => {
		const { organization } = this.state;
		const newPhones = [...organization.phones];
		const newOrganization = {};

		newPhones.splice(index, 1);
		newOrganization.phones = newPhones;

		this.setState({
			organization: newOrganization,
			changesExist: true
		});
	}

	handleStateUpdate = update => {
		this.setState(update);
	}

	handleLocations = (newLocation, index, save) => {
		const { locations } = this.state;
		const newLocations = [...locations];

		newLocations[index] = newLocation;

		if (save) {
			updateLocation(newLocation).then(response => {
				let success = !response.hasOwnProperty('error');
				this.setState({
					hasSubmit: true,
					submitResult: success,
					changesExist: !success
				});
			});
		}

		this.setState({
			locations: newLocations,
			changesExist: !save
		});
	}

	newLocation = () => {
		const { organization, locations } = this.state;
		const newLocations = [...locations];

		const newLocation = blankLocation(organization);
		newLocations.push(newLocation);

		this.setState({
			locations: newLocations,
			selectedLocation: newLocation,
			selectedService: null
		});
	}

	handleDeleteLocation = index => {
		const { locations } = this.state;
		const location = locations[index];
		const answer = confirm(
			`Are you sure you want to delete the location: ${
				location.name
			}? You cannot undo this or recover the data.`
		);

		if (answer) {
			deleteLocation(location.id).then(response => {
				let success = !response.hasOwnProperty('error');
				const newLocations = [...locations];

				if (success) {
					newLocations.splice(index, 1);
					this.setState({
						locations: newLocations,
						selectedLocation: null,
						selectedLocationIndex: null,
						submitResult: success,
						changesExist: false
					});
				}
			});
		}
	}

	handleSubmit = () => {
		const { organization, locations } = this.state;

		// Clear the banner if you click submit
		this.setState({
			hasSubmit: false
		});

		updateOrganization(organization).then(response => {
			let success = !response.hasOwnProperty('error');
			this.setState({
				hasSubmit: true,
				submitResult: success,
				changesExist: !success
			});
		});

		locations.map(location => {
			updateLocation(location).then(response => {
				let success = !response.hasOwnProperty('error');
				this.setState({
					hasSubmit: true,
					submitResult: success,
					changesExist: !success
				});
			});
		});

		redirectTo('/admin');
	}

	handleReset = () => {
		const { organization } = this.props;

		this.setState(
			{
				organization,
				locations: [],
				selectedLocation: null,
				selectedService: null,
				changesExist: false
			},
			_ => {
				this.refreshLocations();
				this.refreshTaxonomies();
			}
		);
	}

	selectLocation = (location, index) => {
		this.setState({
			selectedLocation: location,
			selectedLocationIndex: index,
			selectedService: null
		});
	}

	locationSelected = location =>
		this.state.selectedLocation &&
		this.state.selectedLocation.id === location.id

	constructor(props) {
		const tempProps = Object.assign({}, props);

		super(props);
		this.state = {
			changesExist: false,
			hasSubmit: false,
			submitResult: true,
			organization: tempProps.organization,
			locations: [],
			selectedLocation: null,
			selectedService: null
		};
	}

	componentDidMount() {
		this.refreshLocations();
		this.refreshTaxonomies();
		const currentLocation = window.location.pathname;

		history.listenBeforeUnload(_ =>
			this.state.changesExist ? changesMessage : null
		);

		// If there are changes and the user tries to click the back button, so we
		// prompt them if it is okay. The caveat is that regardless of the users
		// answer, the history stack and URL have already been modified. So if we
		// are executing the back action (action == POP), then push the current page
		// back onto the stack, otherwise proceed as normal.
		history.listenBefore((location, callback) => {
			if (location.action === 'POP' && this.state.changesExist) {
				if (confirm(changesMessage)) {
					callback();
				}
				else {
					history.push(currentLocation);
				}
			}
			else {
				callback();
			}
		});
	}

	render() {
		const {
			hasSubmit,
			submitResult,
			organization,
			locations,
			selectedLocation,
			selectedLocationIndex,
			selectedService,
			taxonomies
		} = this.state;

		return (
			<OrganizationEditBox>
				<SubmitBanner>
					<Banner show={hasSubmit} isGood={submitResult} />
				</SubmitBanner>
				<h2>{organization.name || 'New Organization'}</h2>

				<BaseOrganizationProperties>
					<BaseOrganizationItem>
						<MainInputGroup>
							<MainLabel>Name </MainLabel>
							<InputField
								type="text"
								value={organization.name}
								onChange={e => this.handleChange('name', e)}
							/>
						</MainInputGroup>
						<MainInputGroup>
							<MainLabel>Website </MainLabel>
							<InputField
								type="text"
								value={organization.url}
								onChange={e => this.handleChange('url', e)}
							/>
						</MainInputGroup>
						<MainInputGroup>
							<MainLabel>Description </MainLabel>
							<DescriptionInput
								value={organization.longDescription}
								onChange={e => this.handleChange('longDescription', e)}
							/>
						</MainInputGroup>
					</BaseOrganizationItem>
				</BaseOrganizationProperties>

				<SubsectionLabel>
					Phone Numbers
					<AddToSubsectionButton
						onClick={this.newPhone}
						title={`Click to add a new phone`}
					>
						+ Add
					</AddToSubsectionButton>
				</SubsectionLabel>
				<PhonesBox>
					{organization.phones.map((phone, index) => (
						<PhoneEdit
							key={`phone-${index}`}
							phone={phone}
							index={index}
							handleChange={this.handlePhones}
							handleDelete={this.deletePhone}
						/>
					))}
				</PhonesBox>
				<LocationsEditBox>
					<SubsectionLabel>
						Locations
						<AddToSubsectionButton
							onClick={this.newLocation}
							title={`Click to add a new location`}
						>
							+ Add
						</AddToSubsectionButton>
					</SubsectionLabel>
					<LocationsList>
						{locations.map((location, index) => (
							<ToggleButton
								key={`location-${location.id}`}
								enabled={this.locationSelected(location)}
								onClick={e => this.selectLocation(location, index)}
								label={location.name || 'Location'}
							/>
						))}
					</LocationsList>

					<LocationEditContainer>
						{selectedLocation ? (
							<LocationEdit
								location={selectedLocation}
								index={selectedLocationIndex}
								selectedService={selectedService}
								handleStateUpdate={this.handleStateUpdate}
								handleChange={this.handleLocations}
								handleDelete={this.handleDeleteLocation}
								taxonomies={taxonomies}
							/>
						) : null}
					</LocationEditContainer>
				</LocationsEditBox>

				<div>
					<SubmitButton onClick={this.handleSubmit}>Submit</SubmitButton>
					<BaseButton onClick={this.handleReset}>Reset</BaseButton>
					<DeleteButton onClick={this.handleDeleteOrganization}>
						Delete this Organization
					</DeleteButton>
				</div>
			</OrganizationEditBox>
		);
	}
}

export default OrganizationEdit;
