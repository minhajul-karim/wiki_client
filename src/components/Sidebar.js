import React from 'react'
import SearchForm from './SearchForm'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <Link to="/" className="brand">
        <h1 className="brand-name">Wiki</h1>
      </Link>
      <SearchForm />
      <Nav />
    </>
  )
}

export default Sidebar
