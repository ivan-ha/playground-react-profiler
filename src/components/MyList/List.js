import { List } from 'antd'
import React from 'react'

import ListItem from './ListItem'

const MyList = ({ data }) => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => <ListItem item={item} />}
  />
)

export default MyList
