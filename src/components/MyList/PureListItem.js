import { Avatar, List, Tag } from 'antd'
import React from 'react'

class PureListItem extends React.PureComponent {
  render() {
    const { item } = this.props

    return (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={item.name}
          description={item.country}
        />
        <Tag
          color={item.gender === 'M' ? 'blue' : 'magenta'}
          className="no-ant-tag-cursor"
        >
          {item.gender}
        </Tag>
      </List.Item>
    )
  }
}

export default PureListItem
