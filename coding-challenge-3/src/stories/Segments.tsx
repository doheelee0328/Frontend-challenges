import React from 'react'
import './segment.css'

// Return the 7 segments depending on the number of digits and number of decimals

interface ValueProps {
  value: number
  numberOfDigits: number
  numberOfDecimals: number
}

const formattedValues = (
  value: number,
  numberOfDigits: number,
  numberOfDecimals: number
) => {
  const format = value.toFixed(numberOfDecimals)
  const valuedString = format.toString()
  const [digit, decimal] = valuedString.split('.')

  const digitNumber = digit.padStart(numberOfDigits, '0')
  const decimalNumber = (decimal || '').padEnd(numberOfDecimals, '0')

  return [digitNumber, decimalNumber]
}

const isSegmentVisible = (segment: number, value: number) => {
  const segmentTable = {
    0: [0],
    1: [1, 4],
    2: [5],
    3: [0, 1, 3, 4, 6],
    4: [2, 1, 3, 4],
    5: [0, 2, 3, 4, 6],
    6: [0, 2, 3, 4, 5, 6],
    7: [0, 1, 4],
    8: [0, 1, 2, 3, 4, 5, 6],
    9: [0, 1, 2, 3, 4],
  }
  return segmentTable[segment].includes(value)
  // Check if the segment, which can be either 0 or 1, is visible for the given value
}

const Segments = ({ value, numberOfDecimals, numberOfDigits }: ValueProps) => {
  const [digitSegments, decimalSegments] = formattedValues(
    value,
    numberOfDigits,
    numberOfDecimals
  )

  const renderDigit = (digit: number) => {
    return (
      <table key={digit}>
        <tbody>
          <tr>
            <td></td>
            <td
              className={
                isSegmentVisible(0, digit)
                  ? 'segment-visible-horizontal'
                  : 'segment-hidden'
              }
            ></td>
            <td></td>
          </tr>
          <tr>
            <td
              className={
                isSegmentVisible(1, digit)
                  ? 'segment-visible-vertical'
                  : 'segment-hidden'
              }
            ></td>
            <td></td>
            <td
              className={
                isSegmentVisible(2, digit)
                  ? 'segment-visible-vertical'
                  : 'segment-hidden'
              }
            ></td>
          </tr>
          <tr>
            <td></td>
            <td
              className={
                isSegmentVisible(3, digit)
                  ? 'segment-visible-horizontal'
                  : 'segment-hidden'
              }
            ></td>
            <td></td>
          </tr>
          <tr>
            <td
              className={
                isSegmentVisible(5, digit)
                  ? 'segment-visible-vertical'
                  : 'segment-hidden'
              }
            ></td>
            <td></td>
            <td
              className={
                isSegmentVisible(4, digit)
                  ? 'segment-visible-vertical'
                  : 'segment-hidden'
              }
            ></td>
          </tr>
          <tr>
            <td></td>
            <td
              className={
                isSegmentVisible(6, digit)
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
                isSegmentVisible(0, decimal)
                  ? 'segment-visible-horizontal'
                  : 'segment-hidden'
              }
            ></td>
            <td></td>
          </tr>
          <tr>
            <td
              className={
                isSegmentVisible(2, decimal)
                  ? 'segment-visible-vertical'
                  : 'segment-hidden'
              }
            ></td>
            <td></td>
            <td
              className={
                isSegmentVisible(1, decimal)
                  ? 'segment-visible-vertical'
                  : 'segment-hidden'
              }
            ></td>
          </tr>
          <tr>
            <td></td>
            <td
              className={
                isSegmentVisible(3, decimal)
                  ? 'segment-visible-horizontal'
                  : 'segment-hidden'
              }
            ></td>
            <td></td>
          </tr>
          <tr>
            <td
              className={
                isSegmentVisible(5, decimal)
                  ? 'segment-visible-vertical'
                  : 'segment-hidden'
              }
            ></td>
            <td></td>
            <td
              className={
                isSegmentVisible(4, decimal)
                  ? 'segment-visible-vertical'
                  : 'segment-hidden'
              }
            ></td>
          </tr>
          <tr>
            <td></td>
            <td
              className={
                isSegmentVisible(6, decimal)
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

  const digitArray = digitSegments.split('').map(Number)
  const decimalArray = decimalSegments.split('').map(Number)

  return (
    <div>
      {digitSegments === '0'
        ? ''
        : digitArray.map((digit) => renderDigit(digit))}
      {decimalSegments === '0' ? (
        ''
      ) : (
        <>
          <div>.</div>
          {decimalArray.map((decimal) => renderDecimal(decimal))}
        </>
      )}
    </div>
  )
}

export default Segments
