import { h } from 'preact';
import { createComponent } from 'preact-fela';

// import { currentUser } from '../../lib/session';
import Navigation from './Navigation';
import Footer from './Footer';

// Styles
const Body = createComponent(() => ({
	display: 'flex',
	flexDirection: 'column',
	flexWrap: 'nowrap',
	width: '100%'
}));

const CenterContent = createComponent(() => ({
	display: 'flex',
	flexDirection: 'column',
	flexWrap: 'nowrap',
	justifyContent: 'space-around',
	alignItems: 'center',
	maxWidth: '900px',
	margin: '0 auto',
	width: '100%'
}));

const AdminContent = createComponent(() => ({
	width: '100%',
	minWidth: '768px'
}));

const Content = createComponent(() => ({
	maxWidth: '768px',
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	flexWrap: 'nowrap'
}));

const Layout = ({ admin, children }) => {
	const ContentComponent = admin ? AdminContent : Content;
	return (
		<Body>
			<Navigation currentUser={null} />
			<CenterContent>
				<ContentComponent>{children}</ContentComponent>
			</CenterContent>
			<Footer />
		</Body>
	);
};

export default Layout;
