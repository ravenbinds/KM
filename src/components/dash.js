import React from 'react'
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Content from './Content';
import Leftbar from './Leftbar';
import Rightbar from './Rightbar';
import errorpage from './404';
import Huntingground from "./pages/Huntingground"
import Myprofile from "./Myprofile"
import Notifications from "./Notifications"
import Settings from "./settings"
import Projectcollab from './pages/projectcollab';
import Projectadopt from './pages/projectadopt';
import Projectpage from './pages/Projectpage';
function Dash() {
    return (
        <div className="App">
            <div className="wrapper">

                <Router>
                    <Leftbar />
                    <Switch>
                        <Route exact path="/" component={Content} />
                        <Route exact path="/Myprofile" component={Myprofile} />
                        <Route exact path="/Projectpage" component={Projectpage} />
                        <Route exact path="/Huntingground/projectcollab" component={Projectcollab} />
                        <Route exact path="/Huntingground/projectadopt" component={Projectadopt} />
                        <Route exact path="/Huntingground" component={Huntingground} />
                        <Route exact path="/Notifications" component={Notifications} />
                        <Route exact path="/Settings" component={Settings} />
                        <Route component={errorpage} />

                    </Switch>
                    <Rightbar />
                </Router>

            </div></div>
    )
}

export default withRouter(Dash);
