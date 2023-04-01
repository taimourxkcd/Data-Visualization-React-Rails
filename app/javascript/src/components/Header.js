import React, { Component } from "react";

export class Header extends Component {
  render(props) {
    return (
      <>
        <h1>{this.props.sourceName}</h1>
      </>
    );
  }
}

export default Header;
