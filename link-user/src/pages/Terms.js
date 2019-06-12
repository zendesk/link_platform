import { h } from 'preact';

import Terms from '../components/Terms';

const mockData = {
  appName: 'Link-SF',
  adminOrgName: 'St. Anthony',
  logoUrl: ''
};

const TermsPage = () => (
  <Terms appName={mockData.appName} adminOrgName={mockData.adminOrgName} logoUrl={mockData.logoUrl} />
);

export default TermsPage;
