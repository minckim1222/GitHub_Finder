import React, { Fragment, useState } from "react";
import NavBar from "./NavBar";
import "./App.css";
import Users from "./users/Users";
import axios from "axios";
import Search from "./users/Search";
import Alert from "./Alert";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./About";
import User from "./users/User";
const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [usersLoaded, setUsersLoaded] = useState(false);
  const [alert, setAlert] = useState(null);

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };
  const searchUsers = async text => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET_KEY}`
    );

    setUsers(res.data.items);
    setLoading(false);
    setUsersLoaded(true);
  };
  const getUser = async userName => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET_KEY}`
    );
    setUser(res.data);
    setLoading(false);
  };
  const getUserRepos = async userName => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=5&sort=author-date&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET_KEY}`
    );
    setRepos(res.data);
    setLoading(false);
  };
  const showAlert = (msg, alertType) => {
    setAlert({ msg, alertType });
    setTimeout(() => setAlert(null), 2500);
  };

  return (
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
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    usersLoaded={usersLoaded}
                    showAlert={showAlert}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              )}
            ></Route>
            <Route exact path='/about' component={About}></Route>
            <Route
              exact
              path='/user/:login'
              render={props => (
                <User
                  {...props}
                  getUserRepos={getUserRepos}
                  getUser={getUser}
                  repos={repos}
                  user={user}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
