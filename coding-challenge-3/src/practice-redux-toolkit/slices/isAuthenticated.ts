import { createSlice } from '@reduxjs/toolkit'

type AuthenticationState = {
  isAuthenticated: boolean
}

const initialAuthState: AuthenticationState = {
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    isLogin(state) {
      state.isAuthenticated = true
    },
    isLogout(state) {
      state.isAuthenticated = false
    },
  },
})

export const AuthSliceAction = authSlice.actions

export default authSlice.reducer
