import React from 'react';
import Square from './Square';
import type { Board as BoardType } from '../utils/game';

export interface BoardProps {
  board: BoardType;
  onSquareClick: (index: number) => void;
  isDisabled?: boolean;
}

/**
 * PUBLIC_INTERFACE
 * The 3x3 Tic Tac Toe board.
 */
export default function Board({ board, onSquareClick, isDisabled }: BoardProps) {
  /** Renders 9 Squares in a responsive grid layout. */
  return (
    <div className="board" role="grid" aria-label="Tic Tac Toe Board">
      {board.map((value, idx) => (
        <Square
          key={idx}
          index={idx}
          value={value}
          onClick={onSquareClick}
          disabled={isDisabled || value !== null}
        />
      ))}
    </div>
  );
}
