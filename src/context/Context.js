import React, { Component, createContext } from 'react'

// Create a context
const EntriesContext = createContext()

// Create a provider
class EntriesProvider extends Component {
  constructor() {
    super()
    this.state = {
      entries: [],
      content: 'This is the default content',
    }
  }

  getContent = (title) => {
    fetch(`http://localhost:8000/wikis/${title}`)
      .then((response) => response.json())
      .then((response) => this.setState(response))
  }

  componentDidMount = () => {
    fetch('http://localhost:8000/wikis')
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

export { EntriesProvider, EntriesConsumer }
