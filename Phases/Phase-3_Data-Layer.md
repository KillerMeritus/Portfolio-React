# Phase 3 — Data Layer

## Goal
Centralized data files so all personal info, projects, and links live in one place.

---

## Tasks

### 3.1 `src/data/projects.js`
Array of 4 project objects, each with: `id`, `title`, `description`, `image`, `github`, `demo`, `tags[]`.
- Fix all descriptions (old portfolio had duplicate wrong text)
- Fix "Calculator" duplicate title → rename to "Countdown Timer"
- Easy to extend — just add objects to the array later

### 3.2 `src/data/personal.js`
Single exported object containing:
- `name`, `greeting`, `subtitle`
- `about[]` — 5 bio paragraphs from old portfolio
- `skills[]` — array of `{ name, icon }` (Python, Java, JS, HTML, CSS, React, Git)
- `social` — `{ email, linkedin, github }` with real URLs
- `resumeUrl` — `/resume.pdf` (PDF to be added to `public/` later)

### 3.3 `src/data/navLinks.js`
Array of `{ label, to }` for the 4 nav sections: Home, About, Projects, Contact.

---

## Why This Pattern?
- Single source of truth — change email once, updates everywhere
- Adding a project = adding one object to array
- Components just `map()` over data, no hardcoded strings

## Files Created
| File | Action |
|---|---|
| `src/data/projects.js` | NEW |
| `src/data/personal.js` | NEW |
| `src/data/navLinks.js` | NEW |

## Verification
- [ ] All 3 files export without syntax errors
- [ ] Dev server runs
- [ ] `console.log` data in App.jsx to confirm imports work

## Git Commit
```bash
git add .
git commit -m "Phase 3: Data layer — projects, personal info, nav links"
git push origin main
```
