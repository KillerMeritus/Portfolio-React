# Phase 4B — Core Components (About + Skills)

## Goal
Build the About section with a modern two-column layout and animated skills badges.

---

## Tasks

### 4B.1 About Component

**Files**: `src/components/About/About.jsx` + `About.module.css`

#### Layout
- **Desktop (≥ 768px)**: Two columns
  - Left (60%): Bio paragraphs from `personal.about[]`
  - Right (40%): Skills grid
- **Mobile**: Single column, bio on top, skills below

#### Bio Section
- Section title: "About Me" with decorative underline
- 5 paragraphs rendered from `personal.about` array via `.map()`
- Paragraphs have comfortable line-height (1.7) and spacing
- Text color: `var(--color-text)` for readability

#### Skills Grid
- Rendered from `personal.skills` array
- Each skill = icon + label inside a badge/card
- Icons from `react-icons/si` (SimpleIcons set):
  - `SiPython`, `SiJavascript`, `SiHtml5`, `SiCss3`, `SiReact`, `SiGit`
  - Java → use `FaJava` from `react-icons/fa`
- Badge style:
  - Background: `var(--color-primary-50)` (light) or `var(--color-surface)` (dark)
  - Border: 1px solid `var(--color-primary-100)`
  - Icon colored in brand color (Python blue/yellow, React cyan, etc.)
  - Hover: lift + glow shadow
- Grid: 3 columns on desktop, 2 on mobile

#### Animations (Framer Motion)
- Entire section fades in + slides up on scroll
- Skills badges stagger in one-by-one (0.1s delay each)
- Use `whileInView` + `viewport={{ once: true }}`

---

## Styling Specs
```
Section padding: var(--space-16) var(--space-8)
Max-width: var(--max-width)
Gap between columns: var(--space-12)

Skill badge:
  padding: var(--space-3) var(--space-4)
  border-radius: var(--radius-md)
  font-size: var(--text-sm)
  icon-size: 24px
  transition: transform var(--transition-fast)
```

## Files Created
| File | Action |
|---|---|
| `src/components/About/About.jsx` | NEW |
| `src/components/About/About.module.css` | NEW |
| `src/App.jsx` | MODIFY — add About section |

## Verification
- [ ] Two-column layout on desktop, single on mobile
- [ ] All 5 bio paragraphs render
- [ ] All 7 skill badges render with correct icons
- [ ] Hover effects work on skill badges
- [ ] Scroll animation triggers when section enters viewport
- [ ] Dark mode colours apply correctly

## Git Commit
```bash
git add .
git commit -m "Phase 4B: About section with bio + animated skills badges"
git push origin main
```
