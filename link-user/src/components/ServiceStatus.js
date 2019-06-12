import { h } from 'preact';
import { createComponent } from 'preact-fela';


// Styles
const ServiceStatusText = createComponent(({ isOpen }) => ({
	color: isOpen ? '#468847' : '#b94a48'
}));

const ServiceStatus = props => {
	const isServiceOpen = true; // TODO: filter in JS
	const openOrClosed = isServiceOpen ? 'open' : 'closed';

	return (
		<ServiceStatusText isOpen={isServiceOpen}>{openOrClosed}</ServiceStatusText>
	);
};

export default ServiceStatus;
