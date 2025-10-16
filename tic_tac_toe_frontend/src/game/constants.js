/**
 * PUBLIC_INTERFACE
 * Game constants for Tic Tac Toe.
 */
export const PLAYERS = {
  X: 'X',
  O: 'O',
};

export const LINES = [
  [0, 1, 2], // rows
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // cols
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // diags
  [2, 4, 6],
];

export const BOARD_SIZE = 9;
