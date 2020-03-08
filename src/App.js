import React, { Fragment, useState } from "react";
import NavBar from "./NavBar";
import "./App.css";
import Users from "./users/Users";
import Search from "./users/Search";
import Alert from "./Alert";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./About";
import User from "./users/User";
import GithubState from "./context/github/GithubState";
const App = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, alertType) => {
    setAlert({ msg, alertType });
    setTimeout(() => setAlert(null), 2500);
  };

  return (
    <GithubState>
      <BrowserRouter>
        <Fragment>
          <NavBar />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Search showAlert={showAlert} />
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
    </GithubState>
  );
};

export default App;
