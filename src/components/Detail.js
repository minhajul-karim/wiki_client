import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Markdown from 'markdown-to-jsx'
import { EntriesContext, EntriesConsumer } from '../Context'

class Detail extends Component {
  componentDidMount = () => {
    const title = this.props.match.params.title,
      context = this.context
    context.getContent(title)
  }

  render() {
    return (
      <EntriesConsumer>
        {(context) => {
          return (
            <>
              <Link
                to={`/edit/${context.content.title}`}
                style={{ color: '#0652a3' }}
              >
                Edit this page
              </Link>
              <Markdown>{context.content.content || ''}</Markdown>
            </>
          )
        }}
      </EntriesConsumer>
    )
  }
}

Detail.contextType = EntriesContext

export default Detail
