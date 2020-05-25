import React, { Component } from "react";
import {NavLink} from "react-router-dom";

export class NavMain extends Component {
  render() {
    return (
      <div>
        <nav>
          <React.Fragment>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Temperature">Temperature</NavLink>
            <NavLink to="/Customize-Image">Customize-Image</NavLink>
          </React.Fragment>
        </nav>
      </div>
    );
  }
}

export default NavMain;
