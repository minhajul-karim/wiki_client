import React, { Component } from 'react'
import Content from './Content'
import { EntriesContext, EntriesConsumer } from '../context/Context'

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
          return <Content html={context.content} />
        }}
      </EntriesConsumer>
    )
  }
}

Detail.contextType = EntriesContext

export default Detail
