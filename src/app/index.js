import React, { Component } from "react";
import { random } from "lodash";

// import logo from "./logo.svg";
import "../App.css";

import Block from "./components/block";

import genMap from "./functions/genMap";
import movePlayer from "./functions/movePlayer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: null,
      currentX: random(1, 19),
      currentY: random(1, 14)
    };
  }

  componentDidMount() {
    this.setState({
      grid: genMap(this.state.currentX, this.state.currentY)
    });
  }

  movePlayer = direction => {
    const res = movePlayer(
      this.state.grid,
      this.state.currentX,
      this.state.currentY,
      direction
    );

    this.setState({
      grid: res.grid,
      currentX: res.x,
      currentY: res.y
    });
  };

  render() {
    const { grid } = this.state;

    if (grid) {
      return (
        <div className="App">
          <p>
            currentX {this.state.currentX}, currentY {this.state.currentY}
          </p>

          <div className="grid">
            {grid.map((block, i) => (
              <Block key={i} block={block} movePlayer={this.movePlayer} />
            ))}
          </div>
        </div>
      );
    }

    return false;
  }
}

export default App;
