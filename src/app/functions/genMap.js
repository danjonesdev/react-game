import { sample, random, includes } from "lodash";

export default (currentX, currentY) => {
  let gridSize = 300;
  let rowSize = 20;
  let grid = [];
  let x = 1;
  let y = 1;

  let terrains = ["forest", "mountains", "water"];
  let terrainScale = 3; // 1-10
  let enemyScale = 2; // 1-10

  const renderXY = () => {
    let i;
    for (i = 1; i <= gridSize; i++) {
      let obj = {};

      // if 10th column
      if (i % rowSize === 0) {
        obj.x = rowSize;
        obj.y = y;
        grid.push(obj);
        x = 1;
        y += 1;
        continue;
      }

      // if last item
      if (i === gridSize) {
        obj.x = rowSize;
        obj.y = rowSize;
        grid.push(obj);
        break;
      }

      obj.x = x;
      obj.y = y;
      grid.push(obj);
      x += 1;
    }
  };

  const renderBlockTypes = () => {
    // let moveMarker1 = random(0, gridSize);
    // let moveMarker2 = random(0, gridSize);
    // let moveMarker3 = random(0, gridSize);
    // let moveMarkerCount = 0;
    let i;
    for (i = 0; i < grid.length; i++) {
      const player = {
        currentPos: false,
        moveMarker: false
      };

      const isTerrain = random(0, 10) < terrainScale ? true : false;

      // const enemyScale = random(0, 10);
      // const isEnemy = (enemyScale < enemyScale) ? true : false;

      // move-marker
      // if (includes([moveMarker1, moveMarker2, moveMarker3], i)) {
      //   item.type = 'move-marker';
      //   moveMarkerCount ++;
      //   grid[i].item = item;
      //   continue;
      // }

      // terrain
      if (isTerrain && grid[i].x !== currentX && grid[i].y !== currentY) {
        grid[i].player = player;
        grid[i].type = "terrain";
        grid[i].terrain = sample(terrains);
        continue;
      }
      //
      // // enemy
      // if (isEnemy) {
      //   item.type = 'enemy';
      //   grid[i].item = item;
      //   continue;
      // }

      // default
      grid[i].player = player;
      grid[i].type = "default";
      continue;
    }
  };

  const renderPlayer = () => {
    const player = {
      x: currentX,
      y: currentY
    };

    const moveMarkers = {
      top: {
        x: player.x,
        y: player.y - 1
      },
      left: {
        x: player.x - 1,
        y: player.y
      },
      right: {
        x: player.x + 1,
        y: player.y
      },
      bottom: {
        x: player.x,
        y: player.y + 1
      }
    };

    let i;
    for (i = 0; i < grid.length; i++) {
      const type = grid[i].type;
      const x = grid[i].x;
      const y = grid[i].y;

      if (player.x === x && player.y === y && type === "default")
        grid[i].player.currentPos = true;

      if (
        moveMarkers.top.x === x &&
        moveMarkers.top.y === y &&
        type === "default"
      )
        grid[i].player.moveMarker = "top";

      if (
        moveMarkers.left.x === x &&
        moveMarkers.left.y === y &&
        type === "default"
      )
        grid[i].player.moveMarker = "left";

      if (
        moveMarkers.right.x === x &&
        moveMarkers.right.y === y &&
        type === "default"
      )
        grid[i].player.moveMarker = "right";

      if (
        moveMarkers.bottom.x === x &&
        moveMarkers.bottom.y === y &&
        type === "default"
      )
        grid[i].player.moveMarker = "bottom";
    }
  };

  renderXY();
  renderBlockTypes();
  renderPlayer();

  return grid;
};
