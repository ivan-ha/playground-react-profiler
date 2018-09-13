import { Col, Input, Row } from 'antd'
import React, { Component } from 'react'

import List from '../components/List'
import { generateFakeList } from '../helpers/generateFakeList'

const list = generateFakeList(100)

class App extends Component {
  state = {
    value: '',
  }

  handleInputChange = e => {
    this.setState({
      value: e.target.value,
    })
  }

  render() {
    const { value } = this.state

    return (
      <Row>
        <Col span={8} offset={8}>
          <Input
            placeholder="Enter something"
            value={value}
            onChange={this.handleInputChange}
          />
          <List data={list} />
        </Col>
      </Row>
    )
  }
}

export default App
