import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard/dashboard'
import Content from "./components/Content"
import Leftbar from "./components/Leftbar"
import Rightbar from "./components/Rightbar"
import Huntingground from "./components/Huntingground"
import Myprofile from "./components/Myprofile"
import Activity from "./components/Activity"
import Settings from "./components/settings"


class App extends Component {
  render() {
    return <div className="App">
      <div className="wrapper">
        <Router>
          <Leftbar />
          <Switch>
            <Route exact path="/" component={Content} />
            <Route exact path="/Myprofile" component={Myprofile} />
            <Route exact path="/Huntingground" component={Huntingground} />
            <Route exact path="/Activity" component={Activity} />
            <Route exact path="/Settings" component={Settings} />

          </Switch>
          <Rightbar />
        </Router>
      </div>

    </div>;
  }
}
export default App;