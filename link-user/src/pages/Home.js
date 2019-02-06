import { h, Component } from 'preact';

import Home from '../components/Home';
import Layout from '../components/Layout';
import Loading from '../components/Loading';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			taxonomies: []
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
