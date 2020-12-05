import { loop, Cmd } from 'redux-loop'
import * as actions from './actions'
import * as Client from 'link-rest-client'

export const initialState = {}

export const update = (state, action) => {
  switch (action.type) {
    case actions.FETCH_ORGANIZATION:
      return loop(
        state,
        Cmd.run(Client.organization.fetch(state.cache, action.id), {
          successActionCreator: Client.organization.fetchSuccess,
          failActionCreator: Client.organization.fetchFailed
        })
      )
    default:
      return state
  }
}
