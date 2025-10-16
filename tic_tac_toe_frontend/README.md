# Responsive Tic Tac Toe (Vite + React)

A modern, responsive Tic Tac Toe game built with Vite + React. The app provides an interactive 3x3 board, turn-based play, win/tie detection, and a clean light theme based on the Ocean Professional style.

## Features
- Start a new game
- Interactive Tic Tac Toe board
- Turn-based play for two players (X and O)
- Automatic win and tie detection
- Restart game
- Responsive design (mobile → desktop)
- Accessible focus ring, ARIA labels

## Tech Stack
- Vite
- React 18
- Vanilla CSS

## Getting Started

Prerequisites:
- Node.js LTS (>=18 recommended)
- npm

Install dependencies:
```bash
npm install
```

Start the dev server (port 3000):
```bash
npm run dev
```
Open http://localhost:3000

Build for production:
```bash
npm run build
```

Preview the production build (port 3000):
```bash
npm run preview
```

## Project Structure
```
src/
  components/
    Board.jsx
    Controls.jsx
    Square.jsx
    StatusBar.jsx
  game/
    constants.js
    logic.js
  styles/
    globals.css
    theme.css
  App.jsx
  main.jsx
index.html
vite.config.js
package.json
```

## Accessibility
- Semantic buttons for squares with ARIA labels (e.g., "Square 1, value X")
- Focus outlines with sufficient contrast
- Keyboard interaction supported for moves and restart

## Theme
Ocean Professional
- Primary: #2563EB
- Secondary: #F59E0B
- Error: #EF4444
- Background: #f9fafb
- Surface: #ffffff
- Text: #111827
- Gradient accents: from-blue-500/10 to-gray-50
