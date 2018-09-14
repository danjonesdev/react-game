import React, { Component } from "react";

// import logo from "./logo.svg";
import "../App.css";
import genMap from './functions/genMap';
import Block from './components/block';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      round: 20,
      grid: genMap(),
      currentX: null,
      currentY: null,
    };
  }

  setCurrent = (x, y) => {
    this.setState({
      currentX: x,
      currentY: y,
    });
  }

  decrementRound = () => {
    this.setState({round: this.state.round +- 1});
  }

  render() {
    const { grid, round, currentX, currentY } = this.state;

    return (
      <div className="App">
        {/*
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
      */}

        <p>Round {round}</p>
        <p>currentX {currentX}, currentY {currentY}</p>

        <div className="grid">
          {grid.map((block, i) => (
            <Block block={block} decrementRound={this.decrementRound} setCurrent={this.setCurrent} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
