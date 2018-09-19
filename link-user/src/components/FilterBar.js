import { h } from 'preact';
import { createComponent } from 'react-fela';

import ToggleButton from './ToggleButton';
import Link from './Link';

// Styles
const Container = createComponent(() => ({
	display: 'flex',
	alignItems: 'flex-end',
	borderBottom: '1px solid #DCDCDC',
	padding: '10px',
	backgroundColor: 'rgb(238, 238, 238)'
}));

const FilterOption = createComponent(() => ({
	display: 'flex',
	flexDirection: 'column'
}));

// Helpers
const getNewFilterQueryString = (queryString, showOpen) =>
	showOpen
		? `${queryString}&hours=open`
		: queryString.replace('&hours=open', '');

const getNewSortQueryString = (queryString, sortDist) =>
	sortDist ? `${queryString}&sort=dist` : queryString.replace('&sort=dist', '');

const FilterBar = ({ queryString, showOpen, sortDist }) => (
	<Container>
		<FilterOption>
			<Link
				to="/locations"
				replaceState
				queryString={getNewFilterQueryString(queryString, !showOpen)}
			>
				<ToggleButton
					visualOnly // <span> instead of <button> as we're in a <Link>
					label="Open now"
					enabled={showOpen}
				/>
			</Link>
		</FilterOption>
		<FilterOption>
			<Link
				to="/locations"
				replaceState
				queryString={getNewSortQueryString(queryString, !sortDist)}
			>
				<ToggleButton visualOnly label="Sort by distance" enabled={sortDist} />
			</Link>
		</FilterOption>
	</Container>
);

export default FilterBar;
