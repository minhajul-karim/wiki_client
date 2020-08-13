import React, { Component } from 'react'
import Entry from './Entry'
import { EntriesConsumer, EntriesContext } from '../Context'

class SearchResults extends Component {
  render() {
    return (
      <EntriesConsumer>
        {(context) => {
          const { entries, pageExists } = context
          return (
            <div className="mt-2 entries">
              <h1>Search results</h1>
              <hr />
              {pageExists ? (
                <ul>
                  {entries.map((item) => (
                    <Entry key={item} name={item} />
                  ))}
                </ul>
              ) : (
                <p className="text-center">Sorry, no result found!</p>
              )}
            </div>
          )
        }}
      </EntriesConsumer>
    )
  }
}

SearchResults.contextType = EntriesContext

export default SearchResults
