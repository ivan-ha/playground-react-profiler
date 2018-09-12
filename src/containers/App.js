import { Avatar, List } from 'antd'
import React, { Component } from 'react';

import { generateFakeList } from '../helpers/generateFakeList';

class App extends Component {
  render() {
    const items = generateFakeList(100)

    return (
        <div>
          <List
            itemLayout="horizontal"
            dataSource={items}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={item.name}
                  description={item.country}
                />
              </List.Item>
            )}
          />
      </div>
    );
  }
}

export default App;
