import React, { useState } from 'react'
import DropdownItem from './DropdownItem.tsx'

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <DropdownItem
        name='family name'
        description='these are my family names'
        fontSize={20}
        openHandler={toggleDropdown}
        isToggled={isOpen} // Pass the isOpen state to the first item
      />
      {isOpen && (
        <>
          <DropdownItem name='dohee' fontSize={15} />
          <DropdownItem name='juhee' fontSize={15} />
          <DropdownItem name='paul' fontSize={15} />
          <DropdownItem name='amy' fontSize={15} />
        </>
      )}
    </>
  )
}

export default DropdownMenu
