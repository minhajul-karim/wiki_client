import React from 'react'
import { withRouter } from 'react-router-dom'

const Entry = (props) => {
  const { name } = props

  const clickHandler = () => {
    props.history.push(`/detail/${name}`)
  }

  // Convert a name into title case
  const title = (name) => name.charAt(0).toUpperCase() + name.slice(1)

  return (
    <div>
      <li className="nav-item" onClick={clickHandler}>
        {title(name)}
      </li>
    </div>
  )
}

export default withRouter(Entry)
