export default (oldGrid, currentX, currentY, direction) => {

  let res = {};
  res.grid = oldGrid;
  res.x = currentX;
  res.y = currentY;

  if (
    (direction === "top" && currentY === 1) ||
    (direction === "left" && currentX === 1) ||
    (direction === "right" && currentX === 20) ||
    (direction === "bottom" && currentY === 15)
  ) return res;

  if (direction === 'top') {
    res.x = currentX;
    res.y = currentY - 1;
  }

  if (direction === 'left') {
    res.x = currentX - 1;
    res.y = currentY;
  }

  if (direction === 'right') {
    res.x = currentX + 1;
    res.y = currentY;
  }

  if (direction === 'bottom') {
    res.x = currentX;
    res.y = currentY + 1;
  }

  const moveMarkers = {
    top: {
      x: res.x,
      y: res.y - 1
    },
    left: {
      x: res.x - 1,
      y: res.y
    },
    right: {
      x: res.x + 1,
      y: res.y
    },
    bottom: {
      x: res.x,
      y: res.y + 1
    }
  };

  let i;
  for (i = 0; i < res.grid.length; i++) {
    const type = res.grid[i].type;
    const x = res.grid[i].x;
    const y = res.grid[i].y;

    // reset
    res.grid[i].player.currentPos = false;
    res.grid[i].player.moveMarker = false;

    if (res.x === x && res.y === y && type === 'default')
      res.grid[i].player.currentPos = true;

    if (moveMarkers.top.x === x && moveMarkers.top.y === y && res.y > 0 && type === 'default')
      res.grid[i].player.moveMarker = 'top';

    if (moveMarkers.left.x === x && moveMarkers.left.y === y && type === 'default')
      res.grid[i].player.moveMarker = 'left';

    if (moveMarkers.right.x === x && moveMarkers.right.y === y && type === 'default')
      res.grid[i].player.moveMarker = 'right';

    if (moveMarkers.bottom.x === x && moveMarkers.bottom.y === y && type === 'default')
      res.grid[i].player.moveMarker = 'bottom';
  }

  return res;
}
