import React from "react";
//import { Link, NavLink, withRouter } from "react-router-dom";
import { Link, withRouter } from "react-router-dom";

const Navbar = props => {
  //console.log(props);
  // setTimeout(() => {
  //   props.history.push("/about");
  // }, 2000);
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <a className="brand-logo">MNS Task Manager</a>
        <ul className="right">
          <li>
            <Link to="/">Master Task List</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
