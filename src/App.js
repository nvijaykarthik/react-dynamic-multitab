import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import './App.css';

class App extends Component {
  state = {
    tabs: [{
      name: "workspace"
    }]
  }

  newTab() {
    let tab = {
      name: "workspace"
    }
    this.setState(
      {
        tabs: [...this.state.tabs, tab]
      }
    )
  }

  render() {
    const tabs = [];
    const tabPane = [];
    this.state.tabs.forEach((tab,index) => {
      tabs.push(
        <Tab key={index}>
          {tab.name}-{index}
        </Tab>
      )

      tabPane.push(
        <TabPanel key={index}>
          <div>
            <textarea rows="30" className="textarea">{tab.desc}</textarea>
          </div>
          <div>
            <button>button1</button>
            <button>button2</button>
            <button>button3</button>
          </div>
        </TabPanel>
      )
    }
    )

    return (
      <div className="App">
        <h1>Asrita</h1>
        <button onClick={(e) => this.newTab(e)}>New Tab</button>
        <Tabs>
          <TabList>{tabs}</TabList>
          {tabPane}
        </Tabs>
      </div>
    );
  }
}

export default App;
