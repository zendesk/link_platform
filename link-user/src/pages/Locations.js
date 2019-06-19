import { h, Component } from 'preact';

import LocationList from '../components/LocationList';
import Layout from '../components/Layout';
import Loading from '../components/Loading';

class LocationsPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// TODO: Remove mock data
			locations: [{
				id: 1,
				name: 'cool place',
				duration: { text: '4 mins' }
			},
			{
				id: 2,
				name: 'another cool place',
				duration: { text: '12 mins' }
			}]
		};
	}
	render() {
		const { locations } = this.state;

		return (
			<Layout>
				{locations.length ? <LocationList locations={locations} /> : <Loading />}
			</Layout>
		);
	}
};

export default LocationsPage;
