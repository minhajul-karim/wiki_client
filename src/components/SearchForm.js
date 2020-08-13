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
    const name = this.state.name,
      { pageFound, editEntries } = this.context
    fetch(`https://wiki-rest-api.herokuapp.com/api/entries/?page=${name}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.display) {
          pageFound(true)
          this.props.history.push(`/detail/${data.display}`)
        } else if (data.entries) {
          editEntries(data.entries)
          pageFound(true)
          this.props.history.push(`/search/${name}`)
        } else if (!data.page_exists) {
          pageFound(false)
          this.props.history.push(`/search/${name}`)
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
