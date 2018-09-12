import { Col, Row } from 'antd'
import React, { Component } from 'react'

import List from '../components/List'
import { generateFakeList } from '../helpers/generateFakeList'

class App extends Component {
  render() {
    const data = generateFakeList(100)

    return (
      <Row>
        <Col span={8} offset={8}>
          <List data={data} />
        </Col>
      </Row>
    )
  }
}

export default App
