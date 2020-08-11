import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { EntriesContext } from '../Context'

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
    fetch(`http://localhost:8000/api/entries/?page=${name}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.display) {
          this.props.history.push(`/detail/${data.display}`)
        } else if (data.entries) {
          this.context.editEntries(data.entries)
          this.props.history.push(`/search/${name}`)
        } else if (!data.page_exists) {
          console.log(`No page found`)
        }
      })
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

export default withRouter(SearchForm)
