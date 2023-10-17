import React from 'react'
import { useSelector } from 'react-redux'
import Counter from './practice-redux-toolkit/Counter.tsx'
import Auth from './practice-redux-toolkit/Auth.tsx'

function App() {
  const authState = useSelector((state: any) => state.isAuth.isAuthenticated)
  return <div className='App'>{authState ? <Counter /> : <Auth />}</div>
}

export default App
