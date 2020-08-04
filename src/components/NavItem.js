import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = (props) => {
  return (
    <Link className="nav-link" to={props.destination}>
      {props.navText}
    </Link>
  )
}

export default NavItem
