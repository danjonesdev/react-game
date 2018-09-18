import React, { Component } from "react";

class Player extends Component {
  constructor(props) {
    super(props);
    this.handleKeyArrow = this.handleKeyArrow.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyArrow, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyArrow, false);
  }

  handleKeyArrow = event => {
    if (event.keyCode === 38) {
      this.props.movePlayer("top");
    }
    if (event.keyCode === 37) {
      this.props.movePlayer("left");
    }
    if (event.keyCode === 39) {
      this.props.movePlayer("right");
    }
    if (event.keyCode === 40) {
      this.props.movePlayer("bottom");
    }
  };

  render() {
    return <div className="grid__block  grid__block--player" />;
  }
}

export default Player;
