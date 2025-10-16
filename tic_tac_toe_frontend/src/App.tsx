import React, { useMemo, useState } from 'react';
import Board from './components/Board';
import { calculateWinner, isBoardFull, type Board as BoardType, type Player } from './utils/game';

/**
 * PUBLIC_INTERFACE
 * Application shell and game controller for Tic Tac Toe.
 */
export default function App() {
  /** Manages game state, handles moves, computes winner/tie, and supports reset. */

  const [board, setBoard] = useState<BoardType>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner: Player | null = useMemo(() => calculateWinner(board), [board]);
  const tie: boolean = useMemo(() => !winner && isBoardFull(board), [board, winner]);

  const currentPlayer: Player = xIsNext ? 'X' : 'O';

  const statusContent = useMemo(() => {
    if (winner) {
      return (
        <span className="badge badge--success" role="status" aria-live="polite">
          🎉 {winner} wins!
        </span>
      );
    }
    if (tie) {
      return (
        <span className="badge" role="status" aria-live="polite">
          🤝 It’s a tie!
        </span>
      );
    }
    return (
      <span className="badge badge--primary" role="status" aria-live="polite">
        Player {currentPlayer}’s turn
      </span>
    );
  }, [winner, tie, currentPlayer]);

  function handleSquareClick(index: number) {
    // Ignore if game over or square already filled
    if (winner || board[index] !== null) return;

    setBoard(prev => {
      if (prev[index] !== null) return prev;
      const next = prev.slice();
      next[index] = currentPlayer;
      return next;
    });
    setXIsNext(prev => !prev);
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div className="app">
      <main className="container" aria-label="Tic Tac Toe Game">
        <header className="header">
          <h1 className="title">Tic Tac Toe</h1>
          <p className="subtitle">Ocean Professional • Modern, responsive, accessible</p>
        </header>

        <section className="status">
          {statusContent}
        </section>

        <section className="board-wrapper">
          <Board
            board={board}
            onSquareClick={handleSquareClick}
            isDisabled={Boolean(winner)}
          />
        </section>

        <div className="controls">
          <button
            type="button"
            className="btn btn--primary"
            onClick={resetGame}
            aria-label="Restart game"
          >
            Reset Game
          </button>
        </div>

        <p className="footer-note">Tip: Click any empty square to make a move.</p>
      </main>
    </div>
  );
}
