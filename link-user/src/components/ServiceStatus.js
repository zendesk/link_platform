import { h } from 'preact';
import { createComponent } from 'preact-fela';
import { isOpen } from '../../lib/filterLocations';


// Styles
const ServiceStatusText = createComponent(({ isOpen }) => ({
	color: isOpen ? '#468847' : '#b94a48'
}));

const ServiceStatus = props => {
	const isServiceOpen = isOpen(props.services);
	const openOrClosed = isServiceOpen ? 'open' : 'closed';

	return (
		<ServiceStatusText isOpen={isServiceOpen}>{openOrClosed}</ServiceStatusText>
	);
};

export default ServiceStatus;
