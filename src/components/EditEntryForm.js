import React, { Component } from 'react'
import { withRouter, Prompt } from 'react-router-dom'

class EditEntryForm extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      content: '',
      titleError: '',
      contentError: '',
      formChanged: false,
    }

    this.changeHandler = this.changeHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  componentDidMount = () => {
    const title = window.location.pathname.slice(6)
    fetch(`http://localhost:8000/api/entries/${title}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          title: data.title,
          content: data.content,
        })
      })
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      formChanged: true,
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    const { title, content } = this.state

    // Validate name
    if (title.length === 0) {
      this.setState({ titleError: 'This field is empty' })
      return
    } else {
      this.setState({ titleError: '' })
    }

    // Validate content
    if (content.length === 0) {
      this.setState({ contentError: 'This field is empty' })
      return
    } else {
      this.setState({ contentError: '' })
    }

    fetch(`http://localhost:8000/api/entries/${title}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        content: content,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.file_updated) {
          // Go to the updated page
          let url = `/detail/${this.state.title}`.toLowerCase()
          this.props.history.push(url)
        } else {
          return Error('File can not be saved.')
        }
      })
  }

  render() {
    return (
      <div className="mt-2">
        <Prompt
          when={this.state.formChanged}
          message={(location, action) => {
            if (action === 'POP') {
              return "You haven't saved your changes."
            }
            return location.pathname.endsWith(
              `${this.state.title}`.toLowerCase()
            )
              ? true
              : 'Are you sure you want to leave?'
          }}
        />
        <h1>Edit page</h1>
        <hr />
        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name of your page"
              id="title"
              name="title"
              value={this.state.title}
              onChange={this.changeHandler}
              required
            />
            <small style={{ color: 'red' }}>{this.state.titleError}</small>
          </div>
          <div className="form-group">
            <label htmlFor="content">Markdown content</label>
            <textarea
              className="form-control"
              id="content"
              name="content"
              rows="10"
              value={this.state.content}
              onChange={this.changeHandler}
              required
            ></textarea>
            <small style={{ color: 'red' }}>{this.state.contentError}</small>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onSubmit={this.submitHandler}
          >
            Save
          </button>
        </form>
      </div>
    )
  }
}

export default withRouter(EditEntryForm)
