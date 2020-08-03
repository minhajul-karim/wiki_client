import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div>
        <form action="" method="POST">
          <input
            className="search"
            type="text"
            name="q"
            placeholder="Search Encyclopedia"
            autoComplete="off"
          />
        </form>
      </div>
    )
  }
}

export default Form
