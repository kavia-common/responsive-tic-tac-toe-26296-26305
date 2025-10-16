const LINES = [
  // Rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonals
  [0, 4, 8],
  [2, 4, 6]
]

/**
 * PUBLIC_INTERFACE
 * computeWinner - Determines the winner given the board state.
 * @param {Array<string|null>} board - 9-length array representing the grid.
 * @returns {'X'|'O'|null} - Winner symbol or null if no winner.
 */
export function computeWinner(board) {
  for (const [a, b, c] of LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }
  return null
}

/**
 * PUBLIC_INTERFACE
 * isBoardFull - Checks if all squares are filled.
 * @param {Array<string|null>} board
 * @returns {boolean}
 */
export function isBoardFull(board) {
  return board.every((v) => v !== null)
}
