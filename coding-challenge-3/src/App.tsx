import './App.css'
import React, { useState } from 'react'

function App() {
  const [addNum1, setAddNum1] = useState<number | string>('')
  const [addNum2, setAddNum2] = useState<number | string>('')
  const [addTogether, setAddTogether] = useState<number | string>('')

  const numbers: (number | string)[] = [addNum1, addNum2, addTogether]

  // Destructure the values and use parseInt to convert to numbers
  const [nums1, nums2, together] = numbers.map((value) =>
    typeof value === 'string' ? parseInt(value, 10) : value
  )

  const submitHandler = () => {
    if (typeof nums1 === 'number' && typeof nums2 === 'number') {
      const result = nums1 + nums2
      setAddTogether(result)
    } else {
      // Handle the case where one or both values couldn't be converted to numbers
      setAddTogether('Invalid input')
    }
  }

  return (
    <div className='App'>
      <input
        type='number' // Use type="number" to enforce numeric input
        value={addNum1}
        onChange={(e) => setAddNum1(e.target.value)}
      />
      <input
        type='number'
        value={addNum2}
        onChange={(e) => setAddNum2(e.target.value)}
      />
      <button onClick={submitHandler}>Submit</button>
      {typeof together === 'number' ? together : ''}
    </div>
  )
}

export default App
