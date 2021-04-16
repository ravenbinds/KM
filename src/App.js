import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import SignIn from './components/signin/Signin'
import Dashboard from './components/Dashboard/dashboard'
class App extends Component {
  render() {
    return <div className="App">
      {/* <Header /> */}
      {/* <SignIn /> */}
      <Dashboard />
      <section className="App-main">
        {/* <Post nickname="Chris" avatar="https://www.laravelnigeria.com/img/chris.jpg" caption="Moving the community!" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
        <Post nickname="OG" avatar="https://www.laravelnigeria.com/img/chris.jpg" caption="Holding a mic" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" /> */}

        {/* more posts */}
      </section>
    </div>;
  }
}
export default App;