import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const SortNav = props => {
  return (
    <nav className="nav-wrapper" id="SortNav">
      <div className="container">
        <ul className="right">
          <li>
            <NavLink to="/Backups">Backups</NavLink>
          </li>
          <li>
            <NavLink to="/Environment">Environment</NavLink>
          </li>
          <li>
            <NavLink to="/Governance">Governance</NavLink>
          </li>
          <li>
            <NavLink to="/Mobile">Mobile</NavLink>
          </li>
          <li>
            <NavLink to="/Network">Network</NavLink>
          </li>
          <li>
            <NavLink to="/Power">Power</NavLink>
          </li>
          <li>
            <NavLink to="/Roles">Roles</NavLink>
          </li>
          <li>
            <NavLink to="/Server">Server</NavLink>
          </li>
          <li>
            <NavLink to="/WorkStation">WorkStation</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(SortNav);
