import React, { Component, createContext } from 'react'

// Create a context
const EntriesContext = createContext()

// Create a provider
class EntriesProvider extends Component {
  constructor() {
    super()
    this.state = {
      entries: [],
      content: {
        title: '',
        content: '<p>Loading...</p>',
      },
    }
  }

  getContent = (title) => {
    fetch(`http://localhost:8000/api/entries/${title}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ content: data })
      })
  }

  editEntries = (entries) => {
    this.setState({
      entries: entries,
    })
  }

  getAllEntries = () => {
    fetch('http://localhost:8000/api/entries')
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          entries: response.entries,
        })
      })
  }

  // getSpecificEntries = (searchTerm) => {
  //   fetch(`http://localhost:8000/api/entries/?name=${searchTerm}`)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       this.setState({
  //         entries: response.entries,
  //       })
  //     })
  // }

  componentDidMount = () => {
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
          editEntries: this.editEntries,
          getAllEntries: this.getAllEntries,
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
