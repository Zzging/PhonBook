import React, { Component } from "react";

class FooterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <>
        <footer className="footer">
          <samp className="taxt-muted">
            Web Application Study and Development with AngularJS and Spring Boot
            By chanikan Potjamanpong
          </samp>
        </footer>
      </>
    );
  }
}

export default FooterComponent;
