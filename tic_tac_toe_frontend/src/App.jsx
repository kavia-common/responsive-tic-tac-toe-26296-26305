import React, { useState, useMemo } from 'react';
import { PLAYERS, BOARD_SIZE } from './game/constants.js';
import { calculateWinner, isBoardFull } from './game/logic.js';
import Board from './components/Board.jsx';
import StatusBar from './components/StatusBar.jsx';
import Controls from './components/Controls.jsx';

/**
 * PUBLIC_INTERFACE
 * App
 * A complete Tic Tac Toe UI:
 * - Interactive 3x3 board with click-to-place X/O and disabled occupied cells
 * - Turn indicator and status banner (winner/tie)
 * - Win detection and tie detection
 * - Restart/New Game button resets state
 * - Responsive styling aligned with Ocean Professional theme
 *
 * Returns:
 *  A responsive, centered board UI with Ocean Professional theme classes applied via styles.css.
 */
export default function App() {
  // Board is an array of 9 cells: null | 'X' | 'O'
  const [board, setBoard] = useState(Array(BOARD_SIZE).fill(null));
  const [current, setCurrent] = useState(PLAYERS.X);
  const [winner, setWinner] = useState(null); // 'X' | 'O' | 'Tie' | null

  const gameOver = useMemo(() => Boolean(winner), [winner]);

  const handleSquareClick = (idx) => {
    if (gameOver || board[idx]) return; // ignore if game over or cell filled

    const next = board.slice();
    next[idx] = current;

    const maybeWinner = calculateWinner(next);
    setBoard(next);

    if (maybeWinner) {
      setWinner(maybeWinner);
      return;
    }

    if (isBoardFull(next)) {
      setWinner('Tie');
      return;
    }

    setCurrent(current === PLAYERS.X ? PLAYERS.O : PLAYERS.X);
  };

  const handleRestart = () => {
    setBoard(Array(BOARD_SIZE).fill(null));
    setCurrent(PLAYERS.X);
    setWinner(null);
  };

  return (
    <div className="app-root">
      <main className="app-container">
        <header className="app-header">
          <h1 className="app-title">Tic Tac Toe</h1>
          <StatusBar current={current} winner={winner} />
        </header>

        <Board
          board={board}
          onSquareClick={handleSquareClick}
          isDisabled={gameOver}
        />

        <Controls onRestart={handleRestart} />
      </main>
    </div>
  );
}
