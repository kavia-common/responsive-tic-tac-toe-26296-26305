import React from 'react'

/**
 * PUBLIC_INTERFACE
 * Controls - Action buttons for the game (e.g., Restart).
 * Props:
 * - onRestart: () => void
 */
export default function Controls({ onRestart }) {
  return (
    <div className="controls">
      <button
        type="button"
        className="btn btn-primary"
        onClick={onRestart}
        aria-label="Restart game and start with X"
      >
        Restart
      </button>
    </div>
  )
}
