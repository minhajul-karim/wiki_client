import React, { Component } from 'react'
import { EntriesContext } from '../Context'
import { withRouter } from 'react-router-dom'

class RandomPage extends Component {
  clickHandler = () => {
    const entries = this.context.entries
    let randomTitle
    while (randomTitle === undefined) {
      let randomIndex = Math.floor(Math.random() * entries.length)
      randomTitle = entries[randomIndex]
    }
    // Update state to render content of randomTitle and route to that URL
    this.context.getContent(randomTitle)
    this.props.history.push(`/wiki/${randomTitle}`)
  }

  render() {
    return (
      <div className="random-link nav-link" onClick={this.clickHandler}>
        A random page
      </div>
    )
  }
}

RandomPage.contextType = EntriesContext

export default withRouter(RandomPage)
