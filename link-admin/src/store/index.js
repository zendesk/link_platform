import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import app from './app'
import landing from './landing'
import organizations from './organizations'

const history = createBrowserHistory()

const reducer = combineReducers({
  router: connectRouter(history),
  app,
  landing,
  organizations
})

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(routerMiddleware(history))
})

export default store
export { history }
