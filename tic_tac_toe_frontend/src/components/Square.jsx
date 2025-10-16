import React from 'react'

/**
 * PUBLIC_INTERFACE
 * Square - single cell button for the Tic Tac Toe board.
 * Props:
 * - index: number index in the board (0-8)
 * - value: 'X' | 'O' | null
 * - onClick: () => void
 * - disabled: boolean
 */
export default function Square({ index, value, onClick, disabled }) {
  const labelValue = value ? `, value ${value}` : ', empty'
  return (
    <button
      type="button"
      role="gridcell"
      className={`square ${value === 'X' ? 'square-x' : ''} ${value === 'O' ? 'square-o' : ''}`}
      aria-label={`Square ${index + 1}${labelValue}`}
      aria-disabled={disabled ? 'true' : 'false'}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="square-content" aria-hidden="true">
        {value || ''}
      </span>
    </button>
  )
}
