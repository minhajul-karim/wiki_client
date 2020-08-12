import React from 'react'
import { withRouter } from 'react-router-dom'

const Entry = (props) => {
  const { name } = props

  const clickHandler = () => {
    props.history.push(`/detail/${name}`)
  }

  return (
    <div>
      <li className="nav-item" onClick={clickHandler}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </li>
    </div>
  )
}

export default withRouter(Entry)
