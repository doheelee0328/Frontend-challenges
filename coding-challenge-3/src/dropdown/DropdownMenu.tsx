import React, { useState } from 'react'
import DropdownItem from './DropdownItem.tsx'

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='items-container'>
      <DropdownItem
        name='family name'
        description='these are my family names'
        fontSize={20}
        openHandler={toggleDropdown}
      />
      <div className={`item-container ${isOpen ? 'visibility' : 'hidden'}`}>
        <DropdownItem name='dohee' fontSize={15} />
        <DropdownItem name='juhee' fontSize={15} />
        <DropdownItem name='paul' fontSize={15} />
        <DropdownItem name='amy' fontSize={15} />
      </div>
    </div>
  )
}

export default DropdownMenu
