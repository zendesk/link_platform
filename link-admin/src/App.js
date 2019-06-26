import React, { Component } from 'react';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Provider as FelaProvider } from 'react-fela';
import { createRenderer } from 'fela';

import combinedReducer from './reducer'
import Landing from './pages/Landing';
//import './globalStyles.js'

const renderer = createRenderer();
const store = createStore(combinedReducer);

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <Provider store={store}>
          <FelaProvider renderer={renderer}>
            <Landing />
          </FelaProvider>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
