# Phase 4C — Core Components (Projects)

## Goal
Build the project showcase grid with animated cards, tech tags, and hover effects.

---

## Tasks

### 4C.1 Projects Component

**Files**: `src/components/Projects/Projects.jsx` + `Projects.module.css`

#### Layout
- Section title: "Projects" with decorative underline
- Responsive grid:
  - Desktop: 2 columns
  - Tablet: 2 columns (smaller)
  - Mobile: 1 column
- Gap: `var(--space-8)`
- Maps over `projects` array from `data/projects.js`

### 4C.2 ProjectCard Component

**File**: `src/components/Projects/ProjectCard.jsx`

#### Card Structure
```
┌──────────────────────────┐
│     [Project Image]      │  ← image with hover zoom
│                          │
├──────────────────────────┤
│  Project Title           │
│  Description text...     │
│                          │
│  [JS] [CSS] [Canvas]    │  ← tech tag pills
│                          │
│  [Code]      [Demo]     │  ← action buttons
└──────────────────────────┘
```

#### Features
- **Image**: project screenshot, `border-radius` top corners, `object-fit: cover`
  - On hover: subtle zoom (scale 1.05) with overflow hidden
- **Title**: Space Grotesk, `var(--text-xl)`
- **Description**: `var(--text-sm)`, `var(--color-text-muted)`, 2-3 lines
- **Tags**: small pills with tech names
  - Background: `var(--color-primary-50)`
  - Text: `var(--color-primary-700)`
  - Border-radius: full
- **Buttons**: "Code" + "Demo"
  - Code: outlined style with GitHub icon
  - Demo: filled yellow with external link icon
  - Icons from `react-icons` (`FiGithub`, `FiExternalLink`)
- **Card style**:
  - Background: `var(--color-surface)`
  - Border: 1px solid `var(--color-primary-100)` (subtle)
  - Border-radius: `var(--radius-lg)`
  - Shadow: `var(--shadow-md)`
  - Hover: lift (-8px) + stronger shadow + subtle primary glow

#### Animations (Framer Motion)
- Cards stagger in on scroll (0.15s delay between each)
- `whileInView` with `viewport={{ once: true }}`
- Individual card hover: `whileHover={{ y: -8 }}`

---

## Files Created
| File | Action |
|---|---|
| `src/components/Projects/Projects.jsx` | NEW |
| `src/components/Projects/ProjectCard.jsx` | NEW |
| `src/components/Projects/Projects.module.css` | NEW |
| `src/App.jsx` | MODIFY — add Projects section |

## Verification
- [ ] All 4 project cards render with correct data
- [ ] Images load from `/projects/*.png`
- [ ] Tags display correctly for each project
- [ ] Code links open GitHub repos
- [ ] Demo links open live sites
- [ ] Hover zoom on images works
- [ ] Card lift on hover works
- [ ] Stagger animation on scroll
- [ ] Responsive: 2 cols → 1 col on mobile

## Git Commit
```bash
git add .
git commit -m "Phase 4C: Projects grid with animated cards and tech tags"
git push origin main
```
