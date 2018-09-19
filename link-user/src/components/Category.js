import { h } from 'preact';
import Link from './Link';
import { createComponentWithProxy } from 'react-fela';
import icons from '../../icons/css/fontello.css';

const CategoryLink = createComponentWithProxy(
	() => (
		{
			backgroundColor: 'white',
			border: 'none',
			borderRadius: '4px',
			fontSize: '20px',
			textAlign: 'left',
			cursor: 'pointer',
			height: '57px',
			boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
			display: 'flex',
			alignItems: 'center',
			textDecoration: 'none',
			paddingLeft: '10px',
			color: '#333333'
		},
		(':active': {
			color: 'inherit'
		}),
		(':hover': {
			color: 'inherit'
		}),
		(':focus': {
			color: 'inherit'
		}),
		(':visited': {
			color: 'inherit'
		})
	),
	Link
);

const CategoryIcon = createComponentWithProxy(
	() => ({
		display: 'inline-block',
		textAlign: 'center',
		minWidth: '18px',
		margin: '0 5px'
	}),
	'i'
);

const Category = ({ name, iconClass }) => (
	<CategoryLink
		to="/locations"
		query={{ services: [name.toLowerCase()] }}
		aria-label={`Look for ${name} services`}
	>
		<CategoryIcon className={iconClass} />
		{name}
	</CategoryLink>
);

export default Category;
