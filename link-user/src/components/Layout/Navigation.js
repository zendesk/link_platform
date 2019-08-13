import { h } from 'preact';
import { createComponent, createComponentWithProxy } from 'preact-fela';

import Link from '../Link';

// TODO: History
const history = {
	goBack: () => {
		window.history.back();
	}
};

// Styles
const NavContainer = createComponentWithProxy(
	() => ({
		height: '64px',
		borderBottom: '1px solid rgb(204, 204, 204)',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'nowrap',
		alignItems: 'stretch'
	}),
	'nav'
);

const TopSpacer = createComponent(() => ({ height: '20px' }));

const Content = createComponent(() => ({
	flexGrow: '2',
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'nowrap',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: '0 9px'
}));

const BackContainer = createComponent(() => ({
	flexBasis: '33%',
	display: 'flex',
	alignItems: 'center'
}));

const LogoContainer = createComponent(() => ({
	flexBasis: '34%',
	textAlign: 'center'
}));

const FilterContainer = createComponent(() => ({
	flexBasis: '33%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end'
}));

const CurrentUserContainer = createComponent(() => ({
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	maxWidth: '300px',
	margin: '0 auto'
}));

const LogoutAnchor = createComponent(
	() => ({
		float: 'right'
	}),
	'a'
);

const BackLink = createComponentWithProxy(
	() => ({
		cursor: 'pointer',
		textDecoration: 'none',
		color: 'rgb(0, 122, 255)',
		fontSize: '17px',
		display: 'flex',
		alignItems: 'center'
	}),
	Link
);

const FilterLink = createComponentWithProxy(
	() => ({
		cursor: 'pointer',
		textDecoration: 'none',
		color: 'rgb(0, 122, 255)',
		fontSize: '17px',
		display: 'flex',
		alignItems: 'center'
	}),
	Link
);

const BackArrow = createComponentWithProxy(
	() => ({
		width: '13px',
		height: '22px',
		stroke: 'rgb(0, 122, 255)',
		strokeWidth: '3px'
	}),
	'svg'
);

const BackText = createComponent(
	() => ({
		padding: '0 13.3px'
	}),
	'span'
);

const CurrentUserDetailText = createComponent(
	() => ({
		float: 'left'
	}),
	'span'
);

const LogoImage = createComponent(
	() => ({
		height: '20px'
	}),
	'img'
);

// Helper components
const CurrentUser = props => {
	if (props.currentUser) {
		return (
			<CurrentUserContainer>
				<CurrentUserDetailText>
					Logged in as: <strong>{props.currentUser.email}</strong>
				</CurrentUserDetailText>
				<LogoutAnchor href="/logout">Logout</LogoutAnchor>
			</CurrentUserContainer>
		);
	}
	return null;
};

const getFilter = () => {
	const pathname = window.location.pathname;
	if (
		pathname === '/' ||
		pathname === '/options' ||
		pathname.startsWith('/admin')
	) {
		return null;
	}
	return <FilterLink to="/options">Filter</FilterLink>;
};

const Navigation = props => (
	<NavContainer role="navigation">
		<TopSpacer />
		<Content>
			<BackContainer>
				{window.location.pathname === '/' ? null : (
					<BackLink to="" onClick={history.goBack}>
						<BackArrow xmlns="http://www.w3.org/2000/svg">
							<path d="M1.25 11.5 L11.25 1.25 M1.25 10 L11.25 20.75 Z" />
						</BackArrow>
						<BackText>Back</BackText>
					</BackLink>
				)}
			</BackContainer>
			<LogoContainer>
				<Link to="/">
					<LogoImage
						onClick={Link.handleClick}
						role="link"
						src="/link-sf.png"
						alt="San Francisco website that connects homeless and low-income residents with critical and life-saving resources"
					/>
				</Link>
			</LogoContainer>
			<FilterContainer>{getFilter()}</FilterContainer>
			<CurrentUser {...props} />
		</Content>
	</NavContainer>
);

export default Navigation;
