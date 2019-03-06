import { h } from 'preact';
import { createComponent, createComponentWithProxy } from 'preact-fela';

import Link from './Link';

// Styles
const OrganizationItem = createComponent(
	() => ({
		display: 'flex',
		flexDirection: 'column',
		borderBottom: '1px solid #DCDCDC',
		padding: '5px 2px'
	}),
	'li'
);

const OrganizationBox = createComponent(() => ({
	display: 'flex',
	justifyContent: 'space-between'
}));

const OrganizationLink = createComponentWithProxy(
	() => ({
		display: 'block',
		textDecoration: 'none',
		color: '#000'
	}),
	Link
);

const OrganizationName = createComponent(
	() => ({
		margin: '3px 0 2px 0',
		textDecoration: 'none',
		fontWeight: 'bold'
	}),
	'p'
);

const RightCaret = createComponent(
	() => ({
		float: 'right'
	}),
	'i'
);

const OrganizationInfo = createComponent(() => ({
	flexDirection: 'column'
}));

const OrganizationRow = props => (
	<OrganizationItem>
		<OrganizationLink
			to={`/admin/organizations/${props.organization.id}`}
			title={`Click to edit ${props.organization.name}`}
		>
			<OrganizationBox>
				<div>
					<OrganizationName>{props.organization.name}</OrganizationName>
				</div>
				<OrganizationBox>
					<OrganizationInfo>
						{props.organization.long_description}
					</OrganizationInfo>
					<div>
						<RightCaret>></RightCaret>
					</div>
				</OrganizationBox>
			</OrganizationBox>
		</OrganizationLink>
	</OrganizationItem>
);

export default OrganizationRow;
