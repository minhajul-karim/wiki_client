import React, { Component } from 'react'

class CreateEntry extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      content: '#Your Awesome Title\nWrite in Markdown here',
    }

    this.changeHandler = this.changeHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  changeHandler = (event) => {
    const { name } = event.target
    this.setState({ [name]: event.target.value })
  }

  submitHandler = (event) => {
    event.preventDefault()
    console.log('Submitted')
  }

  render() {
    return (
      <div className="mt-2">
        <h1>Create a new entry</h1>
        <hr />
        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter title here"
              id="title"
              name="title"
              value={this.state.title}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              className="form-control"
              id="content"
              name="content"
              rows="10"
              value={this.state.content}
              onChange={this.changeHandler}
            >
              Write in Markdown here.
            </textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onSubmit={this.submitHandler}
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default CreateEntry
