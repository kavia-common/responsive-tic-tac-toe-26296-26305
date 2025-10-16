# Responsive Tic Tac Toe (React + Vite)

A modern, responsive Tic Tac Toe app built with React and Vite. It features a 3x3 interactive board, turn-based play, winner/tie detection with a highlighted winning line, restart functionality, and an Ocean Professional light theme.

## Features
- Turn-based play for X and O
- Win and tie detection
- Winning line highlighting
- Restart/New Game
- Accessible keyboard and screen reader support
- Responsive design (mobile to desktop)

## Tech
- React 18
- Vite 5 (dev server on port 3000)
- Vitest + Testing Library for unit tests
- No environment variables required

## Scripts
- `npm install` – install dependencies
- `npm run dev` – start dev server at http://localhost:3000
- `npm run build` – production build
- `npm run preview` – preview production build at port 3000
- `npm test` – run unit tests (Vitest)

## Run locally
1. Ensure Node.js (LTS) is installed.
2. From the `tic_tac_toe_frontend` directory:
   - `npm install`
   - `npm run dev`
3. Open http://localhost:3000

## Testing
- Unit tests cover game logic (`calculateWinner`, `isTie`) in `tests/logic.test.js`.
- Run tests with `npm test`.

## Accessibility
- Squares are real buttons with clear focus outlines.
- `aria-label` describes square index and value.
- Status text uses `aria-live="polite"` to announce turn/win/tie.

## Structure
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
public/
  favicon.svg
index.html
vite.config.js
vitest.setup.js
```

## Theme (Ocean Professional)
- Primary: #2563EB
- Secondary/Success: #F59E0B
- Error: #EF4444
- Background: #f9fafb
- Surface: #ffffff
- Text: #111827
- Subtle shadows, rounded corners, gradient accents, and smooth transitions.

License: MIT
