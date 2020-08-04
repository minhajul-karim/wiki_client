import React from 'react'
import { EntriesConsumer } from '../context/Context'

const Detail = () => {
  function createMarkup(html) {
    return {
      __html: html,
    }
  }

  function Content(props) {
    return (
      <div
        className="mt-2"
        dangerouslySetInnerHTML={createMarkup(props.html)}
      />
    )
  }

  return (
    <EntriesConsumer>
      {(context) => {
        return <Content html={context.content} />
      }}
    </EntriesConsumer>
  )
}

export default Detail
