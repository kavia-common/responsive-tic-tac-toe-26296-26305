# Responsive Tic Tac Toe (React)

[![Status](https://img.shields.io/badge/status-active-brightgreen.svg)](#)
[![UI](https://img.shields.io/badge/UI-Modern%20%7C%20Ocean%20Professional-blue.svg)](#)
[![License](https://img.shields.io/badge/license-MIT-lightgrey.svg)](#)

A modern, responsive Tic Tac Toe game built with React. The app provides an interactive 3x3 board, turn-based play, win/tie detection, and a clean light theme based on the Ocean Professional style.

## 🚀 Features
- Start a new game
- Interactive Tic Tac Toe board
- Turn-based play for two players (X and O)
- Automatic win and tie detection
- Restart game
- Responsive design (mobile → desktop)

## 🧩 Architecture Overview
This is a single-container frontend React application.

- Framework: React (Vite or CRA-style tooling depending on repo)
- Platform: Web UI served via HTTP(S)
- Container: `tic_tac_toe_frontend` running on port 3000

### Component Structure (Typical)
- App: Shell layout; composes the game and header/footer.
- Game: Owns game state, orchestrates gameplay, and communicates with board.
- Board: Renders a 3x3 grid of squares; raises click events to parent.
- Square: Stateless button-like cell.
- StatusBar: Displays current player, win/tie status.
- Controls: Reset/New Game actions.

A possible tree:
```
App
 ├─ Header
 └─ Game
     ├─ StatusBar
     ├─ Board
     │   ├─ Square x9
     └─ Controls
```

### State Management
- Game state lives in `Game` component using React hooks (useState/useMemo).
- Tracked state:
  - `board`: string[9] with values 'X' | 'O' | null
  - `isXNext`: boolean
  - `winner`: 'X' | 'O' | null (derived)
  - `isTie`: boolean (derived if no winner and board full)
- State updates are immutable: clicking a Square triggers a parent handler, which guards against overwriting filled squares or playing after game end.

### Game Logic
- Win detection checks all 8 lines (rows/cols/diagonals).
- Tie detection when no nulls remain and no winner.
- Restart resets `board` and `isXNext`.

ASCII diagram of winning lines:
```
Indices:   0 | 1 | 2      Wins:
          ---+---+---     - Rows:    [0,1,2], [3,4,5], [6,7,8]
           3 | 4 | 5      - Columns: [0,3,6], [1,4,7], [2,5,8]
          ---+---+---     - Diags:   [0,4,8], [2,4,6]
           6 | 7 | 8
```

### Rendering Flow
1. User clicks a Square
2. Game validates move and updates board
3. Derived state recomputed (winner/tie)
4. StatusBar shows Player X/O or Winner/Tie
5. Controls allow Restart

Sequence (simplified):
```
[Square.onClick] → [Game.handleMove]
    ├─ guard: ignore if winner or cell filled
    ├─ next board state (immutable copy)
    ├─ compute winner / tie from new board
    └─ setState({ board, isXNext, winner, isTie }) → re-render
```

## 🎨 Design & Theme
Style guide: Ocean Professional (Modern)
- Primary: #2563EB
- Secondary/Success: #F59E0B
- Error: #EF4444
- Background: #f9fafb
- Surface: #ffffff
- Text: #111827
- Gradient accents: from-blue-500/10 to-gray-50

UI guidelines:
- Light, modern aesthetic
- Subtle shadows, rounded corners
- Smooth transitions on hover/focus
- Accent highlights for interactive elements

## 📱 Responsiveness
- Grid scales fluidly with viewport; squares maintain aspect ratio.
- Layout is centered with max-width constraints and padding.
- Touch-friendly hit targets and accessible focus states.

Approach:
- Use CSS grid or flexbox for the 3x3 layout.
- Maintain square aspect ratio via intrinsic ratio (e.g., padding-top) or aspect-ratio property.
- Typography scales slightly across breakpoints.

## 🗂️ Suggested Folder Structure
```
src/
  components/
    Board.jsx
    Square.jsx
    StatusBar.jsx
    Controls.jsx
  game/
    logic.js        # winner/tie helpers
    constants.js
  styles/
    theme.css       # color variables from style guide
    globals.css
  App.jsx
  main.jsx
public/
README.md
```

Notes:
- Keep game rules in `game/logic.js` for easy unit testing.
- Keep presentation and interaction in `components/`.

## 🔧 Scripts
Common scripts (your tooling may vary):
- `npm install` – install dependencies
- `npm run dev` – start local dev server (preview typically on http://localhost:3000)
- `npm run build` – production build
- `npm run preview` – preview production build

## ⚙️ Environment Variables
- None required for current functionality.
- If added in the future, document them here and in `.env.example`.

## ▶️ Running Locally
1. Ensure Node.js LTS installed
2. Install: `npm install`
3. Dev server: `npm run dev`
4. Open http://localhost:3000

Note: In this workspace, previews may be managed automatically by your environment. You can start/stop previews from your UI; no manual process is needed in code.

## ✅ Accessibility
- Semantic buttons for squares with ARIA labels (e.g., "Square 1, value X")
- Focus outlines and sufficient color contrast
- Keyboard interaction supported for moves and restart

## 🧪 Testing (Optional)
- Unit test `game/logic.js` (win/tie detection)
- Component tests for Board/Square interactions
- Snapshot tests for UI states (in-progress, win, tie)

Example test ideas:
- computeWinner returns X for [0,1,2]
- computeWinner returns null for no winning line
- clicking occupied square does not change state
- restarting clears board and sets `isXNext` true

## 🔮 Future Improvements
- Move history and time travel
- Scoreboard across rounds
- Animations for winning line
- Single-player vs Computer (minimax)
- Theming switch (light/dark)

## 🛠️ Tech Stack
- React
- CSS Modules/Tailwind (project-dependent)
- JavaScript (or TypeScript if configured)

## 🤝 Contribution
- Use conventional commits (e.g., feat:, fix:, chore:)
- Keep components small and focused
- Prefer pure functions in `game/`
- Add or update tests for new logic

## 📄 License
MIT (or add your preferred license)
