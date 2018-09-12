import { List as AntdList } from 'antd'
import React from 'react'

import ListItem from './ListItem'

const List = ({ data }) => (
  <AntdList
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => <ListItem item={item} />}
  />
)

export default List
