import React from 'react'
import Detail from './Detail'
import { Link } from 'react-router-dom'

const Entry = (props) => {
  return (
    <div>
      <Link to="/detail">
        <li>{props.name}</li>
      </Link>
    </div>
  )
}

export default Entry
