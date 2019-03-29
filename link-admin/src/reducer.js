import { createStore } from 'redux'
import { combineReducers, reduceReducers, install } from 'redux-loop'
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import * as Client from './client'
import * as Landing from './pages/Landing/reducer'

export const history = createBrowserHistory()

const initialState = {
  app: {
    cache: Client.init(),
    landing: Landing.initialState,
  },
}

const reducer = combineReducers({
  router: connectRouter(history),
  app: reduceReducers(Client.update, Landing.update),
})

export default createStore(reducer, initialState, install())
