import { useState } from 'react'

const Counter = ({ label }) => {
  const [click, setClick] = useState(false)
  return (
    <>
      <p>{!click ? 'It has not been clicked' : 'it has been clicked'}</p>

      <button onClick={() => setClick(true)}>{label}</button>
    </>
  )
}

export default Counter
