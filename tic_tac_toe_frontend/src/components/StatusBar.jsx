import React from 'react';

// PUBLIC_INTERFACE
export default function StatusBar({ currentPlayer, winner, tie }) {
  /** Displays current game status: turn, winner, or tie. Uses aria-live for announcements. */
  let text = `Player ${currentPlayer}'s turn`;
  if (winner) text = `Player ${winner} wins!`;
  else if (tie) text = "It's a tie!";
  return (
    <div className="statusbar" aria-live="polite" aria-atomic="true">
      {text}
    </div>
  );
}
