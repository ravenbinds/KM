import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Content from "./Content";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import TopBar from "./TopBar";
import Huntingground from "./pages/Huntingground";
import Myprofile from "./Myprofile";
import Notifications from "./Notifications";
import Settings from "./settings";
import HGPage from "./pages/HGPage"
// import Projectpage from "./pages/Projectpage";
import GroupsPage from "./pages/GroupsPage";
import errorpage from "./404";
import create from "./pages/createpage";
import { useUserContext } from "../UserContext";
import { makeStyles } from '@material-ui/core/styles';
import { useOnClickOutside } from '../hooks';
// import followers from './pages/followers'
import GetProject from './pages/getProject'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
      background: '#fafafa',
      gridTemplateRows: '8vh 92vh'
    },
  },
}));

function Dash() {
  const classes = useStyles();
  const currentUser = useUserContext();

  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <>
      {
        currentUser ?
          (
            <div className="App">
              <div className={`wrapper ${classes.wrapper}`} ref={node}>
                <Router>
                  <TopBar open={open} setOpen={setOpen} />
                  <Leftbar open={open} setOpen={setOpen} />
                  <Switch>
                    <Route exact path="/" component={Content} />
                    <Route exact path="/createpages" component={create} />
                    <Route exact path="/Content" component={Content} />
                    <Route exact path="/Myprofile" component={Myprofile} />
                    <Route exact path="/Projectpage" component={GetProject} />
                    <Route exact path="/groups" component={GroupsPage} />
                    <Route exact path='/Huntingground/hgpage' component={HGPage} />
                    <Route exact path="/Huntingground" component={Huntingground} />
                    <Route exact path="/Notifications" component={Notifications} />
                    <Route exact path="/Settings" component={Settings} />
                    <Route component={errorpage} />
                  </Switch>
                  <Rightbar />
                </Router>
              </div>
            </div>
          ) : (
            <Redirect to="/login" />
          )
      }
    </>
  );
}

// export default withRouter(Dash);
export default Dash;
