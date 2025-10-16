import React, { useMemo, useState, useCallback } from 'react';
import Board from './components/Board.jsx';
import StatusBar from './components/StatusBar.jsx';
import Controls from './components/Controls.jsx';
import { calculateWinner, isTie as computeTie } from './game/logic.js';
import { PLAYERS } from './game/constants.js';

// PUBLIC_INTERFACE
export default function App() {
  /** App renders the game layout, manages game state, and orchestrates interactions. */
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const { winner, winningLine, tie } = useMemo(() => {
    const result = calculateWinner(board);
    const tieResult = !result.winner && computeTie(board);
    return {
      winner: result.winner,
      winningLine: result.line,
      tie: tieResult
    };
  }, [board]);

  const currentPlayer = isXNext ? PLAYERS.X : PLAYERS.O;

  const handleSquareClick = useCallback((index) => {
    setBoard((prev) => {
      // Prevent move if cell is taken or game ended
      if (prev[index] || winner || tie) return prev;
      const next = prev.slice();
      next[index] = isXNext ? PLAYERS.X : PLAYERS.O;
      return next;
    });
    setIsXNext((prev) => {
      // Only toggle if game not ended after the move; compute on next frame using updated board
      // We optimistically toggle; rendering will gate further moves via winner/tie checks.
      return !prev;
    });
  }, [winner, tie, isXNext]);

  const handleReset = useCallback(() => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  }, []);

  return (
    <div className="app-shell">
      <header className="header">
        <h1 className="title" aria-label="Tic Tac Toe">Tic Tac Toe</h1>
        <p className="subtitle">Ocean Professional</p>
      </header>

      <main className="main">
        <section className="game-card" aria-label="Tic Tac Toe Game">
          <StatusBar
            currentPlayer={currentPlayer}
            winner={winner}
            tie={tie}
          />
          <Board
            board={board}
            onSquareClick={handleSquareClick}
            disabled={Boolean(winner) || tie}
            winningLine={winningLine}
          />
          <Controls onReset={handleReset} />
        </section>
      </main>

      <footer className="footer">
        <small>Built with React + Vite</small>
      </footer>
    </div>
  );
}
