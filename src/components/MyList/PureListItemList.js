import { List } from 'antd'
import React from 'react'

import PureListItem from './PureListItem'

const PureListItemList = ({ data }) => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => <PureListItem item={item} />}
  />
)

export default PureListItemList
