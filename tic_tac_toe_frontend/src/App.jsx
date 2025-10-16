import React, { useMemo, useState, useCallback } from 'react'
import Board from './components/Board.jsx'
import StatusBar from './components/StatusBar.jsx'
import Controls from './components/Controls.jsx'
import { INITIAL_BOARD, PLAYERS } from './game/constants.js'
import { computeWinner, isBoardFull } from './game/logic.js'

/**
 * PUBLIC_INTERFACE
 * App - Main application shell for the Tic Tac Toe game.
 * Renders title, board, status, and controls. Manages game state and logic.
 */
export default function App() {
  const [board, setBoard] = useState(INITIAL_BOARD)
  const [isXNext, setIsXNext] = useState(true)

  const winner = useMemo(() => computeWinner(board), [board])
  const isTie = useMemo(() => !winner && isBoardFull(board), [board, winner])

  const currentPlayer = isXNext ? PLAYERS.X : PLAYERS.O

  const handleSquareClick = useCallback(
    (index) => {
      // Ignore if already won or square filled
      if (winner || board[index]) return
      const next = board.slice()
      next[index] = currentPlayer
      setBoard(next)
      setIsXNext((prev) => !prev)
    },
    [board, currentPlayer, winner]
  )

  const handleRestart = useCallback(() => {
    setBoard(INITIAL_BOARD)
    setIsXNext(true)
  }, [])

  return (
    <div className="app-root">
      <div className="shell">
        <header className="header">
          <h1 className="title">
            <span className="title-accent" aria-hidden="true">■</span>
            Responsive Tic Tac Toe
          </h1>
          <p className="subtitle">Ocean Professional</p>
        </header>

        <main className="main">
          <div className="panel">
            <div className="panel-gradient" aria-hidden="true"></div>
            <StatusBar
              currentPlayer={currentPlayer}
              winner={winner}
              isTie={isTie}
            />
            <Board
              board={board}
              disabled={Boolean(winner) || isTie}
              onSquareClick={handleSquareClick}
            />
            <Controls onRestart={handleRestart} />
          </div>
        </main>

        <footer className="footer" aria-label="App footer">
          <span className="muted">Built with React + Vite</span>
        </footer>
      </div>
    </div>
  )
}
