export type Player = 'X' | 'O';
export type Cell = Player | null;
export type Board = Cell[];

/**
 * PUBLIC_INTERFACE
 * Calculates the winner of a Tic Tac Toe board.
 */
export function calculateWinner(board: Board): Player | null {
  /** Determine the winning player (if any) for the given board state. */
  const lines: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

/**
 * PUBLIC_INTERFACE
 * Returns true if the board has no empty cells.
 */
export function isBoardFull(board: Board): boolean {
  /** Check if all cells are filled (no nulls). */
  return board.every((cell) => cell !== null);
}
