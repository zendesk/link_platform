import { h } from 'preact';
import { createComponentWithProxy } from 'preact-fela';

import Link from '../Link';

// Styles
const Container = createComponentWithProxy(
	() => ({
		maxWidth: '325px',
		margin: '0 auto',
		textAlign: 'center',
		marginTop: '10px',
		marginBottom: '10px',
		padding: '0 10px',
		color: '#ACACAC',
		fontSize: '15px'
	}),
	'footer'
);

const NavLink = createComponentWithProxy(
	() => ({
		display: 'inline-block',
		margin: '0 5px',
		color: '#ACACAC',
		textDecoration: 'none'
	}),
	Link
);

const Footer = () => (
	<Container role="navigation">
		<NavLink to="/terms">Terms</NavLink>
		<NavLink to="/feedback">Feedback</NavLink>
		<NavLink to="/about">About</NavLink>
	</Container>
);

export default Footer;
