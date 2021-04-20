import React, { Component } from "react";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <header>
          <nav className="navber navber-expand-md navber-dark bg-dark">
            <div>
              <a href="http://javaguides.net" className="navbar-brand">
                sbshop_user Management App
              </a>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
