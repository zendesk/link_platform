import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Client, { STATUS } from 'link-rest-client/api'

export const loginAdmin = createAsyncThunk('admins/login', async ({ email, password }) => {
  const response = await Client.loginAdmin(email, password)
  console.log({ response })
  return { data: response.data.data, headers: response.headers }
})

export const logoutAdmin = createAsyncThunk('admins/logout', async () => {
  const response = await Client.logoutAdmin()
  return response.data
})

export const validateToken = createAsyncThunk('admins/validateToken', async () => {
  const data = {};
  ['access-token', 'token-type', 'client', 'expiry', 'uid'].forEach(key => {
    data[key] = localStorage.getItem(key)
  })
  const response = await Client.validateToken(data)
  return response
})

const slice = createSlice({
  name: 'auth',
  initialState: {
    admin: false
  },
  reducers: {
  },
  extraReducers: {
    [loginAdmin.pending]: state => {
      state.status = STATUS.LOADING
    },
    [loginAdmin.fulfilled]: (state, { payload }) => {
      ['access-token', 'token-type', 'client', 'expiry', 'uid'].forEach(key => {
        localStorage.setItem(key, payload.headers[key])
      })
      state.status = STATUS.SUCCESS
      state.admin = payload.data
    },
    [loginAdmin.rejected]: (state, { error }) => {
      state.status = STATUS.ERROR
      state.error = error.message
    },

    [logoutAdmin.pending]: state => {
      state.status = STATUS.LOADING
    },
    [logoutAdmin.fulfilled]: state => {
      ['access-token', 'client', 'etag', 'expiry'].forEach(key => {
        localStorage.removeItem(key)
      })
      state.status = STATUS.SUCCESS
      state.admin = false
    },
    [logoutAdmin.rejected]: (state, { error }) => {
      state.status = STATUS.ERROR
      state.error = error.message
    },

    [validateToken.pending]: state => {
      state.status = STATUS.LOADING
    },
    [validateToken.fulfilled]: (state, { payload }) => {
      state.status = STATUS.SUCCESS
      console.log({ payload })
      // state.admin = payload.data
    },
    [validateToken.rejected]: (state, { error }) => {
      state.status = STATUS.ERROR
      state.error = error.message
    }
  }
})

export default slice.reducer
// export const { } = slice.actions
