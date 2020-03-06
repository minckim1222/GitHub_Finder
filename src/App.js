import React, { Fragment, Component } from "react";
import NavBar from "./NavBar";
import "./App.css";
import Users from "./users/Users";
import axios from "axios";
import Search from "./users/Search";

export class App extends Component {
  state = {
    users: [],
    loading: false
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET_KEY}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }

  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET_KEY}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  render() {
    const { loading, users } = this.state;
    return (
      <Fragment>
        <NavBar />
        <div className='container'>
          <Search searchUsers={this.searchUsers} />
          <Users loading={loading} users={users} />
        </div>
      </Fragment>
    );
  }
}

export default App;
