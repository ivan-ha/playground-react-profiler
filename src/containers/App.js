import { Col, Input, Row } from 'antd'
import React, { Component } from 'react'

import List from '../components/List'
import { generateFakeList } from '../helpers/generateFakeList'

const list = generateFakeList(100)

class App extends Component {
  state = {
    data: list,
    value: '',
  }

  handleInputChange = e => {
    this.setState({
      value: e.target.value,
    })
  }

  render() {
    const { data, value } = this.state

    return (
      <Row>
        <Col span={8} offset={8}>
          <Input
            placeholder="Enter something"
            value={value}
            onChange={this.handleInputChange}
          />
          <List data={data} />
        </Col>
      </Row>
    )
  }
}

export default App
