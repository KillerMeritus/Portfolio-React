# Phase 4 — Core Components (Part A: Navbar + Hero)

## Goal
Build the two most visible components — the sticky navbar and the full-viewport hero section.

---

## Tasks

### 4A.1 Navbar Component

**Files**: `src/components/Navbar/Navbar.jsx` + `Navbar.module.css`

#### Features
- **Sticky** at top with `position: fixed`, full width
- **Glassmorphism** on scroll — when user scrolls down 50px:
  - `backdrop-filter: blur(12px)`
  - `background: rgba(30, 58, 138, 0.85)` (translucent navy)
  - Subtle bottom shadow
  - Detect scroll with `useEffect` + `window.addEventListener('scroll', ...)`
- **Logo** on the left — "Vivek Sarathe" in Space Grotesk font
- **Nav links** on the right — from `navLinks.js` data
  - Use `react-scroll` `<Link>` for smooth scrolling + `activeClass`
  - Yellow underline on hover (animated width from 0 → 100%)
  - Active section gets highlighted automatically
- **Dark mode toggle** button — moon/sun icon from `react-icons`
- **Hamburger menu** (mobile ≤ 768px):
  - Three-line icon → animates to ✕ on open
  - Slides in a fullscreen or sidebar overlay with nav links
  - Closes on link click or outside click

#### Styling Specs
```
Background: var(--color-primary-900) → glassmorphism on scroll
Text: white
Active link underline: var(--color-accent)
Height: var(--nav-height) = 70px
z-index: 1000
```

---

### 4A.2 Hero Component

**Files**: `src/components/Hero/Hero.jsx` + `Hero.module.css`

#### Features
- **Full viewport height** (`min-height: 100vh`)
- **Background**: gradient `linear-gradient(135deg, #1d4ed8, #1e3a8a)` — same as old but with animated floating shapes/orbs
- **Profile photo**:
  - Circular with gradient border ring (animated rotation)
  - `src/assets/profile_picture.png`
  - Ring: 320px outer, 300px inner, gradient border
- **Heading**: "Hi, I'm Vivek 👋" — `text-5xl`, Space Grotesk
- **Subtitle with typewriter effect**:
  - Text: from `personal.subtitle`
  - Typed out character by character with blinking cursor
  - Use a simple `useEffect` + `setInterval` implementation
- **Two CTA buttons**:
  - "View My Work" → scrolls to `#projects` (yellow filled button)
  - "Download Resume" → opens `/resume.pdf` in new tab (outlined white button)
- **Scroll indicator**: animated bouncing down-arrow at bottom
- **Framer Motion**: fade-in + slide-up on mount (`initial`, `animate`)

#### Styling Specs
```
Padding-top: calc(var(--nav-height) + 2rem) — account for fixed navbar
Text color: white / #e0e7ff for subtitle
CTA primary: var(--color-accent) bg, black text, rounded-full
CTA secondary: transparent bg, white border, white text
```

---

## Files Created
| File | Action |
|---|---|
| `src/components/Navbar/Navbar.jsx` | NEW |
| `src/components/Navbar/Navbar.module.css` | NEW |
| `src/components/Hero/Hero.jsx` | NEW |
| `src/components/Hero/Hero.module.css` | NEW |
| `src/App.jsx` | MODIFY — import and render Navbar + Hero |

## Verification
- [ ] Navbar sticks to top on scroll
- [ ] Glassmorphism blur activates after scrolling 50px
- [ ] Nav links scroll smoothly to sections
- [ ] Dark mode toggle switches theme
- [ ] Hamburger menu works on mobile (resize to 375px)
- [ ] Hero fills full viewport
- [ ] Profile photo renders with gradient ring
- [ ] Typewriter effect types out subtitle
- [ ] Both CTA buttons render and are clickable

## Git Commit
```bash
git add .
git commit -m "Phase 4A: Navbar (sticky, glass, hamburger) + Hero (typewriter, CTAs)"
git push origin main
```
