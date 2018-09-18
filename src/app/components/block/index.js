import React, { Component } from "react";

import Default from './default';
import Player from './player';
// import Enemy from './enemy';
// import MoveMarker from './move-marker';
// import Terrain from './terrain';

class Block extends Component {
  render() {
    const { block, decrementRound } = this.props;

    if (block.player.currentPos)
      return <Player {...this.props} />;

    if (block.type === 'default')
      return <Default {...this.props} />;

    // if (block.type === 'enemy') {
    //   return (
    //     <Enemy {...this.props} />
    //   );
    // }
    //
    // if (block.type === 'move-marker') {
    //   return (
    //     <MoveMarker {...this.props} />
    //   );
    // }
    //
    // if (block.type === 'terrain') {
    //   return (
    //     <Terrain {...this.props} />
    //   );
    // }

    return false;
  }
}

export default Block;
