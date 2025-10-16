/**
 * Game logic helpers (pure functions) for Tic Tac Toe.
 * These are easily unit testable and reused by components.
 */

import { LINES, PLAYERS } from './constants.js';

// PUBLIC_INTERFACE
export function calculateWinner(board) {
  /** Determine the winner given a board array of length 9.
   * Returns: 'X' | 'O' | null
   */
  for (const [a, b, c] of LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

// PUBLIC_INTERFACE
export function isBoardFull(board) {
  /** Returns true if all cells are non-null. */
  return board.every((cell) => cell !== null);
}

// PUBLIC_INTERFACE
export function getNextPlayer(board, current) {
  /** Returns next player based on current game state. */
  const winner = calculateWinner(board);
  if (winner) return null;
  return current === PLAYERS.X ? PLAYERS.O : PLAYERS.X;
}
