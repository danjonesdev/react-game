import React, { Component } from "react";

class Default extends Component {
  render() {
    const { block, movePlayer } = this.props;
    const moveMarker = block.player.moveMarker;

    if (moveMarker) return <div onClick={() => { movePlayer(moveMarker); }} className="grid__block  grid__block--moverMarker"></div>;

    return <div className="grid__block"></div>;
  }
}

export default Default;
