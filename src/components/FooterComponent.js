import React, { Component } from "react";

class FooterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <footer className="footer">
          <samp className="taxt-muted">
            All Rights Reserved 2020 @javaguides
          </samp>
        </footer>
      </div>
    );
  }
}

export default FooterComponent;
