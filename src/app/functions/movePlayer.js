export default (oldGrid, currentX, currentY, direction) => {
  const res = {
    grid: oldGrid,
    x: currentX,
    y: currentY,
  }

  const playerReset = {
    currentPos: false,
    moveMarker: false,
  }


  // const player = {
  //   x: currentX,
  //   y: currentY
  // };
  //
  // const moveMarkers = {
  //   top: {
  //     x: player.x,
  //     y: player.y - 1
  //   },
  //   left: {
  //     x: player.x - 1,
  //     y: player.y
  //   },
  //   right: {
  //     x: player.x + 1,
  //     y: player.y
  //   },
  //   bottom: {
  //     x: player.x,
  //     y: player.y + 1
  //   }
  // };


  for (let i = 0; i < res.grid.length; i++) {
    const type = res.grid[i].type;
    const x = res.grid[i].x;
    const y = res.grid[i].y;

    res.grid[i].player = playerReset;

    // if (player.x === x && player.y === y && type === 'default')
    //   res.grid[i].player.currentPos = true;
    //
    // if (moveMarkers.top.x === x && moveMarkers.top.y === y && type === 'default')
    //   res.grid[i].player.moveMarker = 'top';
    //
    // if (moveMarkers.left.x === x && moveMarkers.left.y === y && type === 'default')
    //   res.grid[i].player.moveMarker = 'left';
    //
    // if (moveMarkers.right.x === x && moveMarkers.right.y === y && type === 'default')
    //   res.grid[i].player.moveMarker = 'right';
    //
    // if (moveMarkers.bottom.x === x && moveMarkers.bottom.y === y && type === 'default')
    //   res.grid[i].player.moveMarker = 'bottom';

    console.log(x, y);
  }
  return res;
}
