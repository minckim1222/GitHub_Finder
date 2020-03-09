import React, { Fragment } from "react";
import NavBar from "./NavBar";
import "./App.css";
import Users from "./users/Users";
import Search from "./users/Search";
import Alert from "./Alert";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./About";
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
                <Route
                  exact
                  path='/'
                  render={props => (
                    <Fragment>
                      <Search />
                      <Users />
                    </Fragment>
                  )}
                ></Route>
                <Route exact path='/about' component={About}></Route>
                <Route
                  exact
                  path='/user/:login'
                  render={props => <User {...props} />}
                />
              </Switch>
            </div>
          </Fragment>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
};

export default App;
