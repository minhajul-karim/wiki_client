import React from 'react'
import NavItem from './NavItem'
import { Link } from 'react-router-dom'
import App from '../App'

const Topnav = () => {
  return (
    <nav className="nav flex-column mt-3">
      <a className="nav-link active" href="/">
        Home
      </a>
      <a className="nav-link" href="/create-new-page">
        Create a new page
      </a>
      <a className="nav-link" href="/random-page">
        Random page
      </a>
    </nav>
  )
}

export default Topnav
