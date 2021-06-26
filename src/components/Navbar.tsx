import React from "react";
import { NavLink } from "react-router-dom";

import "../style.css";

interface Props {}

export const Navbar: React.FC<Props> = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            activeClassName="is-active"
            exact
            style={{ textDecoration: "none" }}
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/definition"
            activeClassName="is-active"
            style={{ textDecoration: "none" }}
          >
            what is game of life
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/grid"
            activeClassName="is-active"
            style={{ textDecoration: "none" }}
          >
            grid
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/patterns"
            activeClassName="is-active"
            style={{ textDecoration: "none" }}
          >
            famous patterns
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
