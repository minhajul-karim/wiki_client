import React from 'react'
import NavItem from './NavItem'
import BottomNav from './BottomNav'
import RandomPage from './RandomPage'

const Topnav = () => {
  return (
    <nav className="nav top-nav flex-column">
      <NavItem destination="/" navText="Home" />
      <NavItem destination="/create-new-page" navText="Create a new page" />
      <RandomPage />
      <BottomNav />
    </nav>
  )
}

export default Topnav
