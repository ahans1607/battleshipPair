class Board {
  constructor(numRos, numCols, numShips) {
    // TODO: Set up constructor that sets the numRos, numCols, and numShips.
    this.numRos = numRos;
    this.numCols = numCols;
    this.numShips = numShips;
    // TODO: Set this.grid equal to the return value of the instance method
    // populateGrid().
    this.grid = this.populateGrid()
  }

  populateGrid() {
    // TODO: Using the instance variables numRows, numCols, and numShips, return
    // a 2D array representing the state of the board.
    let gridArray = []
    for (let i = 0; i < this.numRos; i++) {
      const row = []
      for (let j = 0; j < this.numCols; j++) {
        row.push('~')
      }
      gridArray.push(row)
    }
    let count = this.numShips
    while (count > 0) {
      // console.log(count)
      const randomRow = Math.floor(Math.random() * this.numRos)
      const randomCol = Math.floor(Math.random() * this.numCols)
      if (gridArray[randomRow][randomCol] === '~') {
        gridArray[randomRow][randomCol] = 's'
        count--
      }
    }
    return gridArray
  }

  display() {
    // TODO: Print the game board with marks on any spaces that have been fired
    // upon. Be sure not to display the unhit ships to the user! Hint: you might
    // be able to use console.table()
    for (let i = 0; i < this.grid.length; i++) {
      let firstArray = this.grid[i]
      // console.log("i index",firstArray)
      for (let j = 1; j < this.grid.length; j++) {
        let secondArray = this.grid[j]
        console.log("i index", firstArray[i])
        console.log("index j", secondArray[i])
        if (firstArray[i] === 's') {
          firstArray[i] = '~'
        }
        if (secondArray[i] === 's') {
          secondArray[i] = '~'
        }
       }
    }
    console.table(this.grid)
  }

  count() {
    // TODO: Return the number of valid targets (ships) remaining.
  }

  isValidMove(pos) {
    // TODO: Take in an attack position (in the form of an array [row, col]) and
    // return true if the position is a valid move.
  }

  isGameOver() {
    // TODO: Return true if the game is over (when all ships are hit).
  }

  attack() {
    // TODO: Take in an attack position in the form of an array, [row, col], as
    // a parameter. Update this.grid depending on if the position is an empty
    // space or a damaged ship.
  }
}

const check = new Board(5, 5, 3)
console.table(check.grid)
check.display()

module.exports = Board;
