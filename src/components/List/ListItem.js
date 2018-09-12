import { Avatar, List } from 'antd'
import React from 'react'

const ListItem = ({ item }) => (
  <List.Item>
    <List.Item.Meta
      avatar={<Avatar src={item.avatar} />}
      title={item.name}
      description={item.country}
    />
  </List.Item>
)

export default ListItem
