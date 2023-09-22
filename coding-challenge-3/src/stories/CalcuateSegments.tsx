export const calculateDigits = (digit: number, numberOfDigits: number) => {
  if (numberOfDigits === 0) {
    return []
  }
  const digitString = digit.toString()
  const splitDigits = digitString.split('.')[0]
  const desiredDigits = splitDigits.padStart(numberOfDigits, '0').split('')
  const convertDigitToNumbers = desiredDigits.map(Number)
  return convertDigitToNumbers
}

export const calculateDecimals = (decimal: number, numberOfDecimal: number) => {
  if (numberOfDecimal === 0) {
    return []
  }
  const decimalString = decimal.toString()
  const splitDigits = decimalString.split('.')[1]
  const desiredDecimal = (splitDigits || '')
    .padEnd(numberOfDecimal, '0')
    .split('')
  const convertDecimalToNumbers = desiredDecimal.map(Number)
  return convertDecimalToNumbers
}
