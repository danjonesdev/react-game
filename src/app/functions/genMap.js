import { sample, random, includes } from 'lodash';

const genMap = {
  gridSize: 300,
  rowSize: 20,
  grid: [],
  x: 1,
  y: 1,
  terrainTypes: ['forest', 'mountains', 'water'],
  terrainScale: 3, // 1-10
  enemyScale: 2, // 1-10

  init() {
    return genMap.render();
  },

  handleXY() {
    for (var i = 1; i <= genMap.gridSize; i++) {
      let obj = {}

      // if 10th column
      if ((i % genMap.rowSize) === 0) {
        obj.x = genMap.rowSize;
        obj.y = genMap.y;
        genMap.grid.push(obj);
        genMap.x = 1;
        genMap.y += 1;
        continue;
      }

      // if last item
      if (i === genMap.gridSize) {
        obj.x = genMap.rowSize;
        obj.y = genMap.rowSize;
        genMap.grid.push(obj);
        break;
      }

      obj.x = genMap.x;
      obj.y = genMap.y;
      genMap.grid.push(obj);
      genMap.x += 1;
    }
  },

  handleItem() {
    let moveMarker1 = random(0, genMap.gridSize);
    let moveMarker2 = random(0, genMap.gridSize);
    let moveMarker3 = random(0, genMap.gridSize);
    let moveMarkerCount = 0;

    for (var i = 0; i < genMap.grid.length; i++) {
      let item = {};

      const defaultScale = random(0, 10);
      const isTerrain = (defaultScale < genMap.terrainScale) ? true : false;

      const enemyScale = random(0, 10);
      const isEnemy = (enemyScale < genMap.enemyScale) ? true : false;

      // move-marker
      if (includes([moveMarker1, moveMarker2, moveMarker3], i)) {
        item.type = 'move-marker';
        moveMarkerCount ++;
        genMap.grid[i].item = item;
        continue;
      }

      // terrain
      if (isTerrain) {
        item.type = 'terrain';
        item.terrain = sample(genMap.terrainTypes);
        genMap.grid[i].item = item;
        continue;
      }

      // enemy
      if (isEnemy) {
        item.type = 'enemy';
        genMap.grid[i].item = item;
        continue;
      }


      // default
      item.type = 'default';
      genMap.grid[i].item = item;
      continue;
    }
  },

  render() {
    genMap.handleXY();
    genMap.handleItem();

    return genMap.grid;
  },
}

export default genMap.init;
