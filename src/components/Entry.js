import React from 'react'
import { withRouter, Link } from 'react-router-dom'

const Entry = (props) => {
  const { name } = props

  const clickHandler = () => {
    props.history.push(`/detail/${name}`)
  }

  // Convert a name into title case
  const title = (name) => name.charAt(0).toUpperCase() + name.slice(1)

  return (
    <div>
      <Link to={`/detail/${name}`}>
        <li className="nav-item">{title(name)}</li>
      </Link>
    </div>
  )
}

export default withRouter(Entry)
