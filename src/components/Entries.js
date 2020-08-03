import React, { Component } from 'react'
import Entry from './Entry'

class Entries extends Component {
  constructor() {
    super()
    this.state = {
      entries: [],
      content: 'This is the default content',
    }
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
      <div>
        <h1>Entries</h1>
        <hr />
        <ul>
          {this.state.entries.map((item) => (
            <Entry key={item} name={item} content={this.state.content} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Entries
