/**
 * Minimal tests for Tic Tac Toe logic.
 * Works with Jest or Vitest (expect API).
 */
import { calculateWinner, isBoardFull } from './logic.js';
import { PLAYERS } from './constants.js';

describe('calculateWinner', () => {
  test('detects row win', () => {
    const board = [
      PLAYERS.X, PLAYERS.X, PLAYERS.X,
      null, null, null,
      null, null, null,
    ];
    expect(calculateWinner(board)).toBe(PLAYERS.X);
  });

  test('detects column win', () => {
    const board = [
      PLAYERS.O, null, null,
      PLAYERS.O, null, null,
      PLAYERS.O, null, null,
    ];
    expect(calculateWinner(board)).toBe(PLAYERS.O);
  });

  test('detects diagonal win', () => {
    const board = [
      PLAYERS.X, null, null,
      null, PLAYERS.X, null,
      null, null, PLAYERS.X,
    ];
    expect(calculateWinner(board)).toBe(PLAYERS.X);
  });

  test('no winner for empty board', () => {
    const board = Array(9).fill(null);
    expect(calculateWinner(board)).toBe(null);
  });
});

describe('isBoardFull', () => {
  test('true when board has no nulls', () => {
    const board = [
      'X','O','X',
      'O','X','O',
      'O','X','O',
    ];
    expect(isBoardFull(board)).toBe(true);
  });

  test('false when at least one null exists', () => {
    const board = [
      'X','O','X',
      'O',null,'O',
      'O','X','O',
    ];
    expect(isBoardFull(board)).toBe(false);
  });
});
