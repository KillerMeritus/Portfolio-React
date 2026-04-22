# Phase 2 — Design System & Global Styles

## Goal
Establish the visual foundation — CSS custom properties, color palette, typography scale, spacing, dark mode support, and base resets. Everything built in later phases will reference these tokens.

---

## Tasks

### 2.1 `src/index.css` — Design Tokens & Resets

#### Colour Palette (Blue + Yellow — from old portfolio, refined)
```
--color-primary-900: #1e3a8a    ← deep navy (footer, navbar bg)
--color-primary-800: #1e40af
--color-primary-700: #1d4ed8    ← hero gradient end
--color-primary-600: #2563eb    ← links, accents
--color-primary-500: #3b82f6
--color-primary-100: #dbeafe
--color-primary-50:  #eff6ff

--color-accent:      #facc15    ← yellow accent (buttons, highlights)
--color-accent-hover:#fde047    ← lighter yellow on hover

--color-bg:          #F9FAFB    ← page background (light)
--color-surface:     #FFFFFF    ← card backgrounds (light)
--color-text:        #1e293b    ← body text (light)
--color-text-muted:  #64748b    ← secondary text (light)
```

#### Dark Mode Overrides (`[data-theme="dark"]`)
```
--color-bg:          #0f172a
--color-surface:     #1e293b
--color-text:        #f1f5f9
--color-text-muted:  #94a3b8
```

#### Typography Scale
```
--font-body:     'Inter', sans-serif
--font-heading:  'Space Grotesk', sans-serif

--text-xs:   0.75rem    (12px)
--text-sm:   0.875rem   (14px)
--text-base: 1rem       (16px)
--text-lg:   1.125rem   (18px)
--text-xl:   1.25rem    (20px)
--text-2xl:  1.5rem     (24px)
--text-3xl:  1.875rem   (30px)
--text-4xl:  2.25rem    (36px)
--text-5xl:  3rem       (48px)
```

#### Spacing Scale
```
--space-1: 0.25rem
--space-2: 0.5rem
--space-3: 0.75rem
--space-4: 1rem
--space-5: 1.25rem
--space-6: 1.5rem
--space-8: 2rem
--space-10: 2.5rem
--space-12: 3rem
--space-16: 4rem
--space-20: 5rem
```

#### Other Tokens
```
--radius-sm:  8px
--radius-md:  12px
--radius-lg:  18px
--radius-full: 9999px

--shadow-sm:  0 1px 3px rgba(0,0,0,0.1)
--shadow-md:  0 4px 12px rgba(0,0,0,0.1)
--shadow-lg:  0 10px 30px rgba(0,0,0,0.15)
--shadow-glow: 0 0 20px rgba(29,78,216,0.3)

--transition-fast: 0.2s ease
--transition-base: 0.3s ease
--transition-slow: 0.5s ease

--max-width: 1200px
--nav-height: 70px
```

#### CSS Reset
```css
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: var(--nav-height);
}

body {
  font-family: var(--font-body);
  background-color: var(--color-bg);
  color: var(--color-text);
  line-height: 1.6;
  transition: background-color var(--transition-base), color var(--transition-base);
}

h1, h2, h3, h4 {
  font-family: var(--font-heading);
}

a { text-decoration: none; color: inherit; }
img { max-width: 100%; display: block; }
ul { list-style: none; }
```

### 2.2 `src/App.css` — Layout Utilities
```css
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.section {
  padding: var(--space-16) var(--space-8);
  max-width: var(--max-width);
  margin: 0 auto;
  width: 100%;
}

.section-title {
  font-size: var(--text-4xl);
  color: var(--color-primary-700);
  text-align: center;
  margin-bottom: var(--space-12);
  position: relative;
}

/* Decorative underline for section titles */
.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: var(--color-accent);
  border-radius: var(--radius-full);
}

.btn-primary { /* Yellow CTA button */ }
.btn-secondary { /* Outlined button */ }
```

### 2.3 Dark Mode JavaScript Toggle
- Reads `localStorage.getItem('theme')` on mount
- Falls back to `prefers-color-scheme` media query
- Sets `document.documentElement.setAttribute('data-theme', theme)`
- Saves preference to `localStorage`

---

## Files Created/Modified
| File | Action |
|---|---|
| `src/index.css` | REWRITE — full design tokens + reset |
| `src/App.css` | REWRITE — layout utilities + section styles |
| `src/App.jsx` | Minor update — add `className="app"` |

---

## Verification Checklist
- [ ] Dev server runs; page uses Inter font
- [ ] CSS variables visible in browser DevTools on `:root`
- [ ] Adding `data-theme="dark"` to `<html>` in DevTools toggles dark bg/text
- [ ] All spacing, colors, typography tokens defined
- [ ] Section title underline renders correctly (test with a dummy `<h2 class="section-title">Test</h2>`)

---

## Git Commit After Verification
```bash
git add .
git commit -m "Phase 2: Design system — tokens, resets, dark mode, typography"
git push origin main
```
