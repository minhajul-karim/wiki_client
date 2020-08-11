import React, { Component } from 'react'
import Entry from './Entry'
import { EntriesConsumer, EntriesContext } from '../context/Context'

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