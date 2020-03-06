import React, { Fragment, Component } from "react";
import NavBar from "./NavBar";
import "./App.css";
import Users from "./users/Users";
import axios from "axios";
import Search from "./users/Search";
import Alert from "./Alert";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./About";
import User from "./users/User";
export class App extends Component {
  state = {
    users: [],
    loading: false,
    usersLoaded: false,
    alert: null
  };
  //Load initial users
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET_KEY}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }

  clearUsers = () => {
    this.setState({
      users: [],
      user: {},
      loading: false,
      usersLoaded: false
    });
  };
  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET_KEY}`
    );
    this.setState({ users: res.data.items, loading: false, usersLoaded: true });
  };
  getUser = async userName => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?q=${userName}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET_KEY}`
    );
    this.setState({ user: res.data, loading: false });
  };
  showAlert = (msg, alertType) => {
    this.setState({
      alert: {
        msg,
        alertType
      }
    });
    setTimeout(() => this.setState({ alert: null }), 2500);
  };
  render() {
    const { loading, users, usersLoaded, alert } = this.state;
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
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      usersLoaded={usersLoaded}
                      showAlert={this.showAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              ></Route>
              <Route exact path='/about' component={About}></Route>
            </Switch>
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
