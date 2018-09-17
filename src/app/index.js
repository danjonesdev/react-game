import React, { Component } from "react";

// import logo from "./logo.svg";
import "../App.css";

import Block from './components/block';

import genMap from './functions/genMap';
import movePlayer from './functions/movePlayer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: genMap(),
      currentX: 12,
      currentY: 5,
    };
  }

  movePlayer = (direction) => {
    const res = movePlayer(this.state.grid, this.state.currentX, this.state.currentY, direction);

    this.setState({
      grid: res.grid,
      currentX: res.x,
      currentY: res.y,
    });
  }

  render() {
    const { grid, round } = this.state;

    return (
      <div className="App">
        <p>Round {round}</p>
        <p>currentX {this.state.currentX}, currentY {this.state.currentY}</p>

        <div className="grid">
          {grid.map((block, i) => (
            <Block
              key={i}
              block={block}
              movePlayer={this.movePlayer}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
