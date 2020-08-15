import React from 'react'
import { withRouter, Link } from 'react-router-dom'

const Entry = (props) => {
  const { name } = props

  // Convert a name into title case
  const title = (name) => name.charAt(0).toUpperCase() + name.slice(1)

  return (
    <div>
      <Link to={`/wiki/${name}`}>
        <li className="nav-item">{title(name)}</li>
      </Link>
    </div>
  )
}

export default withRouter(Entry)
