import { loop, Cmd } from 'redux-loop'
import xor from 'lodash/xor'
import { actionTypes } from './actions'
import * as Client from '../../client'

export const initialState = {
  initStarted: false,
  activeTaxonomyFilters: [],
}

export const update = (state, action) => {
  switch (action.type) {
    case '@@router/LOCATION_CHANGE':
      if (action.payload.isFirstRendering) {
        return loop(
          { ...state, initStarted: true },
          Cmd.run(Client.organizations.fetch(state.cache), {
            successActionCreator: Client.organizations.fetchSuccess,
            failActionCreator: Client.organizations.fetchFailed,
          })
        )
      }

      return state

    case actionTypes.UPDATE_TAXONOMY_FILTERS:
      return {
        ...state,
        activeTaxonomyFilters: xor(state.activeTaxonomyFilters, [
          action.taxonomy,
        ]),
      }

    default:
      return state
  }
}
