import React, { useState } from 'react'
import * as Components from '../../components'

const Homepage = () => {
  const [clickedLength, setClickedLength] = useState(0)

  return (
    <div className='white-container'>
      <h1 className='question'>
        How many stars would you give to our Online Code Editors?
      </h1>
      <div className='star-container'>
        <Components.Stars
          setClickedLength={setClickedLength}
          clickedLength={clickedLength}
        />
        <Components.Stars
          setClickedLength={setClickedLength}
          clickedLength={clickedLength}
        />
        <Components.Stars
          setClickedLength={setClickedLength}
          clickedLength={clickedLength}
        />
        <Components.Stars
          setClickedLength={setClickedLength}
          clickedLength={clickedLength}
        />
        <Components.Stars
          setClickedLength={setClickedLength}
          clickedLength={clickedLength}
        />
      </div>
      <Components.Message clickedLength={clickedLength} />
    </div>
  )
}

export default Homepage
