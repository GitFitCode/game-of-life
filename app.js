/*
Rules for the Game of Life 
-Any live cell with fewer than two live neighbours dies, as if by underpopulation.
-Any live cell with two or three live neighbours lives on to the next generation.
-Any live cell with more than three live neighbours dies, as if by overpopulation.
-Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

These rules, which compare the behavior of the automaton to real life, can be condensed into the following:

-Any live cell with two or three live neighbours survives.
-Any dead cell with three live neighbours becomes a live cell.
-All other live cells die in the next generation. Similarly, all other dead cells stay dead.
*/

const makeGrid = (gridSize) => {
  let gridArray = [];
  for (let i = 0; i < gridSize; i++) {
    gridArray.push([]);
    for (let j = 0; j < gridSize; j++) {
      // Pushes fresh empty array item to grid
      gridArray[i].push(0);
    }
  }
  return gridArray;
};

const madeGrid = makeGrid(5);

madeGrid[0][0] = 1;
madeGrid[0][1] = 1;
madeGrid[0][2] = 1;
madeGrid[1][0] = 1;
madeGrid[1][2] = 1;
madeGrid[2][0] = 1;
madeGrid[2][1] = 1;
madeGrid[2][2] = 1;

console.log(madeGrid);

/**
 *
 * @param {*} givenGrid
 * get value and indexes of each cell of a grid
 *
 */
const moveForward = (givenGrid) => {
  returnedGrid = [];
  givenGrid.forEach(function (row, rowIndex) {
    returnedGrid.push([]);
    row.forEach(function (cell, cellIndex) {
      let neighborCount = 0;
      if (isAlive(givenGrid, rowIndex - 1, cellIndex - 1) === true) {
        neighborCount = neighborCount + 1;
      }
      if (isAlive(givenGrid, rowIndex - 1, cellIndex) === true) {
        neighborCount = neighborCount + 1;
      }
      if (isAlive(givenGrid, rowIndex - 1, cellIndex + 1) === true) {
        neighborCount = neighborCount + 1;
      }
      if (isAlive(givenGrid, rowIndex, cellIndex - 1) === true) {
        neighborCount = neighborCount + 1;
      }
      if (isAlive(givenGrid, rowIndex, cellIndex + 1) === true) {
        neighborCount = neighborCount + 1;
      }
      if (isAlive(givenGrid, rowIndex + 1, cellIndex - 1) === true) {
        neighborCount = neighborCount + 1;
      }
      if (isAlive(givenGrid, rowIndex + 1, cellIndex) === true) {
        neighborCount = neighborCount + 1;
      }
      if (isAlive(givenGrid, rowIndex + 1, cellIndex + 1) === true) {
        neighborCount = neighborCount + 1;
      } else {
        neighborCount = neighborCount;
      }
      returnedGrid[rowIndex].push(dieOrLive(cell, neighborCount));
    });
  });
  console.log(returnedGrid);
  return returnedGrid;
};

function dieOrLive(cell, neighborCount) {
  if (cell === 1) {
    if (neighborCount < 2) {
      cell = 0;
      return cell;
    }
    if (neighborCount >= 2 && neighborCount < 4) {
      cell = 1;
      return cell;
    }
    if (neighborCount >= 4) {
      cell = 0;
      return cell;
    } else {
      cell = 0;
      return cell;
    }
  }
  if (cell === 0) {
    if (neighborCount === 3) {
      return (cell = 1);
    } else {
      return (cell = 0);
    }
  }
}

/**
 *
 * @param {*} grid
 * @param {*} rowIndex
 * @param {*} columnIndex
 * return if cell is alive or not
 */
function isAlive(grid, rowIndex, columnIndex) {
  const rows = grid.length;
  const firstRow = grid[0];
  const columns = firstRow.length;
  const lastRowIndex = rows - 1;
  const lastColumnIndex = columns - 1;
  if (rowIndex < 0) {
    return false;
  }
  if (columnIndex < 0) {
    return false;
  }
  if (rowIndex > lastRowIndex) {
    return false;
  }
  if (columnIndex > lastColumnIndex) {
    return false;
  }
  const cellValue = grid[rowIndex][columnIndex];
  if (cellValue === 1) {
    return true;
  } else {
    return false;
  }
  // return !!cellValue;
}

function moveForwardAmountOfTimes(moves, grid) {
  for (let i = 1; i <= moves; i++) {
    grid = moveForward(grid);
    moveForward(grid);
  }
}

moveForward(madeGrid);

/*
const makeGrid = (gridSize) => {
  let addElement = document.getElementById("grid");
  for (let i = 1; i <= gridSize; i++) {
    addElement.innerHTML += `<div class="box ${i}"></div>`;
  }
  console.log(addElement.innerHTML);
};
*/
