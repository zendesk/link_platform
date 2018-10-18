import xor from 'lodash/xor';
import { actionTypes } from './actions';

const defaultState = {
  activeTaxonomyFilters: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_TAXONOMY_FILTERS:
      return {
        ...state, activeTaxonomyFilters: xor(state.activeTaxonomyFilters, [action.taxonomy])
      };
    default:
      return state;
  }
};

export { defaultState };
export default reducer;
