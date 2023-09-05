import React, { useState } from 'react'
import StarsImage from '../../images/star.png'
import ColouredStarImage from '../../images/star-xxl.png'

import '../../sass/main.scss'

const Stars = () => {
  const [clicked, setClickedStars] = useState(false)

  return (
    <div>
      {clicked ? (
        <img
          src={ColouredStarImage}
          alt='coloured-stars'
          className='stars'
          onClick={() => setClickedStars(false)}
        />
      ) : (
        <img
          src={StarsImage}
          alt='stars'
          className='stars'
          onClick={() => setClickedStars(true)}
        />
      )}
    </div>
  )
}
export default Stars
