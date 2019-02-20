import { h, Component } from 'preact';

import Home from '../components/Home';
import Layout from '../components/Layout';
import Loading from '../components/Loading';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// TODO: Remove mock data
			taxonomies: [
				{
					id: 1,
					icon: '',
					name: 'Food'
				},
				{
					id: 2,
					icon: '',
					name: 'Housing'
				},
				{
					id: 3,
					icon: '',
					name: 'Hygiene'
				},
				{
					id: 4,
					icon: '',
					name: 'Medical'
				},
				{
					id: 5,
					icon: '',
					name: 'Shelter'
				}
			]
		};
	}

	render() {
		const { taxonomies } = this.state;

		return (
			<Layout>
				{taxonomies.length ? <Home categories={taxonomies} /> : <Loading />}
			</Layout>
		);
	}
}

export default HomePage;
