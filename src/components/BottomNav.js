import React from 'react'

const BottomNav = () => {
  return (
    <nav className="nav flex-column">
      <a
        href="https://github.com/minhajul-karim/wiki_client"
        className="nav-link"
        target="_blank"
      >
        View code
      </a>
      <a
        href="https://github.com/minhajul-karim/wiki_client/issues"
        className="nav-link"
        target="_blank"
      >
        Report a bug
      </a>
    </nav>
  )
}

export default BottomNav
