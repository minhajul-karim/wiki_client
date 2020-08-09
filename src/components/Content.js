import React from 'react'
import CreateEntry from './CreateEntry'
import EditEntry from './EditEntry'
import { Link } from 'react-router-dom'

const Content = (props) => {
  return (
    <>
      <div
        className="mt-2 content"
        dangerouslySetInnerHTML={createMarkup(props.html)}
      />
    </>
  )
}

const createMarkup = (html) => {
  return {
    __html: html,
  }
}

export default Content
