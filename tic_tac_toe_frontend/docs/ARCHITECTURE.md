# Responsive Tic Tac Toe – Architecture

## Scope
This document covers the frontend-only architecture of the Tic Tac Toe application implemented with React and Vite. It describes component structure, state management, game logic, theming and styling, build tooling, testing recommendations, and key considerations for accessibility and performance.

## High-Level Architecture
The application is a single-page React app rendered into index.html. It has a small, modular component tree with state maintained in the top-level App component. Game rules (win/tie detection) are encapsulated in a pure logic module for simplicity and testability.

## Component Structure
- App (src/App.jsx)
  - Owns game state: board array, turn flag, and derived winner/tie.
  - Composes StatusBar, Board, and Controls.
  - Handlers: handleSquareClick, handleRestart.
- StatusBar (src/components/StatusBar.jsx)
  - Displays current player, winner, or tie, with semantic status for assistive tech.
- Board (src/components/Board.jsx)
  - Renders a 3x3 grid of Square components; delegates click handling to parent.
  - Applies ARIA roles for grid semantics.
- Square (src/components/Square.jsx)
  - Stateless button-like cell with ARIA label describing its index and value.
  - Visual style varies for X/O via classes.
- Controls (src/components/Controls.jsx)
  - Provides a Restart button to reset the game.

Component tree:
- App
  - StatusBar
  - Board
    - Square × 9
  - Controls

## State Management
State resides in App using React hooks:
- board: Array(9) of 'X' | 'O' | null, initialized from INITIAL_BOARD.
- isXNext: boolean, true for X’s turn initially.
- winner: derived via computeWinner(board).
- isTie: derived via !winner && isBoardFull(board).

Update flow:
1. Square click triggers Board → App.onSquareClick(index).
2. App guards against plays when game is over or square is filled.
3. App immutably copies and updates board, flips isXNext, and recomputes derived state.
4. React re-renders StatusBar and Board accordingly.

## Game Logic
Location: src/game/logic.js
- computeWinner(board): Iterates over eight winning line combinations (rows, columns, diagonals) to return 'X', 'O', or null.
- isBoardFull(board): Returns true if no null entries remain.

Constants:
- src/game/constants.js defines PLAYERS (X and O) and INITIAL_BOARD (Array(9).fill(null)).

## UI Layout and Styling
- The layout is centered and constrained for readability. Main visual areas: Title/Subheader, StatusBar, Board, Controls, and Footer.
- Styling is split across:
  - src/styles/theme.css: Theme tokens (colors, radii, shadows, spacing, fonts, focus ring).
  - src/styles/globals.css: Global layout, component classes, responsive behavior.

Ocean Professional theme:
- Primary: #2563EB
- Secondary: #F59E0B
- Error: #EF4444
- Background: #f9fafb
- Surface: #ffffff
- Text: #111827
- Subtle gradient accents provide depth on panels.

Key patterns:
- CSS variables for theme tokens.
- aspect-ratio for Square to maintain perfect squares.
- clamp for responsive typography.
- Subtle shadows and rounded corners for a modern aesthetic.
- Focus ring token ensures visible keyboard focus.

## Accessibility
- Squares are buttons with role="gridcell" and descriptive aria-labels, e.g., “Square 3, value O” or “Square 7, empty”.
- StatusBar uses role="status" with aria-live="polite" so screen readers announce changes.
- Keyboard support: Buttons are focusable and operable via Enter/Space; focus ring is visibly distinct.
- Color usage and contrast align with theme, with attention to readability.

## Performance Considerations
- Component decomposition minimizes re-render surface. State is localized at App; Squares are simple and stateless.
- Winner/tie derived via useMemo; board updates are immutable slices for predictability.
- Vite provides fast dev reloads and optimized builds.

## Build and Tooling
- Tooling: Vite 5, React 18.
- Scripts (package.json):
  - dev: vite --port 3000 --strictPort
  - build: vite build
  - preview: vite preview --port 3000 --strictPort
- No environment variables are required.

## Testing Strategy (Recommended)
- Unit tests for src/game/logic.js:
  - computeWinner: Validate all winning lines for both players and no-winner cases.
  - isBoardFull: True when board has no nulls; false otherwise.
- Component tests:
  - Square/Board interactions: clicking empty square marks it and disables the cell; clicking a filled square has no effect.
  - End states: once winner or tie is reached, further input is ignored; Restart resets correctly.
- Accessibility checks:
  - Verify aria-labels on squares and role="status" announcements on state changes.
  - Keyboard navigation flow across squares and controls.

## Error Handling and Edge Cases
- Clicks on already-filled squares are ignored.
- Clicks after game completion are ignored (board disabled).
- Restart always returns to initial state with X to move.

## Directory Structure
- src/
  - components/
    - Board.jsx
    - Controls.jsx
    - Square.jsx
    - StatusBar.jsx
  - game/
    - constants.js
    - logic.js
  - styles/
    - globals.css
    - theme.css
  - App.jsx
  - main.jsx
- index.html
- vite.config.js
- package.json

## Future Extensions
- Optional: Highlight the winning line after a win.
- Move history and time travel.
- Single-player mode with AI (minimax or heuristic).
- Scoreboard across rounds.
- Theme toggle (light/dark).
