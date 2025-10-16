import { describe, it, expect } from 'vitest';
import { calculateWinner, isTie } from '../src/game/logic.js';

describe('calculateWinner', () => {
  it('detects row win for X', () => {
    const board = ['X', 'X', 'X', null, null, null, null, null, null];
    const res = calculateWinner(board);
    expect(res.winner).toBe('X');
    expect(res.line).toEqual([0,1,2]);
  });

  it('detects column win for O', () => {
    const board = ['O', null, null, 'O', null, null, 'O', null, null];
    const res = calculateWinner(board);
    expect(res.winner).toBe('O');
    expect(res.line).toEqual([0,3,6]);
  });

  it('detects diagonal win', () => {
    const board = ['X', null, null, null, 'X', null, null, null, 'X'];
    const res = calculateWinner(board);
    expect(res.winner).toBe('X');
    expect(res.line).toEqual([0,4,8]);
  });

  it('returns null when no winner', () => {
    const board = [null, null, null, null, null, null, null, null, null];
    const res = calculateWinner(board);
    expect(res.winner).toBe(null);
    expect(res.line).toBe(null);
  });
});

describe('isTie', () => {
  it('returns false for empty board', () => {
    expect(isTie(Array(9).fill(null))).toBe(false);
  });

  it('returns false when there is a winner', () => {
    const board = ['X', 'X', 'X', 'O', 'O', null, null, null, null];
    expect(isTie(board)).toBe(false);
  });

  it('returns true when board is full with no winner', () => {
    // X O X
    // X O O
    // O X X
    const board = ['X','O','X','X','O','O','O','X','X'];
    expect(isTie(board)).toBe(true);
  });
});
