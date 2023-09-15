const Practice = () => {
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
}

export default Practice
