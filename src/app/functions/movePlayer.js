export default (grid, currentX, currentY, direction) => {
  let cancelMove = false;

  const oldRes = {};
  oldRes.grid = grid;
  oldRes.x = currentX;
  oldRes.y = currentY;

  let newRes = {};
  newRes.grid = grid;
  newRes.x = currentX;
  newRes.y = currentY;

  // check if at edge of map
  if (
    (direction === "top" && currentY === 1) ||
    (direction === "left" && currentX === 1) ||
    (direction === "right" && currentX === 20) ||
    (direction === "bottom" && currentY === 15)
  )
    cancelMove = true;

  if (direction === "top") {
    newRes.x = currentX;
    newRes.y = currentY - 1;
  }

  if (direction === "left") {
    newRes.x = currentX - 1;
    newRes.y = currentY;
  }

  if (direction === "right") {
    newRes.x = currentX + 1;
    newRes.y = currentY;
  }

  if (direction === "bottom") {
    newRes.x = currentX;
    newRes.y = currentY + 1;
  }

  const setMove = () => {
    const moveMarkers = {
      top: {
        x: newRes.x,
        y: newRes.y - 1
      },
      left: {
        x: newRes.x - 1,
        y: newRes.y
      },
      right: {
        x: newRes.x + 1,
        y: newRes.y
      },
      bottom: {
        x: newRes.x,
        y: newRes.y + 1
      }
    };

    let i;
    for (i = 0; i < newRes.grid.length; i++) {
      const type = newRes.grid[i].type;
      const x = newRes.grid[i].x;
      const y = newRes.grid[i].y;

      // reset
      newRes.grid[i].player.moveMarker = false;
      newRes.grid[i].player.currentPos = false;

      if (newRes.x === x && newRes.y === y)
        newRes.grid[i].player.currentPos = true;

      if (moveMarkers.top.x === x && moveMarkers.top.y === y)
        newRes.grid[i].player.moveMarker = "top";

      if (moveMarkers.left.x === x && moveMarkers.left.y === y)
        newRes.grid[i].player.moveMarker = "left";

      if (moveMarkers.right.x === x && moveMarkers.right.y === y)
        newRes.grid[i].player.moveMarker = "right";

      if (moveMarkers.bottom.x === x && moveMarkers.bottom.y === y)
        newRes.grid[i].player.moveMarker = "bottom";
    }
  };

  // checks if next move will be on terrain
  let ii;
  for (ii = 0; ii < newRes.grid.length; ii++) {
    const type = newRes.grid[ii].type;
    const x = newRes.grid[ii].x;
    const y = newRes.grid[ii].y;

    if (newRes.x === x && newRes.y === y && type === "terrain") {
      cancelMove = true;
      break;
    }
  }

  if (cancelMove) return oldRes;
  setMove();
  return newRes;
};
