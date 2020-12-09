import { createSlice } from '@reduxjs/toolkit'
import { xor } from 'lodash'

const slice = createSlice({
  name: 'landing',
  initialState: {
    initStarted: false,
    activeTaxonomyFilters: []
  },
  reducers: {
    updateTaxonomyFilters: (state, { payload }) => {
      state.activeTaxonomyFilters = xor(state.activeTaxonomyFilters, [
        payload
      ])
    }
  }
})

export default slice.reducer
export const { updateTaxonomyFilters } = slice.actions
