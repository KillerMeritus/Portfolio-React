# Phase 4D — Core Components (Contact + Footer)

## Goal
Build the contact section with animated social icons and a polished footer with back-to-top.

---

## Tasks

### 4D.1 Contact Component

**Files**: `src/components/Contact/Contact.jsx` + `Contact.module.css`

#### Layout
- Section title: "Get In Touch" with decorative underline
- Subtitle text: "Feel free to reach out — I'd love to connect!"
- Three social icon links in a row (from `personal.social` data):
  1. **Email** → `mailto:Senv9098@gmail.com` — icon: `FiMail`
  2. **LinkedIn** → opens in new tab — icon: `FiLinkedin`
  3. **GitHub** → opens in new tab — icon: `FiGithub`

#### Icon Card Style
Each icon sits inside a circular card:
```
Size: 64px × 64px
Background: var(--color-surface)
Border: 2px solid var(--color-primary-100)
Border-radius: 50%
Icon size: 28px
Icon color: var(--color-primary-700)

Hover:
  Background: var(--color-primary-700)
  Icon color: white
  Border-color: var(--color-primary-700)
  Transform: scale(1.15)
  Shadow: var(--shadow-glow)
  Transition: var(--transition-base)
```

- Label text below each icon (Email, LinkedIn, GitHub)
- Layout: flexbox, centered, gap `var(--space-10)`

#### Animations
- Icons fade + scale in with stagger (0.15s each)
- `whileInView` with `viewport={{ once: true }}`

---

### 4D.2 Footer Component

**Files**: `src/components/Footer/Footer.jsx` + `Footer.module.css`

#### Features
- Background: `var(--color-primary-900)` (deep navy)
- Text: white, centered
- Content: "© 2025 Vivek Sarathe • Built with curiosity and consistency"
- **Back-to-top button**:
  - Floating button in bottom-right corner (position: fixed)
  - Appears after scrolling down 300px (controlled via scroll event)
  - Arrow-up icon (`FiArrowUp`)
  - Yellow background, dark icon
  - Smooth scrolls to top on click
  - Hover: lift + shadow

---

## Files Created
| File | Action |
|---|---|
| `src/components/Contact/Contact.jsx` | NEW |
| `src/components/Contact/Contact.module.css` | NEW |
| `src/components/Footer/Footer.jsx` | NEW |
| `src/components/Footer/Footer.module.css` | NEW |
| `src/App.jsx` | MODIFY — add Contact + Footer |

## Verification
- [ ] Three social icons render in a row
- [ ] Email link opens mail client
- [ ] LinkedIn/GitHub open correct URLs in new tab
- [ ] Hover effects on icons (color change, scale, glow)
- [ ] Footer renders with correct copyright text
- [ ] Back-to-top button appears after scrolling down
- [ ] Back-to-top smoothly scrolls to top
- [ ] Dark mode colours apply to both sections

## Git Commit
```bash
git add .
git commit -m "Phase 4D: Contact section with social icons + Footer with back-to-top"
git push origin main
```
