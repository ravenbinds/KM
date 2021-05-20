import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard/dashboard'
import Content from "./components/Content"
import Leftbar from "./components/Leftbar"
import Rightbar from "./components/Rightbar"
import Huntingground from "./components/pages/Huntingground"
import Myprofile from "./components/Myprofile"
import Activity from "./components/Activity"
import Settings from "./components/settings"
import Projectcollab from './components/pages/projectcollab';
import Projectadopt from './components/pages/projectadopt';
import Projectpage from './components/pages/Projectpage';
import errorpage from './components/404';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import SignIn from './components/signin/Signin';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#985DFF",
    },
    secondary: {
      main: "#000000",
      text: "#757575",
    },
    spacing: [0, 1, 2, 3, 5, 8],
  },
  typography: {
    body1: {
      fontSize: '0.9rem',

    },
  }
});
theme.typography.h6 = {
  fontSize: '0.8rem',

  '@media (min-width:600px)': {
    fontSize: '1.0rem',

  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.1rem',

  },
};
theme.typography.button = {
  fontSize: '0.3rem',
  '@media (min-width:600px)': {
    fontSize: '0.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '0.9rem',

  },
};
theme.typography.h5 = {
  fontSize: '1.3rem',

  '@media (min-width:600px)': {
    fontSize: '1.4rem',

  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
};
class App extends Component {
  render() {
    return <div className="App">
      <div className="wrapper">
        <Router>
          <ThemeProvider theme={theme}>
            <Leftbar />
            <Switch>
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/" component={Content} />
              <Route exact path="/Myprofile" component={Myprofile} />
              <Route exact path="/Projectpage" component={Projectpage} />
              <Route exact path="/Huntingground/projectcollab" component={Projectcollab} />
              <Route exact path="/Huntingground/projectadopt" component={Projectadopt} />
              <Route exact path="/Huntingground" component={Huntingground} />
              <Route exact path="/Activity" component={Activity} />
              <Route exact path="/Settings" component={Settings} />
              <Route component={errorpage} />
            </Switch>
            <Rightbar />
          </ThemeProvider>
        </Router>
      </div>

    </div>;
  }
}
export default App;