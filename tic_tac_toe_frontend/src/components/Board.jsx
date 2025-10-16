import React from 'react';
import Square from './Square.jsx';

// PUBLIC_INTERFACE
export default function Board({ board, onSquareClick, disabled, winningLine }) {
  /** Renders a 3x3 grid of squares; highlights winning line when present. */
  const renderSquare = (i) => {
    const isWinning = winningLine ? winningLine.includes(i) : false;
    return (
      <Square
        key={i}
        index={i}
        value={board[i]}
        onClick={() => onSquareClick(i)}
        disabled={disabled || Boolean(board[i]) || false}
        isWinning={isWinning}
      />
    );
  };

  return (
    <div className="board" role="grid" aria-label="Tic Tac Toe Board">
      {[0, 1, 2].map((r) => (
        <div className="board-row" role="row" key={r}>
          {[0, 1, 2].map((c) => {
            const i = r * 3 + c;
            return renderSquare(i);
          })}
        </div>
      ))}
    </div>
  );
}
