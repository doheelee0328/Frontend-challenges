import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import authReducer from './isAuthenticated'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    isAuth: authReducer,
  },
})

export default store
