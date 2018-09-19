import { h } from 'preact';
import s from './CategoryList.css';
import Category from './Category';
import { createComponent } from 'react-fela';
import icons from '../../icons/css/fontello.css';

const Container = createComponent(() => ({
	display: 'flex',
	flexDirection: 'column',
	flexWrap: 'nowrap'
}));

const CategorySpacer = createComponent(() => ({
	height: '10px'
}));

const CategoryList = props => (
	<Container title="Services" className={`${s.taxonomies}`}>
		{props.categories.map((category, i) => (
			<div key={`category-${i}`}>
				<Category
					id={category.id}
					iconClass={category.icon}
					name={category.name}
				/>
				<CategorySpacer />
			</div>
		))}
	</Container>
);

export default CategoryList;
