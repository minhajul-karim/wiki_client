import React, { Component } from 'react'
import { EntriesContext, EntriesConsumer } from '../context/Context'

class EditEntryForm extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      content: '',
      titleError: '',
      contentError: '',
    }

    this.changeHandler = this.changeHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  componentDidMount = () => {
    const context = this.context,
      title = window.location.pathname.slice(1, -5)
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
        console.log(data)
        if (data.file_updated) {
          window.location.assign(`${window.location.origin}/${title}`)
        } else {
          return Error('File can not be saved.')
        }
      })
  }

  render() {
    return (
      <EntriesConsumer>
        {(context) => {
          return (
            <div className="mt-2">
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
                  <small style={{ color: 'red' }}>
                    {this.state.titleError}
                  </small>
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
                  <small style={{ color: 'red' }}>
                    {this.state.contentError}
                  </small>
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
        }}
      </EntriesConsumer>
    )
  }
}

EditEntryForm.contextType = EntriesContext

export default EditEntryForm
