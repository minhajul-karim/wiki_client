import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom'
import { EntriesContext, EntriesConsumer } from '../Context'

const Entry = (props) => {
  const { name } = props

  const context = useContext(EntriesContext)

  const clickHandler = () => {
    context.getContent(name)
    props.history.push(`detail/${name}`)
  }

  return (
    <EntriesConsumer>
      {(context) => {
        const url = `detail/${name}`
        return (
          <div>
            {/* <Link to={url}> */}
            <li onClick={clickHandler}>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </li>
            {/* </Link> */}
          </div>
        )
      }}
    </EntriesConsumer>
  )
}

export default withRouter(Entry)
