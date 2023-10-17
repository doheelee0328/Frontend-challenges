import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CounterSliceAction } from './slices/counter.ts'
import { AuthSliceAction } from './slices/isAuthenticated.ts'

const Counter = () => {
  const dispatch = useDispatch()
  const counterState = useSelector((state: any) => state.counter.counter)

  const { increment } = CounterSliceAction
  const { isLogout } = AuthSliceAction

  const counterStateHandler = () => {
    dispatch(increment())
  }

  const logoutHandler = () => {
    dispatch(isLogout())
  }

  return (
    <div>
      <div>{counterState}</div>
      <button onClick={counterStateHandler}>Click me</button>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  )
}

export default Counter
