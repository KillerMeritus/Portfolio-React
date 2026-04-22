# Phase 1 — Project Scaffold & Setup

## Goal
Initialize the Vite + React project, install all dependencies, and migrate image assets from the old portfolio into the new structure.

---

## Tasks

### 1.1 Scaffold Vite + React
- Run `npx -y create-vite@latest ./ --no-interactive --template react` inside `/Portfolio-React`
- This creates: `index.html`, `vite.config.js`, `package.json`, `src/`, `public/`
- Clean out default boilerplate files (`App.css` content, `assets/react.svg`, etc.)

### 1.2 Install Dependencies
```bash
npm install
npm install framer-motion react-icons react-scroll
```

| Package | Version (latest) | Purpose |
|---|---|---|
| `framer-motion` | ^11.x | Scroll-triggered animations, page transitions |
| `react-icons` | ^5.x | Icon sets (FontAwesome, Simple Icons) — replaces FA CDN |
| `react-scroll` | ^1.9.x | Smooth scroll + active section detection for navbar |

### 1.3 Create Directory Structure
```
src/
├── assets/
│   └── profile_picture.png       ← copy from old portfolio
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── Projects/
│   ├── Contact/
│   └── Footer/
├── data/
│   └── projects.js               ← will be populated in Phase 3
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

### 1.4 Migrate Assets
- Copy `portfolio-JS/Images/profile_picture.png` → `src/assets/profile_picture.png`
- Copy project screenshots → `public/projects/`:
  - `AnalogWatch.png`
  - `TicTacToe.png`
  - `Calculator.png`
  - `Timer.png`
- Project screenshots go in `public/` so they're served as static files via URL `/projects/AnalogWatch.png`

### 1.5 Clean Boilerplate
- Empty `src/App.css` — will be filled in Phase 2
- Replace `src/App.jsx` with a minimal placeholder:
```jsx
function App() {
  return <div className="app">Portfolio Coming Soon</div>;
}
export default App;
```
- Empty `src/index.css` — will be filled in Phase 2
- Remove `src/assets/react.svg` (default Vite logo)

### 1.6 Add Google Fonts to `index.html`
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
```
- Update `<title>` to `Vivek Sarathe | Portfolio`
- Add meta description

---

## Verification Checklist
- [ ] `npm run dev` starts Vite dev server without errors
- [ ] Browser shows "Portfolio Coming Soon" at `http://localhost:5173`
- [ ] All image files exist in their correct locations
- [ ] `package.json` lists all 3 new dependencies
- [ ] No default Vite/React boilerplate remains (no spinning logo)

---

## Git Commit After Verification
```bash
git add .
git commit -m "Phase 1: Scaffold Vite + React, install deps, migrate assets"
git push origin main
```
