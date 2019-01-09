import { h } from 'preact';
import { createComponent } from 'preact-fela';

import OrganizationRow from './OrganizationRow';

// Styles
const ColumnContainer = createComponent(() => ({
	display: 'flex',
	flexDirection: 'column'
}));

const OrganizationList = props => (
	<ColumnContainer>
		{props.organizations.map((org, index) => (
			<OrganizationRow key={`organization-${index}`} organization={org} />
		))}
	</ColumnContainer>
);

export default OrganizationList;
