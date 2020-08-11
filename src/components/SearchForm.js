import React, { Component } from 'react'
import { EntriesContext } from '../context/Context'

class SearchForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
    }
  }

  changeHandler = (event) => {
    this.setState({
      name: event.target.value,
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    const name = this.state.name
    console.log(`${window.location.origin}/search?name=${name}`)
    window.location.assign(`${window.location.origin}/search?name=${name}`)
    // fetch(`http://localhost:8000/api/entries/?name=${name}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.display) {
    //       window.location.assign(`${window.location.origin}/${data.display}`)
    //     } else if (data.entries) {
    //       console.log(data.entries)
    //       this.context.editEntries(data.entries)
    //     } else if (!data.page_exists) {
    //       console.log(`No page found`)
    //     }
    //   })
  }

  render() {
    return (
      <>
        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control search"
              placeholder="Search Encyclopedia"
              autoComplete="off"
              value={this.state.name}
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </>
    )
  }
}

SearchForm.contextType = EntriesContext

export default SearchForm
