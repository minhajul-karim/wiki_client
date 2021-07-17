import React, { Component } from 'react'
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
          console.log(entries)
          return (
            <div className="mt-2 entries">
              <h1>Entries</h1>
              <hr />
              <ul>
                {
                  entries.length > 0 ? (
                    entries.map((item) => (
                      <Entry key={item} name={item} />
                    ))
                  ) : (
                    <div className="spinner-container spinner-container-home">
                      <div className="spinner-border foo-bar" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  )
                }
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
