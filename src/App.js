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
      <section className="App-main">
        {/* <Post nickname="Chris" avatar="https://www.laravelnigeria.com/img/chris.jpg" caption="Moving the community!" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
        <Post nickname="OG" avatar="https://www.laravelnigeria.com/img/chris.jpg" caption="Holding a mic" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" /> */}

        {/* more posts */}
      </section>
    </div>;
  }
}
export default App;