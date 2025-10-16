import { WIN_LINES } from './constants.js';

// PUBLIC_INTERFACE
export function calculateWinner(board) {
  /** Determine the winner and the winning line for a 3x3 board.
   * Args:
   *  - board: Array(9) with values 'X' | 'O' | null
   * Returns:
   *  - { winner: 'X' | 'O' | null, line: number[] | null }
   */
  for (const [a, b, c] of WIN_LINES) {
    const va = board[a];
    if (va && va === board[b] && va === board[c]) {
      return { winner: va, line: [a, b, c] };
    }
  }
  return { winner: null, line: null };
}

// PUBLIC_INTERFACE
export function isTie(board) {
  /** Returns true if board is full and there is no winner. */
  const { winner } = calculateWinner(board);
  if (winner) return false;
  return board.every((v) => v !== null && v !== undefined);
}
