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
          const pageShouldBeLoaded = this.props.match.params.title,
            pageIsLoading = context.content.title
          return (
            <>
              <Link
                to={`/edit/${context.content.title}`}
                style={{ color: '#0652a3' }}
              >
                {pageShouldBeLoaded === pageIsLoading && 'Edit this page'}
              </Link>
              {pageShouldBeLoaded === pageIsLoading ? (
                <Markdown>{context.content.content || ''}</Markdown>
              ) : (
                <div className="spinner-container spinner-container-details">
                  <div className="spinner-border foo-bar" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              )}
            </>
          )
        }}
      </EntriesConsumer>
    )
  }
}

Detail.contextType = EntriesContext

export default Detail
