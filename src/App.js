import React, { Component } from "react";
import AuthPage from './AuthPage'
import { useUserContext } from "./UserContext";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Dash from "./components/dash";

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
    fontFamily: [
      'PT Sans'
    ],
    body1: {
      fontSize: "0.9rem",
      fontWeight: 'inherit'
      },
    },
});

theme.typography.h6 = {
  fontSize: "0.8rem",
  fontWeight: 'normal',
  "@media (min-width:600px)": {
    fontSize: "1.0rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
  };

theme.typography.button = {
  textTransform: 'none',
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

theme.typography.caption = {
  color: theme.palette.primary.main
}

function App() {

    const currentUser = useUserContext();

    return (
      <>
      {   currentUser ? (
        <ThemeProvider theme={theme}>
        <Dash/>
      </ThemeProvider>
      ) : (
        <AuthPage/>
      )    
      }
    </>    
    );
  }

export default App;
