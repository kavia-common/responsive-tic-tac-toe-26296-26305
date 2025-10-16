import React from 'react'
import Square from './Square.jsx'

/**
 * PUBLIC_INTERFACE
 * Board component renders a 3x3 grid of squares.
 * Props:
 * - board: array of 9 items ('X' | 'O' | null)
 * - onSquareClick: function(index) -> void
 * - disabled: boolean to disable interaction when game over
 */
export default function Board({ board, onSquareClick, disabled }) {
  return (
    <div
      className="board"
      role="grid"
      aria-label="Tic Tac Toe board, 3 by 3 grid"
    >
      {board.map((value, idx) => (
        <Square
          key={idx}
          index={idx}
          value={value}
          onClick={() => onSquareClick(idx)}
          disabled={disabled || Boolean(value)}
        />
      ))}
    </div>
  )
}
