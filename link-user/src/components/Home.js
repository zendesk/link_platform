import { h } from 'preact';
import { createComponent } from 'preact-fela';

import CategoryList from './CategoryList';

const Spacer = createComponent(() => ({
	height: '10px'
}));

const TaxonomyListContainer = createComponent(() => ({
	display: 'flex',
	flexDirection: 'column',
	flexWrap: 'nowrap',
	padding: '0 14px'
}));

const Title = createComponent(
	() => ({
		textAlign: 'center',
		fontSize: '15px',
		letterSpacing: '0.6pt',
		color: 'rgb(51, 51, 51)',
		margin: '0',
		marginBottom: '20pt'
	}),
	'p'
);

const Home = ({ categories }) => (
	<div>
		<Spacer />
		<TaxonomyListContainer>
			<Title>What service are you looking for?</Title>
			<CategoryList categories={categories} />
		</TaxonomyListContainer>
	</div>
);

export default Home;
