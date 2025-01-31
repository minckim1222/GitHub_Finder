import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className='fab fa-github' /> GitHub Finder
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
