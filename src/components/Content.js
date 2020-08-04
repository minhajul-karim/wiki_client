import React from 'react'

const Content = (props) => {
  return (
    <div className="mt-2" dangerouslySetInnerHTML={createMarkup(props.html)} />
  )
}

const createMarkup = (html) => {
  return {
    __html: html,
  }
}

export default Content
