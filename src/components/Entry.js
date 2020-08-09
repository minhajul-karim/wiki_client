import React from 'react'
import { Link } from 'react-router-dom'
import { EntriesConsumer } from '../context/Context'

const Entry = (props) => {
  const { name } = props
  return (
    <EntriesConsumer>
      {(context) => {
        const url = `/${name}`
        return (
          <div>
            <Link to={url}>
              <li onClick={() => context.getContent(name)}>
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </li>
            </Link>
          </div>
        )
      }}
    </EntriesConsumer>
  )
}

export default Entry
