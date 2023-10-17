import React, { useState } from 'react'

const Practice = () => {
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
  const addNumbers = (num1: number, num2: number, printResult: boolean) => {
    if (printResult) {
      console.log(num1 + num2)
      console.log('1')
      // output immediately
    } else {
      return num1 + num2
    }
  }

  // types

  const number1 = 5 // "number"
  const number2 = 5 // "number"
  const printResult = true // boolean
  const result = addNumbers(number1, number2, printResult)

  return (
    <>
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
    </>
  )
}

export default Practice
