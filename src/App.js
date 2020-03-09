import React, { Fragment } from "react";
import NavBar from "./NavBar";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Alert from "./Alert";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import User from "./users/User";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
const App = () => {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Fragment>
            <NavBar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route
                  exact
                  path='/user/:login'
                  render={props => <User {...props} />}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </Fragment>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
};

export default App;
