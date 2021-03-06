import React, { Component } from "react";

class Terrain extends Component {
  render() {
    const { block } = this.props;

    return <div className={`grid__block  grid__block--${block.terrain}`} />;
  }
}

export default Terrain;
