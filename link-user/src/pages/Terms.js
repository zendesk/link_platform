import { h, Component } from 'preact';

import Terms from '../components/Terms';

const mockData = {
    appName: "Link-SF",
    adminOrgName: "St. Anthony",
    logoUrl: ""
};

class TermsPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Terms appName={mockData.appName} adminOrgName={mockData.adminOrgName} logoUrl={mockData.logoUrl}/>
		);
	}
}

export default TermsPage;
