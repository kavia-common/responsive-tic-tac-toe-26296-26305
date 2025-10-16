# Tic Tac Toe — Ocean Professional

A modern, responsive Tic Tac Toe game built with React and TypeScript. The app features a centered board, turn-based gameplay, win/tie detection, and a polished Ocean Professional theme.

## Features
- Centered 3x3 board with title, status, and reset
- Clickable squares, alternating turns (X ↔ O)
- Win and tie detection with clear status
- Responsive design with smooth transitions and focus rings
- Accessible controls (button roles, aria-pressed, status live regions)

## Tech
- React 18 + TypeScript
- Vite dev server (port 3000)
- ESLint (TS)

## Scripts
- `npm install` — install dependencies
- `npm run dev` — start dev server on http://localhost:3000
- `npm run build` — production build
- `npm run preview` — preview the build

## Project Structure
```
src/
  components/
    Board.tsx
    Square.tsx
  utils/
    game.ts
  App.tsx
  index.tsx
  index.css
public/
  index.html
```

## Accessibility
- Squares are real buttons with `aria-label` and `aria-pressed`
- Status messages use `role="status"` and `aria-live="polite"`
- Reset button is keyboard accessible with visible focus

## Theme
Ocean Professional:
- Primary: #2563EB
- Secondary/Success: #F59E0B
- Error: #EF4444
- Background: #f9fafb
- Surface: #ffffff
- Text: #111827

## Notes
No environment variables needed. To reset the game, click “Reset Game”.
