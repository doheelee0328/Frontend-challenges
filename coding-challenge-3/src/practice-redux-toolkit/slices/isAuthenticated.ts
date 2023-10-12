import { createSlice } from '@reduxjs/toolkit'

type AuthenticationState = {
  isAuthenticated: boolean
}

const initialAuthrState: AuthenticationState = {
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthrState,
  reducers: {
    isLogin(state) {
      state.isAuthenticated = true
    },
    isLogout(state) {
      state.isAuthenticated = false
    },
  },
})

export const CounterSliceAction = authSlice.actions

export default authSlice.reducer
