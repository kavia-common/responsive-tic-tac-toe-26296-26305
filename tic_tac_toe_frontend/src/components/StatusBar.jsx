import React from 'react';
import { PLAYERS } from '../game/constants.js';

/**
 * PUBLIC_INTERFACE
 * StatusBar
 * Displays the current game status:
 * - Current player's turn
 * - Winner
 * - Tie
 * Props:
 * - current: 'X' | 'O'
 * - winner: 'X' | 'O' | 'Tie' | null
 */
export default function StatusBar({ current, winner }) {
  let text;
  let cls = 'status-text ';

  if (winner) {
    if (winner === 'Tie') {
      text = 'Result: Tie';
      cls += 'status-tie';
    } else {
      text = `Winner: ${winner}`;
      cls += 'status-win';
    }
  } else {
    text = `Current Turn: ${current || PLAYERS.X}`;
    cls += 'status-turn';
  }

  return <p className={cls}>{text}</p>;
}
