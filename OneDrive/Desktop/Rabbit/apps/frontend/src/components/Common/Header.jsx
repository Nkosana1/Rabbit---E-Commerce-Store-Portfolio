import React from 'react'
import Topbar from '../Layout/Topbar'
import Navbar from './Navbar'

const Header = ({ onCartOpen }) => {
  return (
    <header className="border-b border-gray-200">
      {/* Topbar */}
      <Topbar />

      {/* Navbar */}
      <Navbar onCartOpen={onCartOpen} />
    </header>
  )
}

export default Header
