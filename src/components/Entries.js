import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Entry from './Entry'
import { EntriesConsumer, EntriesContext } from '../Context'

class Entries extends Component {
  componentDidMount = () => {
    this.context.getAllEntries()
  }

  render() {
    return (
      <EntriesConsumer>
        {(context) => {
          const { entries } = context
          return (
            <div className="mt-2 entries">
              <h1>Entries</h1>
              <hr />
              <ul>
                {entries.map((item) => (
                  <Entry key={item} name={item} />
                ))}
              </ul>
            </div>
          )
        }}
      </EntriesConsumer>
    )
  }
}

Entries.contextType = EntriesContext

export default Entries
