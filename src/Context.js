import React, { Component, createContext } from 'react'

// Create a context
const EntriesContext = createContext()

// Create a provider
class EntriesProvider extends Component {
  constructor() {
    super()
    this.state = {
      entries: [],
      content: {},
    }
  }

  // Get content of a given page
  getContent = (title) => {
    fetch(`http://localhost:8000/api/entries/${title}`)
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data)
          this.setState({ content: data })
        },
        () => console.log('Got content', this.state)
      )
  }

  // Edit list of entries
  editEntries = (entries) => {
    this.setState({
      entries: entries,
    })
  }

  // Get all available entries
  getAllEntries = () => {
    fetch('http://localhost:8000/api/entries')
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          entries: response.entries,
        })
      })
  }

  render() {
    return (
      <EntriesContext.Provider
        value={{
          ...this.state,
          getContent: this.getContent,
          getAllEntries: this.getAllEntries,
          editEntries: this.editEntries,
        }}
      >
        {this.props.children}
      </EntriesContext.Provider>
    )
  }
}

// Create a consumer
const EntriesConsumer = EntriesContext.Consumer

export { EntriesContext, EntriesProvider, EntriesConsumer }
