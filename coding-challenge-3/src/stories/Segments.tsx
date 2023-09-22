import React from 'react'
import { calculateDecimals, calculateDigits } from './CalcuateSegments.tsx'
import SegmentRender from './IndividualSegment.tsx'
import './segment.css'

// Return the 7 segments depending on the number of digits and number of decimals

interface ValueProps {
  value: number
  numberOfDigits: number
  numberOfDecimals: number
}

const Segments = ({ value, numberOfDigits, numberOfDecimals }: ValueProps) => {
  const digitSegments = calculateDigits(value, numberOfDigits)
  const decimalSegments = calculateDecimals(value, numberOfDecimals)

  return (
    <div className='segments-container'>
      {digitSegments.map((digit, index) => (
        <SegmentRender value={digit} key={index} />
      ))}
      <div>
        {numberOfDecimals ? <div className='dot'></div> : ''}
        <div className='decimal-array'>
          {decimalSegments.map((decimal, index) => (
            <SegmentRender value={decimal} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Segments
