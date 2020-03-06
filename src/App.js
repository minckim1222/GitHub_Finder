import React, { Fragment, Component } from "react";
import NavBar from "./NavBar";
import "./App.css";
import Users from "./Users";
import axios from "axios";

export class App extends Component {
  state = {
    users: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET_KEY}`
    );
    this.setState({ users: res.data, loading: false });
  }

  render() {
    const { loading, users } = this.state;
    return (
      <Fragment>
        <NavBar />
        <div className='container'>
          <Users loading={loading} users={users} />
        </div>
      </Fragment>
    );
  }
}

export default App;
