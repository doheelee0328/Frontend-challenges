import React, { useState } from 'react'
import Form from './form-validation/Form.tsx'
import './App.css'
// import JobFeed from './Jobfeed'
// import JobPost from './JobPost'
// import { Routes, Route } from 'react-router-dom'
// import Form from './typescript-practice/Form.tsx'

interface TodoState {
  todo: string[]
}

// if its both string and number use todo:(string | number)[]

function App() {
  const [state, setState] = useState<TodoState>({
    // this is how to compare
    todo: [],
  })

  const addTodo = (text: string) => {
    setState((prev) => ({
      ...prev,
      todo: [...prev.todo, text],
    }))
  }

  const removeTodo = (content: string) => {
    setState((prev) => ({
      ...prev,
      todo: state.todo.filter((todo) => todo !== content),
    }))
  }
  // since there is no id
  return (
    <>
      {/* <Routes>
        <Route path='/' element={<JobFeed />}></Route>
        <Route path='/:jobPostId' element={<JobPost />}></Route>
      </Routes> */}
      {/* <Form addTodo={addTodo} />

      {state.todo.map((el, index) => (
        <li onClick={() => removeTodo(el)} key={index}>
          {el}
        </li>
      ))} */}
      <Form />
    </>
  )
}

export default App
