import React from 'react'
import Detail from './Detail'
import { Link } from 'react-router-dom'
import { EntriesConsumer } from '../context/Context'

const Entry = (props) => {
  return (
    <EntriesConsumer>
      {(context) => {
        return (
          <div>
            <Link to="/detail">
              <li onClick={() => context.getContent(props.name)}>
                {props.name}
              </li>
            </Link>
          </div>
        )
      }}
    </EntriesConsumer>
  )
}

export default Entry
