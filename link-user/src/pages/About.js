import { h } from 'preact';

import About from '../components/About';

const mockData = {
	logoUrl: '',
	description: 'Preact doing stuff'
};

const AboutPage = () => <About logoUrl={mockData.logoUrl} description={mockData.description} />;

export default AboutPage;
