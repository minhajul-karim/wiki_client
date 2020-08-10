import React, { Component } from 'react'
import { EntriesContext } from '../context/Context'

class RandomPage extends Component {
  clickHandler = () => {
    const entries = this.context.entries
    let randomTitle
    while (randomTitle === undefined) {
      let randomIndex = Math.floor(Math.random() * entries.length)
      randomTitle = entries[randomIndex]
    }
    window.location.assign(`${window.location.origin}/${randomTitle}`)
  }

  render() {
    return (
      <div className="random-link nav-link" onClick={() => this.clickHandler()}>
        A random page
      </div>
    )
  }
}

RandomPage.contextType = EntriesContext

export default RandomPage
