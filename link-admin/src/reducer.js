import { createStore } from 'redux'
import { combineReducers, reduceReducers, install } from 'redux-loop'
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import * as Client from 'link-rest-client'
import * as Landing from './pages/Landing/reducer'
import * as Organization from './pages/Organization/reducer'

export const history = createBrowserHistory()

const initialState = {
  app: {
    cache: Client.init(),
    landing: Landing.initialState,
    organization: Organization.initialState,
  },
}

const reducer = combineReducers({
  router: connectRouter(history),
  app: reduceReducers(Client.update, Landing.update, Organization.update),
})

export default createStore(reducer, initialState, install())
