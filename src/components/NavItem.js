import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = (props) => {
  return (
    <Link className="nav-link active" to={props.href}>
      {props.linkText}
    </Link>
  )
}

export default NavItem
