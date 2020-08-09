import React, { Component } from 'react'

class SearchForm extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <>
        <form action="" method="POST">
          <div className="form-group">
            <input
              type="text"
              name="q"
              className="form-control search"
              placeholder="Search Encyclopedia"
              autoComplete="off"
            />
          </div>
        </form>
      </>
    )
  }
}

export default SearchForm
