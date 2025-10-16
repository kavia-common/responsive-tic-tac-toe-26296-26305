import React from 'react';

// PUBLIC_INTERFACE
export default function Controls({ onReset }) {
  /** Provides a Restart/New Game control. */
  return (
    <div className="controls">
      <button
        type="button"
        className="btn btn-primary"
        onClick={onReset}
        aria-label="Restart game"
      >
        Restart
      </button>
    </div>
  );
}
