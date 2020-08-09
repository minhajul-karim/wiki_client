import React from 'react'
import NavItem from './NavItem'
import BottomNav from './BottomNav'
import RandomPage from './RandomPage'

const Nav = () => {
  return (
    <nav className="nav top-nav flex-column">
      <NavItem destination="/" navText="Home" />
      <NavItem destination="/create" navText="Create a new page" />
      <RandomPage />
      <BottomNav />
    </nav>
  )
}

export default Nav
