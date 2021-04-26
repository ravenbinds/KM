import React, { Component } from 'react';
import './App.css';

import Dashboard from './components/Dashboard/dashboard'
import Content from "./components/Content"
import Leftbar from "./components/Leftbar"
import Rightbar from "./components/Rightbar"

class App extends Component {
  render() {
    return <div className="App">
      {/* <Header /> */}
      {/* <SignIn /> */}
      {/* <Dashboard /> */}
      <div className="wrapper">
        <Leftbar />
        <Content />
        <Rightbar />
      </div>

    </div>;
  }
}
export default App;