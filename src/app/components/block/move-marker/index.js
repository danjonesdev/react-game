import React, { Component } from "react";

class MoveMarker extends Component {
  handleClick = () => {
    this.props.setCurrent(this.props.block.x, this.props.block.y);
    this.props.decrementRound();
  }

  render() {
    const { block } = this.props;

    return (
      <div onClick={this.handleClick} className="grid__block  grid__block--moverMarker"></div>
    );
  }
}

export default MoveMarker;
