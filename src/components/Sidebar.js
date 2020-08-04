import React from 'react'
import Form from './Form'
import TopNav from './TopNav'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <Link to="/" className="brand">
        <h1>Wiki</h1>
      </Link>
      <Form />
      <TopNav />
    </>
  )
}

export default Sidebar
