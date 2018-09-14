import { Col, Input, Radio, Row } from 'antd'
import React, { Component } from 'react'

import { MyList, PureList, PureListItemList } from '../components/MyList'
import { generateFakeList } from '../helpers/generateFakeList'

const list = generateFakeList(100)

const type = {
  NO_OPTIMIZATION: 'NO_OPTIMIZATION',
  PURE_LIST: 'PURE_LIST',
  PURE_LIST_ITEM: 'PURE_LIST_ITEM',
}

class App extends Component {
  state = {
    value: '',
    radio: type.NO_OPTIMIZATION,
  }

  handleRadioChange = e => {
    this.setState({
      radio: e.target.value,
    })
  }

  handleInputChange = e => {
    this.setState({
      value: e.target.value,
    })
  }

  renderRadio = () => (
    <Radio.Group
      defaultValue={type.NO_OPTIMIZATION}
      buttonStyle="solid"
      style={{ marginBottom: 16 }}
      onChange={this.handleRadioChange}
    >
      <Radio.Button value={type.NO_OPTIMIZATION}>No optimization</Radio.Button>
      <Radio.Button value={type.PURE_LIST_ITEM}>
        {'Pure <ListItem/>'}
      </Radio.Button>
      <Radio.Button value={type.PURE_LIST}>{'Pure <List/>'}</Radio.Button>
    </Radio.Group>
  )

  renderInput = () => (
    <Input
      placeholder="Enter something"
      value={this.state.value}
      onChange={this.handleInputChange}
      size="large"
    />
  )

  renderList = () => {
    switch (this.state.radio) {
      case type.NO_OPTIMIZATION:
        return <MyList data={list} />
      case type.PURE_LIST_ITEM:
        return <PureListItemList data={list} />
      case type.PURE_LIST:
        return <PureList data={list} />
      default:
        return <MyList data={list} />
    }
  }

  render() {
    return (
      <Row>
        <Col span={8} offset={8}>
          {this.renderRadio()}
          {this.renderInput()}
          {this.renderList()}
        </Col>
      </Row>
    )
  }
}

export default App
