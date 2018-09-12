import { Avatar, List, Tag } from 'antd'
import React from 'react'

const ListItem = ({ item }) => (
  <List.Item>
    <List.Item.Meta
      avatar={<Avatar src={item.avatar} />}
      title={item.name}
      description={item.country}
    />
    <Tag color={item.gender === 'M' ? 'blue' : 'magenta'}>{item.gender}</Tag>
  </List.Item>
)

export default ListItem
