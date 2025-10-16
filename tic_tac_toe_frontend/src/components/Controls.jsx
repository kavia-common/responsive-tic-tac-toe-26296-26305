import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Controls
 * Shows action buttons for the game, currently Restart/New Game.
 * Props:
 * - onRestart: () => void
 */
export default function Controls({ onRestart }) {
  return (
    <div className="controls">
      <button className="btn reset-btn" onClick={onRestart} aria-label="Restart Game">
        New Game
      </button>
    </div>
  );
}
