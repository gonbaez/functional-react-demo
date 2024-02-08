import React, { Component } from "react";

import Links from "./Links";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <nav>
          <Links />
        </nav>
      </header>
    );
  }
}

export default Header;
