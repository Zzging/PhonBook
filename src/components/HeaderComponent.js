import React, { Component } from "react";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <>
        <header>
          <nav className="navber navber-expand-md navber-dark bg-dark">
            <div>
              <a href="http://localhost:3000/" className="navbar-brand">
                Phone Book
              </a>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default HeaderComponent;
