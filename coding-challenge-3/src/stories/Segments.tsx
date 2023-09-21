import React from 'react'
import './segment.css'

// Return the 7 segments depending on the number of digits and number of decimals

interface ValueProps {
  value: number
  numberOfDigits: number
  numberOfDecimals: number
}

const digitValues = (value: number, numberOfDigits: number) => {
  const valuedString = value.toString()
  const digit = valuedString.split('.')[0]

  const digitNumber = digit.padStart(numberOfDigits, '0').split('')

  console.log(digitNumber)

  const shouldRenderDigits = numberOfDigits ? [...digitNumber] : []
  //

  return [...shouldRenderDigits]
}

const decimalValues = (value: number, numberOfDecimals: number) => {
  const valuedString = value.toString()
  const decimal = valuedString.split('.')[1]
  const decimalNumber = (decimal || '').padEnd(numberOfDecimals, '0').split('')

  const shouldRenderDecimals = numberOfDecimals ? [...decimalNumber] : []

  return [...shouldRenderDecimals]
}

const isSegmentVisible = (value: number, segment: number) => {
  const segmentTable = {
    0: [0, 1, 4, 6, 5, 2],
    1: [1, 4],
    2: [0, 1, 3, 5, 6],
    3: [0, 1, 3, 4, 6],
    4: [2, 3, 4, 1],
    5: [0, 2, 3, 4, 6],
    6: [0, 2, 3, 4, 5, 6],
    7: [0, 1, 4],
    8: [0, 1, 2, 3, 4, 5, 6],
    9: [0, 1, 2, 3, 4],
  }
  console.log(segmentTable[segment].includes(value))
  return segmentTable[segment].includes(value)

  // Check if the segment, which can be either 0 or 1, is visible for the given value
}

const Segments = ({ value, numberOfDigits, numberOfDecimals }: ValueProps) => {
  const digitSegments = digitValues(value, numberOfDigits)
  const decimalSegments = decimalValues(value, numberOfDecimals)

  console.log(digitSegments, decimalSegments)

  const renderDigit = (digit: number) => {
    return (
      <table key={digit}>
        <tbody>
          <tr>
            <td></td>
            <td
              className={
                isSegmentVisible(digit, 0)
                  ? 'segment-visible-horizontal'
                  : 'segment-hidden'
              }
            ></td>
            <td></td>
          </tr>
          <tr>
            <td
              className={
                isSegmentVisible(digit, 2)
                  ? 'segment-visible-vertical'
                  : 'segment-hidden'
              }
            ></td>
            <td></td>
            <td
              className={
                isSegmentVisible(digit, 1)
                  ? 'segment-visible-vertical'
                  : 'segment-hidden'
              }
            ></td>
          </tr>
          <tr>
            <td></td>
            <td
              className={
                isSegmentVisible(digit, 3)
                  ? 'segment-visible-horizontal'
                  : 'segment-hidden'
              }
            ></td>
            <td></td>
          </tr>
          <tr>
            <td
              className={
                isSegmentVisible(digit, 5)
                  ? 'segment-visible-vertical'
                  : 'segment-hidden'
              }
            ></td>
            <td></td>
            <td
              className={
                isSegmentVisible(digit, 4)
                  ? 'segment-visible-vertical'
                  : 'segment-hidden'
              }
            ></td>
          </tr>
          <tr>
            <td></td>
            <td
              className={
                isSegmentVisible(digit, 6)
                  ? 'segment-visible-horizontal'
                  : 'segment-hidden'
              }
            ></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    )
  }

  const renderDecimal = (decimal: number) => {
    return (
      <table key={decimal}>
        <tbody>
          <tr>
            <td></td>
            <td
              className={
                isSegmentVisible(decimal, 0)
                  ? 'segment-visible-horizontal'
                  : 'segment-hidden'
              }
            ></td>
            <td></td>
          </tr>
          <tr>
            <td
              className={
                isSegmentVisible(decimal, 2)
                  ? 'segment-visible-vertical'
                  : 'segment-hidden'
              }
            ></td>
            <td></td>
            <td
              className={
                isSegmentVisible(decimal, 1)
                  ? 'segment-visible-vertical'
                  : 'segment-hidden'
              }
            ></td>
          </tr>
          <tr>
            <td></td>
            <td
              className={
                isSegmentVisible(decimal, 3)
                  ? 'segment-visible-horizontal'
                  : 'segment-hidden'
              }
            ></td>
            <td></td>
          </tr>
          <tr>
            <td
              className={
                isSegmentVisible(decimal, 5)
                  ? 'segment-visible-vertical'
                  : 'segment-hidden'
              }
            ></td>
            <td></td>
            <td
              className={
                isSegmentVisible(decimal, 4)
                  ? 'segment-visible-vertical'
                  : 'segment-hidden'
              }
            ></td>
          </tr>
          <tr>
            <td></td>
            <td
              className={
                isSegmentVisible(decimal, 6)
                  ? 'segment-visible-horizontal'
                  : 'segment-hidden'
              }
            ></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    )
  }

  const digitArray = digitSegments.map(Number) // 21
  const decimalArray = decimalSegments.map(Number)

  // console.log(digitArray)

  return (
    <div className='segments-container'>
      {digitArray.map((digit) => renderDigit(digit))}
      <div>
        {numberOfDecimals ? <div className='dot'></div> : ''}
        <div className='decimal-array'>
          {decimalArray.map((digit) => renderDecimal(digit))}
        </div>
      </div>
    </div>
  )
}

export default Segments
