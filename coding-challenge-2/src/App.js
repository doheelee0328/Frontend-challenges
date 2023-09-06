import './App.css'
import JobFeed from './Jobfeed'
import JobPost from './JobPost'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<JobFeed />}></Route>
      <Route path='/:jobPostId' element={<JobPost />}></Route>
    </Routes>
  )
}

export default App
