import React from 'react'
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
  isToggled,
}: FamilyProps) => {
  return (
    <div>
      <h1 style={{ fontSize: `${fontSize}px` }}> {name}</h1>
      <p>{description && description}</p>
      {isToggled ? ( // Check if the item should be displayed
        <button onClick={openHandler}>Close</button>
      ) : (
        <a href='./dohee'>Go to {name}</a> // Use Link for navigation
      )}
    </div>
  )
}

export default DropdownItem
