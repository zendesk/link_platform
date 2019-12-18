import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { createRenderer } from 'fela';
import { RendererProvider } from 'preact-fela';

const renderer = createRenderer();

// Code-splitting is automated for pages
import AboutPage from '../pages/About';
import HomePage from '../pages/Home';
import LocationsPage from '../pages/Locations';
import LocationPage from '../pages/Location';
import TermsPage from '../pages/Terms';
import FeedbackPage from '../pages/Feedback';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<RendererProvider renderer={renderer}>
					<Router onChange={this.handleRoute}>
						<HomePage path="/" />
						<HomePage path="/categories/:params?" />
						<LocationPage path="/locations/:id" />
						<LocationsPage path="/locations/:params?" />
						<AboutPage path="/about" />
						<TermsPage path="/terms" />
						<FeedbackPage path="/feedback" />
					</Router>
				</RendererProvider>
			</div>
		);
	}
}
