# Architecture — Responsive Tic Tac Toe (React)

## System Overview
The application is a single-container, client-side React app built with Vite. It renders a responsive Tic Tac Toe board with local state and pure game logic utilities. No backend or external services are used. The UI adheres to the Ocean Professional theme and modern styling guidelines.

- Framework: React 18
- Tooling: Vite (dev, build, preview)
- Platform: Web UI served via HTTP(S)
- Container: tic_tac_toe_frontend
- Env: No environment variables required

## Component Architecture
Components are small, focused, and composed in a top-down manner. Game state lives at the application level and is passed down as props.

- App (src/App.jsx)
  - Owns game state (board, isXNext) and derived state (winner, isTie).
  - Orchestrates interactions: handleSquareClick, handleRestart.
  - Renders title, StatusBar, Board, and Controls.
- StatusBar (src/components/StatusBar.jsx)
  - Displays current player, winner, or tie.
  - Applies status styling variants.
- Board (src/components/Board.jsx)
  - Renders a 3x3 grid of Square components.
  - Forwards click actions up via onSquareClick.
- Square (src/components/Square.jsx)
  - Stateless button representing a single cell.
  - Receives value, disabled state, and click handler.
- Controls (src/components/Controls.jsx)
  - Provides Restart action.

Game logic and constants are isolated under src/game:
- constants.js: PLAYERS, INITIAL_BOARD.
- logic.js: computeWinner(board), isBoardFull(board).

### Component Relationships
- App → StatusBar: passes currentPlayer, winner, isTie.
- App → Board → Square: passes board values and click handler.
- App → Controls: passes onRestart.

## State Management
The app uses React hooks for local state:
- board: string[9] (values ‘X’ | ‘O’ | null)
- isXNext: boolean (true for X’s turn)
Derived state via useMemo:
- winner: 'X' | 'O' | null from computeWinner(board)
- isTie: boolean (no winner and board full)

Update flow:
- Square click → App.handleSquareClick(index):
  - Guard if winner exists or cell is occupied.
  - Create new board array (immutable update).
  - Set mark for currentPlayer.
  - Toggle isXNext.
- Restart → App.handleRestart():
  - Reset board to INITIAL_BOARD.
  - Set isXNext to true.

## Data Flow
- Unidirectional top-down data flow from App to children via props.
- Events bubble up through callbacks (Square → Board → App via onSquareClick).

Sequence (simplified):
1. User clicks Square i.
2. Board invokes onSquareClick(i).
3. App validates and updates board, toggles isXNext.
4. Derived winner/isTie recomputed.
5. StatusBar reflects new state; Board re-renders squares.

## UI Structure and Layout
- Centered shell with header (title + subtitle), main panel containing StatusBar, Board, and Controls, and a small footer.
- Board uses CSS Grid with three columns and equal aspect ratio squares.
- Controls center the Restart button below the board.

## Styling Approach
- Theme tokens defined in src/styles/theme.css using CSS custom properties:
  - Primary: #2563EB
  - Secondary: #F59E0B
  - Error: #EF4444
  - Background: #f9fafb
  - Surface: #ffffff
  - Text: #111827
  - Muted, spacing, radii, shadows, focus ring.
- Global styles in src/styles/globals.css apply layout, panel look, board grid, square buttons, transitions, and accessible focus outlines.
- Ocean Professional look: light palette, subtle shadows, rounded corners, gradient accent via .panel-gradient.

## Accessibility
- Role “grid” on Board and “gridcell” on Square buttons.
- ARIA labels for squares indicate index and value (or empty).
- Visible focus ring using theme-defined custom property.
- Keyboard operable: tab to focus, Enter/Space to select; restart is a standard button.
- Status region has role="status" and aria-live="polite" for announcements.

## Build and Deployment
- Dev: npm run dev (Vite dev server on port 3000).
- Build: npm run build creates a production-optimized bundle.
- Preview: npm run preview serves the build locally on port 3000.
- Deployment: Serve the built assets (dist) via any static hosting (e.g., CDN, static site host). No server rendering or APIs required.
- Environment Variables: None required; .env is unused.

## Constraints and Considerations
- All logic is client-only; no persistence beyond the current page session.
- Maintainability is supported by keeping game rules in src/game and making Square stateless.
- Responsiveness: squares preserve 1:1 aspect via CSS aspect-ratio; layout adapts from mobile to desktop.

## Future Evolution (Non-Binding)
- Move history/time travel and a scoreboard.
- Optional AI opponent for single-player mode.
- Animations for winning lines.
- Dark mode theme toggle and theming system expansion.
