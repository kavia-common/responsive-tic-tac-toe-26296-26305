import React from 'react'

/**
 * PUBLIC_INTERFACE
 * StatusBar - Displays current game status:
 * - Current player (X/O) while in progress
 * - Winner when found
 * - Tie when board is full without a winner
 * Props:
 * - currentPlayer: 'X' | 'O'
 * - winner: 'X' | 'O' | null
 * - isTie: boolean
 */
export default function StatusBar({ currentPlayer, winner, isTie }) {
  let message = ''
  let statusClass = 'status-info'

  if (winner) {
    message = `Winner: ${winner} 🎉`
    statusClass = 'status-success'
  } else if (isTie) {
    message = 'It’s a tie! 🤝'
    statusClass = 'status-warning'
  } else {
    message = `Current Player: ${currentPlayer}`
    statusClass = 'status-info'
  }

  return (
    <div className={`status-bar ${statusClass}`} role="status" aria-live="polite">
      {message}
    </div>
  )
}
