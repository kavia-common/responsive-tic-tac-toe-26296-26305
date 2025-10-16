import React from 'react';
import Square from './Square.jsx';

/**
 * PUBLIC_INTERFACE
 * Board
 * Renders the 3x3 grid of Square components.
 * Props:
 * - board: Array(9) of 'X' | 'O' | null
 * - onSquareClick: (index: number) => void
 * - isDisabled: boolean (disable all when game over)
 */
export default function Board({ board, onSquareClick, isDisabled }) {
  return (
    <section className="board" aria-label="Tic Tac Toe Board" role="grid">
      {board.map((cell, idx) => (
        <Square
          key={idx}
          value={cell}
          onClick={() => onSquareClick(idx)}
          disabled={isDisabled || Boolean(cell)}
          index={idx}
        />
      ))}
    </section>
  );
}
