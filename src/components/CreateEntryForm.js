import React, { Component } from 'react'
import { withRouter, Prompt } from 'react-router-dom'

class CreateEntryForm extends Component {
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
    this.getCookie = this.getCookie.bind(this)
  }

  changeHandler = (event) => {
    const { name } = event.target
    this.setState({
      [name]: event.target.value,
      formChanged: true,
    })
  }

  submitHandler = (event) => {
    event.preventDefault()

    // Validate name
    if (this.state.title.length === 0) {
      this.setState({ titleError: 'This field is empty' })
      return
    } else {
      this.setState({ titleError: '' })
    }

    // Validate content
    if (this.state.content.length === 0) {
      this.setState({ contentError: 'This field is empty' })
      return
    } else {
      this.setState({ contentError: '' })
    }

    fetch('http://localhost:8000/api/entries/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': this.getCookie('csrftoken'),
      },
      body: JSON.stringify({
        title: this.state.title,
        content: this.state.content,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.page_exists) {
          this.setState({ titleError: 'Page already exists' })
          return
        } else {
          // Go to new page
          this.props.history.push(`/detail/${this.state.title}`)
        }
      })
  }

  getCookie = (name) => {
    let cookieValue = null
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';')
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim()
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === name + '=') {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
          break
        }
      }
    }
    return cookieValue
  }

  render() {
    return (
      <div className="mt-2">
        <Prompt
          when={this.state.formChanged}
          message="You haven't saved your changes"
        />
        <h1>Create a new page</h1>
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
            ></textarea>
            <small style={{ color: 'red' }}>{this.state.contentError}</small>
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

export default withRouter(CreateEntryForm)
