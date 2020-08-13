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
      pageExists: false,
    }
  }

  // Get content of a given page
  getContent = (title) => {
    fetch(`https://wiki-rest-api.herokuapp.com/api/entries/${title}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ content: data })
      })
  }

  // Edit list of entries
  editEntries = (entries) => {
    this.setState({
      entries: entries,
    })
  }

  // Get all available entries
  getAllEntries = () => {
    fetch('https://wiki-rest-api.herokuapp.com/api/entries')
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          entries: response.entries,
        })
      })
  }

  pageFound = (status) => {
    this.setState({ pageExists: status })
  }

  render() {
    return (
      <EntriesContext.Provider
        value={{
          ...this.state,
          getContent: this.getContent,
          getAllEntries: this.getAllEntries,
          editEntries: this.editEntries,
          pageFound: this.pageFound,
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
