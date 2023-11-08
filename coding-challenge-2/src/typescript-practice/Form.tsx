import React, { useState, useRef } from 'react'

const Form = (props: { addTodo: (text: string) => void }) => {
  const formUseRef = useRef<HTMLInputElement>(null)

  // htmlInputElement - special properties and methods for manipulating the options, layout and presentations for <input> elements

  const [state, setState] = useState({
    input: '',
  })

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({ ...prev, input: event.target.value }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    // const enteredText = formUseRef.current!.value

    props.addTodo(state.input)
  }
  // when the handlesubmit is called formuseRef will be connect to an element
  // the function will be called when the form is submitted after this ref is connected
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='text'>Todo</label>
      <input type='text' onChange={inputHandler} ref={formUseRef} />
      {/* typescript needs too knpw what this is */}
      <button>Add Todo</button>
    </form>
  )
}

export default Form
