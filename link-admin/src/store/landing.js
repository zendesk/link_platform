import { createSlice } from '@reduxjs/toolkit'
import { xor } from 'lodash'

const slice = createSlice({
  name: 'landing',
  initialState: {
    initStarted: false,
    activeTaxonomyFilters: [],
    searchFilter: ''
  },
  reducers: {
    updateTaxonomyFilters: (state, { payload }) => {
      state.activeTaxonomyFilters = xor(state.activeTaxonomyFilters, [
        payload
      ])
    },
    updateSearchFilter: (state, { payload }) => {
      state.searchFilter = payload
    }
  }
})

export default slice.reducer
export const { updateTaxonomyFilters, updateSearchFilter } = slice.actions
