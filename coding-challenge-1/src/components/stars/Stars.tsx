import React, { useState } from 'react'
import StarsImage from '../../images/star.png'
import ColouredStarImage from '../../images/star-xxl.png'

import '../../sass/main.scss'

const Stars = ({ setClickedLength, clickedLength }) => {
  const [clicked, setClickedStars] = useState(false)

  const setClickedStarsHandler = () => {
    setClickedStars(!clicked)
    setClickedLength(!clicked ? clickedLength + 1 : clickedLength - 1)
    console.log(clickedLength)
  }

  return (
    <div>
      {clicked ? (
        <img
          src={ColouredStarImage}
          alt='coloured-stars'
          className='stars'
          onClick={setClickedStarsHandler}
        />
      ) : (
        <img
          src={StarsImage}
          alt='stars'
          className='stars'
          onClick={setClickedStarsHandler}
        />
      )}
    </div>
  )
}
export default Stars
