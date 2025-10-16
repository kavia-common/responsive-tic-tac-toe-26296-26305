import React from 'react';
import type { Player } from '../utils/game';

export interface SquareProps {
  index: number;
  value: Player | null;
  onClick: (index: number) => void;
  disabled?: boolean;
}

/**
 * PUBLIC_INTERFACE
 * A single square button in the Tic Tac Toe grid.
 */
export default function Square({ index, value, onClick, disabled }: SquareProps) {
  /** Renders a button representing one cell; communicates clicks to parent. */
  const label = `Square ${index + 1}, ${value ? `value ${value}` : 'empty'}`;
  const classVariant = value === 'X' ? 'square--x' : value === 'O' ? 'square--o' : '';

  return (
    <button
      type="button"
      className={`square ${classVariant}`}
      aria-label={label}
      aria-pressed={Boolean(value)}
      onClick={() => onClick(index)}
      disabled={disabled}
    >
      {value ?? ''}
    </button>
  );
}
