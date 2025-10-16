# Tic Tac Toe Frontend (React + Vite)

This is a modern, responsive Tic Tac Toe game built with React and Vite.

## Run locally
- Install dependencies:
  npm install

- Start dev server on port 3000:
  npm run dev

- Build:
  npm run build

- Preview production build on port 3000:
  npm run preview

The app mounts on #root and uses React 18's createRoot. Styles are in src/styles.css and imported from src/index.jsx. The board renders a 3x3 grid of interactive squares. Turns alternate, winner/tie are detected, and the New Game button restarts the game.
