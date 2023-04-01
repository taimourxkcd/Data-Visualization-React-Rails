import React, { Component } from "react";

export class CardSection extends Component {
  render(props) {
    return (
      <div className="card">
        <h1 className="title">{this.props.name}</h1>
        <p className="attribute">{this.props.attribute}</p>
      </div>
    );
  }
}

export default CardSection;
