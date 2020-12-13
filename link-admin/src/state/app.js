import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'app',
  initialState: {
    sidebarOpen: false
  },
  reducers: {
    setSidebarOpen: (state, { payload }) => {
      state.sidebarOpen = payload
    }
  }
})

export default slice.reducer
export const { setSidebarOpen } = slice.actions
