import React, { useState } from 'react';

/**
 * PUBLIC_INTERFACE
 * App
 * A minimal Tic Tac Toe scaffold providing:
 * - Title and current player indicator
 * - A 3x3 board with buttons
 * - Reset button
 * - Placeholder winner detection logic (to be expanded)
 *
 * Returns:
 *  A responsive, centered board UI with Ocean Professional theme classes applied via styles.css.
 */
export default function App() {
  // Board is an array of 9 cells: null | 'X' | 'O'
  const [board, setBoard] = useState(Array(9).fill(null));
  const [current, setCurrent] = useState('X');
  const [winner, setWinner] = useState(null);

  // Minimal placeholder for winner detection (TODO: implement full logic)
  const checkWinner = (nextBoard) => {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8], // rows
      [0,3,6],[1,4,7],[2,5,8], // cols
      [0,4,8],[2,4,6],         // diags
    ];
    for (const [a,b,c] of lines) {
      if (nextBoard[a] && nextBoard[a] === nextBoard[b] && nextBoard[a] === nextBoard[c]) {
        return nextBoard[a];
      }
    }
    return null;
  };

  const isBoardFull = (b) => b.every(cell => cell !== null);

  const handleClick = (idx) => {
    if (winner || board[idx]) return; // ignore if game over or cell filled
    const next = board.slice();
    next[idx] = current;
    const maybeWinner = checkWinner(next);
    setBoard(next);
    if (maybeWinner) {
      setWinner(maybeWinner);
    } else if (isBoardFull(next)) {
      setWinner('Tie'); // indicate tie in winner state for simplicity
    } else {
      setCurrent(current === 'X' ? 'O' : 'X');
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrent('X');
    setWinner(null);
  };

  const statusText = winner
    ? winner === 'Tie'
      ? 'Result: Tie'
      : `Winner: ${winner}`
    : `Current Turn: ${current}`;

  return (
    <div className="app-root">
      <main className="app-container">
        <header className="app-header">
          <h1 className="app-title">Tic Tac Toe</h1>
          <p className={`status-text ${winner ? (winner === 'Tie' ? 'status-tie' : 'status-win') : 'status-turn'}`}>
            {statusText}
          </p>
        </header>

        <section className="board" aria-label="Tic Tac Toe Board">
          {board.map((cell, idx) => (
            <button
              key={idx}
              className={`square ${cell ? 'filled' : ''}`}
              onClick={() => handleClick(idx)}
              aria-label={`Square ${idx + 1}${cell ? `, ${cell}` : ''}`}
            >
              {cell}
            </button>
          ))}
        </section>

        <div className="controls">
          <button className="btn reset-btn" onClick={resetGame}>
            Reset
          </button>
        </div>

        {/* TODO: Expand logic with robust winner/tie detection, animations, and accessibility improvements */}
      </main>
    </div>
  );
}
