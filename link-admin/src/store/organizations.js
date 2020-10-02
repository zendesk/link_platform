import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Client, { STATUS } from 'link-rest-client/api'

export const fetchOrganizations = createAsyncThunk('organizations/fetchOrganizations', async () => {
	const response = await Client.fetchOrganizations()
	return response.data
})

export const fetchOrganization = createAsyncThunk('organizations/fetchOrganization', async orgId => {
	const response = await Client.fetchOrganization(orgId)
	return response.data
})

const slice = createSlice({
	name: 'organizations',
	initialState: {
		status: STATUS.IDLE,
		data: [],
		error: null
	},
	reducers: {
		
	},
	extraReducers: {
		[fetchOrganizations.pending]: state => {
			state.status = STATUS.LOADING
		},
		[fetchOrganizations.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESS
			state.data = Object.assign(state.data, payload)
		},
		[fetchOrganizations.rejected]: (state, { error }) => {
			state.status = STATUS.ERROR
			state.error = error.message
		},

		[fetchOrganization.pending]: state => {
			state.status = STATUS.LOADING
		},
		[fetchOrganization.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESS
			state.data = Object.assign(state.data, [payload])
		},
		[fetchOrganization.rejected]: (state, { error }) => {
			state.status = STATUS.ERROR
			state.error = error.message
		}
	}
})

export default slice.reducer
// export const {  } = slice.actions
