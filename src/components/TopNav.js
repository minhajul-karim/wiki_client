import React from 'react'

const Topnav = () => {
  return (
    <nav className="nav top-nav flex-column">
      <a className="nav-link active" href="/">
        Home
      </a>
      <a className="nav-link" href="/create-new-page">
        Create a new page
      </a>
      <a className="nav-link" href="/random-page">
        Random page
      </a>
      <a className="nav-link" href="/">
        View code
      </a>
      <a className="nav-link" href="/">
        Report a bug
      </a>
    </nav>
  )
}

export default Topnav
