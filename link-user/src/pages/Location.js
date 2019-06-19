
import { h, Component } from 'preact';

import Layout from '../components/Layout';
import Location from '../components/Location';

// TODO: remove mock data
const organization = {
	id: '1',
    longDescription: 'This is such a great organization',
    name: 'Great Org',
    phones: [],
    url: '',
};

class LocationPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// TODO: Remove mock data
			location: {
				id: 1,
				name: 'cool place'
			}
		};
	}
	render() {
		const { location } = this.state;

		return (
			<Layout>
                <Location location={location} organization={organization}></Location>
			</Layout>
		);
	}
};
export default LocationPage;
