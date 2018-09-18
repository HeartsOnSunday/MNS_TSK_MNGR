import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const SubNav = props => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <ul className="right">
          <li>
            <Link to="/">Curent Tasks</Link>
          </li>
          <li>
            <NavLink to="/About">Pending Tasks</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Completed Tasks</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(SubNav);
