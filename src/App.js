import './App.css';

import { List } from 'antd'
import React, { Component } from 'react';

import { generateFakeList } from './helpers/generateFakeList';
import logo from './logo.svg';

class App extends Component {
  render() {
    const items = generateFakeList(100)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <List
            itemLayout="horizontal"
            dataSource={items}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={item.name}
                  description={item.country}
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
