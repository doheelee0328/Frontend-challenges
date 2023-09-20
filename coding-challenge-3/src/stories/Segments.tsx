import React from 'react'
import './segment.css'

interface ValueProps {
  value: number
}

const isSegmentVisible = (segment: number, value: number) => {
  const segmentTable = {
    0: [0, 2, 5, 6, 4, 1],
    1: [1, 4],
    2: [0, 1, 3, 5, 6],
    3: [0, 1, 3, 4, 6],
    4: [2, 1, 3, 4],
    5: [0, 2, 3, 4, 6],
    6: [0, 2, 3, 4, 5, 6],
    7: [0, 1, 4],
    8: [0, 1, 2, 3, 4, 5, 6],
    9: [0, 1, 2, 3, 4],
  }
  return segmentTable[value].includes(segment)
  // if the segment which can be either 1 has
}

const Segments = ({ value }: ValueProps) => {
  return (
    <table>
      <tbody>
        <tr>
          <td></td>
          <td
            className={
              isSegmentVisible(0, value)
                ? 'segment-visible-horizontal'
                : 'segment-hidden'
            }
          ></td>
          <td></td>
        </tr>
        <tr>
          <td
            className={
              isSegmentVisible(2, value)
                ? 'segment-visible-vertical'
                : 'segment-hidden'
            }
          ></td>
          <td></td>
          <td
            className={
              isSegmentVisible(1, value)
                ? 'segment-visible-vertical'
                : 'segment-hidden'
            }
          ></td>
        </tr>
        <tr>
          <td></td>
          <td
            className={
              isSegmentVisible(3, value)
                ? 'segment-visible-horizontal'
                : 'segment-hidden'
            }
          ></td>
          <td></td>
        </tr>
        <tr>
          <td
            className={
              isSegmentVisible(5, value)
                ? 'segment-visible-vertical'
                : 'segment-hidden'
            }
          ></td>
          <td></td>
          <td
            className={
              isSegmentVisible(4, value)
                ? 'segment-visible-vertical'
                : 'segment-hidden'
            }
          ></td>
        </tr>
        <tr>
          <td></td>
          <td
            className={
              isSegmentVisible(6, value)
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

export default Segments
