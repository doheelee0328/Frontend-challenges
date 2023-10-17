import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter.ts'
import authReducer from './isAuthenticated.ts'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    isAuth: authReducer,
  },
})

export default store
