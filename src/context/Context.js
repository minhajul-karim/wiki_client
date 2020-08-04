import React, { Component, createContext } from 'react'

// Create a context
const EntriesContext = createContext()

// Create a provider
class EntriesProvider extends Component {
  constructor() {
    super()
    this.state = {
      entries: [],
      content: 'Loading...',
    }
  }

  getContent = (title) => {
    fetch(`http://localhost:8000/entries/${title}`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ content: response.content })
      })
  }

  componentDidMount = () => {
    fetch('http://localhost:8000/entries')
      .then((response) => response.json())
      .then((response) =>
        this.setState({
          entries: response.entries,
        })
      )
  }

  render() {
    return (
      <EntriesContext.Provider
        value={{
          ...this.state,
          getContent: this.getContent,
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
