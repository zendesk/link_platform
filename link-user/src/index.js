import { render } from 'preact';
import { createRenderer } from 'fela';
import { Provider } from 'preact-fela';

import HomePage from './pages/Home';

const renderer = createRenderer();

render(
	<Provider renderer={renderer}>
		<HomePage />
	</Provider>,
	document.body
);
