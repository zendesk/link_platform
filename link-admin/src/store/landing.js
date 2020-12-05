import { createSlice } from '@reduxjs/toolkit'
import xor from 'lodash/xor'

const slice = createSlice({
  name: 'landing',
  initialState: {
    initStarted: false,
    activeTaxonomyFilters: []
  },
  reducers: {
    updateTaxonomyFilters: (state, { payload }) => xor(state.activeTaxonomyFilters, [
      payload.taxonomy
    ])
  }
})

export default slice.reducer
export const { updateTaxonomyFilters } = slice.actions
