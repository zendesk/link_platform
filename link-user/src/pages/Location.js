
import { h, Component } from 'preact';

import Layout from '../components/Layout';

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
                <p>{location.name}</p>
			</Layout>
		);
	}
};
export default LocationPage;
