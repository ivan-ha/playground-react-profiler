import { Avatar, Col, List, Row } from 'antd'
import React, { Component } from 'react';

import { generateFakeList } from '../helpers/generateFakeList';

class App extends Component {
  render() {
    const items = generateFakeList(100)

    return (
      <Row>
        <Col span={8} offset={8}>
          <List
            itemLayout="horizontal"
            dataSource={items}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={item.name}
                  description={item.country}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    );
  }
}

export default App;
