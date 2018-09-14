import React, { Component } from "react";

class Enemy extends Component {
  render() {
    const { block } = this.props;

    return (
      <div className="grid__block  grid__block--enemy"></div>
    );
  }
}

export default Enemy;
