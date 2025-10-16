import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Square
 * A single cell button in the Tic Tac Toe board.
 * Props:
 * - value: 'X' | 'O' | null
 * - onClick: () => void
 * - disabled: boolean
 * - index: number (0-8) for aria-label
 */
export default function Square({ value, onClick, disabled, index }) {
  return (
    <button
      className={`square ${value ? 'filled' : ''}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={`Square ${index + 1}${value ? `, ${value}` : ''}`}
    >
      {value}
    </button>
  );
}
