import React, { Component } from "react";

class MoveMarker extends Component {
  render() {
    const { block } = this.props;

    return (
      <div className="grid__block  grid__block--moverMarker"></div>
    );
  }
}

export default MoveMarker;
