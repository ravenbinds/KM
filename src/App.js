import React, { Component } from "react";
import { BrowserRouter as Router,  Route,  Switch,} from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import errorpage from "./components/404";
import Login from "./Login";
import SignUp from "./SignUp";
import Dash from "./components/dash";
// import Register from "./components/Actions/registration";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";

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
      fontSize: "0.9rem",
      },
    },
});

theme.typography.h6 = {
  fontSize: "0.8rem",

  "@media (min-width:600px)": {
    fontSize: "1.0rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.1rem",
  },
  };

theme.typography.button = {
  fontSize: "0.3rem",
  "@media (min-width:600px)": {
    fontSize: "0.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "0.9rem",
  },
};

theme.typography.h5 = {
  fontSize: "1.2rem",

  "@media (min-width:600px)": {
    fontSize: "1.3rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.4rem",
  },
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <AuthProvider>
          <Router>
            <ThemeProvider theme={theme}>
              <Switch>
                <PrivateRoute exact path="/" component={Dash} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                {/* <Route exact path="/register" component={Register} /> */}
                <Route component={errorpage} />
              </Switch>
            </ThemeProvider>
          </Router>
        </AuthProvider>
      </div>
    );
  }
}
export default App;
