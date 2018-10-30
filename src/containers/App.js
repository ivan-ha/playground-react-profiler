import { Col, Input, Row } from 'antd'
import React, { Component } from 'react'

import { MyList } from '../components/MyList'
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

  renderInput = () => (
    <Input
      placeholder="Enter something"
      value={this.state.value}
      onChange={this.handleInputChange}
      size="large"
    />
  )

  renderList = () => <MyList data={list} />

  render() {
    return (
      <Row>
        <Col span={8} offset={8}>
          {this.renderInput()}
          {this.renderList()}
        </Col>
      </Row>
    )
  }
}

export default App
