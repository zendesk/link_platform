import { h } from 'preact';

import LocationList from '../components/LocationList';

const locations = [{
	id: 1,
	name: 'cool place'
}];

const LocationsPage = () => <LocationList locations={locations} />;

export default LocationsPage;
