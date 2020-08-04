import React, { Component } from 'react'
import Entry from './Entry'
import { EntriesConsumer } from '../context/Context'

class Entries extends Component {
  render() {
    return (
      <EntriesConsumer>
        {(context) => {
          const { entries, getContent } = context
          return (
            <div className="mt-2">
              <h1>Pages</h1>
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

export default Entries
