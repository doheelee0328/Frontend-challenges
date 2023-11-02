import React from 'react'
import './dropdown.css'
// import { Link } from 'react-router-dom' // Import Link from react-router-dom

interface FamilyProps {
  name: string
  description?: string
  fontSize: number
  openHandler?: () => void
  isToggled?: boolean // Add a prop to indicate if the item is toggled
}

const DropdownItem = ({
  name,
  description,
  fontSize,
  openHandler,
}: FamilyProps) => {
  return (
    <div onClick={openHandler} className='container'>
      <h1 style={{ fontSize: `${fontSize}px` }}> {name}</h1>
      <p>{description && description}</p>
    </div>
  )
}

export default DropdownItem
