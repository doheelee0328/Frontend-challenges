import React from 'react'
import * as Components from '../../components'

const Homepage = () => {
  return (
    <div className='white-container'>
      <h1 className='question'>
        How many stars would you give to our Online Code Editors?
      </h1>
      <div className='star-container'>
        <Components.Stars />
        <Components.Stars />
        <Components.Stars />
        <Components.Stars />
        <Components.Stars />
      </div>
      <p></p>
    </div>
  )
}

export default Homepage
