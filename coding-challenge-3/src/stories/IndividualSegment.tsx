import React from 'react'

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

  return segmentTable[value].includes(segment)

  // Check if the segment, which can be either 0 or 1, is visible for the given value
}

const IndividualSegment = (props: { value: number }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td></td>
          <td
            className={
              isSegmentVisible(props.value, 0)
                ? 'segment-visible-horizontal'
                : 'segment-hidden'
            }
          ></td>
          <td></td>
        </tr>
        <tr>
          <td
            className={
              isSegmentVisible(props.value, 2)
                ? 'segment-visible-vertical'
                : 'segment-hidden'
            }
          ></td>
          <td></td>
          <td
            className={
              isSegmentVisible(props.value, 1)
                ? 'segment-visible-vertical'
                : 'segment-hidden'
            }
          ></td>
        </tr>
        <tr>
          <td></td>
          <td
            className={
              isSegmentVisible(props.value, 3)
                ? 'segment-visible-horizontal'
                : 'segment-hidden'
            }
          ></td>
          <td></td>
        </tr>
        <tr>
          <td
            className={
              isSegmentVisible(props.value, 5)
                ? 'segment-visible-vertical'
                : 'segment-hidden'
            }
          ></td>
          <td></td>
          <td
            className={
              isSegmentVisible(props.value, 4)
                ? 'segment-visible-vertical'
                : 'segment-hidden'
            }
          ></td>
        </tr>
        <tr>
          <td></td>
          <td
            className={
              isSegmentVisible(props.value, 6)
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

export default IndividualSegment
