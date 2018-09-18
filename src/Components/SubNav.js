import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const SubNav = props => {
  return (
    <nav className="nav-wrapper" id="SubNav">
      <div className="container">
        <ul className="right">
          <li>
            <NavLink to="/Current">Current Tasks</NavLink>
          </li>
          <li>
            <NavLink to="/Pending">Pending Tasks</NavLink>
          </li>
          <li>
            <NavLink to="/Completed">Completed Tasks</NavLink>
          </li>
          <li>
            <NavLink to="/DeletedTasks">Deleted Tasks</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(SubNav);
