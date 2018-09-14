import { List } from 'antd'
import React from 'react'

import ListItem from './ListItem'

class PureList extends React.PureComponent {
  render() {
    const { data } = this.props

    return (
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => <ListItem item={item} />}
      />
    )
  }
}

export default PureList
