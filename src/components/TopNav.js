import React from 'react'
import NavItem from './NavItem'
import BottomNav from './BottomNav'

const Topnav = () => {
  return (
    <nav className="nav top-nav flex-column">
      <NavItem destination="/" navText="Home" />
      <NavItem destination="/create-new-page" navText="Create a new page" />
      <NavItem destination="/random-page" navText="Random page" />
      <BottomNav />
    </nav>
  )
}

export default Topnav
