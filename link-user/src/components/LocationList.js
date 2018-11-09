import { h } from 'preact';
import { createComponent } from 'preact-fela';

// Local imports
import LocationRow from './LocationRow';

// Styles
const FlexColumn = createComponent(() => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-start'
}));

const LocationList = props => (
	<FlexColumn>{props.locations.map(LocationRow)}</FlexColumn>
);

export default LocationList;
