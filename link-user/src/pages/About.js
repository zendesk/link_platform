import { h, Component } from 'preact';

import About from '../components/About';

const mockData = {
	logoUrl: "",
	description: "Preact doing stuff"
}
class AboutPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<About logoUrl={mockData.logoUrl} description={mockData.description}/>
		);
	}
}

export default AboutPage;
