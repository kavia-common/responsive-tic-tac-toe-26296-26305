import React from 'react';

// PUBLIC_INTERFACE
export default function Square({ index, value, onClick, disabled, isWinning }) {
  /** Accessible button representing a single grid cell. */
  const label = `Square ${index + 1}${value ? `, value ${value}` : ', empty'}`;
  return (
    <button
      type="button"
      className={`square ${value ? 'filled' : ''} ${isWinning ? 'winning' : ''}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      role="gridcell"
    >
      <span className="mark" aria-hidden="true">{value || ''}</span>
    </button>
  );
}
