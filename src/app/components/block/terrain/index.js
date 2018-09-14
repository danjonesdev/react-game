import React, { Component } from "react";

class Terrain extends Component {
  render() {
    const { block } = this.props;

    return (
      <div className={`grid__block  grid__block--${block.item.terrain}`}></div>
    );
  }
}

export default Terrain;
