import React from 'react'
import { useDispatch } from 'react-redux'
import { AuthSliceAction } from './slices/isAuthenticated.ts'

const Auth = () => {
  const dispatch = useDispatch()

  // const { isLogin } = AuthSliceAction

  const loginHandler = () => {
    dispatch(AuthSliceAction.isLogin())
  }

  return (
    <div>
      <input />
      <button onClick={loginHandler}>Login</button>
    </div>
  )
}

export default Auth
