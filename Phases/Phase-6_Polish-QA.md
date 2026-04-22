# Phase 6 — Polish, Animations & Final QA

## Goal
Add the finishing touches — smooth scroll animations, micro-interactions, dark mode refinement, responsive edge-case fixes, SEO meta tags, and final visual QA across devices.

---

## Tasks

### 6.1 Framer Motion — Scroll Animations Audit
Review every section and ensure:
- **Hero**: fade-in + slide-up on mount (already done in Phase 4A)
- **About**: bio fades in from left, skills grid from right
- **Projects**: cards stagger in from bottom with 0.15s delay
- **Contact**: icons scale + fade in with stagger
- All use `whileInView` with `viewport={{ once: true, amount: 0.2 }}`
- No janky flashes — set `initial` states properly

### 6.2 Micro-Interactions Polish
- Navbar links: yellow underline width animation (0 → 100%)
- CTA buttons: hover lift + shadow increase
- Project card images: scale(1.05) on hover with overflow hidden
- Skill badges: subtle lift on hover
- Social icons: scale + glow on hover
- Back-to-top button: bounce animation

### 6.3 Dark Mode Refinement
- All components respect `data-theme="dark"` CSS variables
- Project cards: darker surface, lighter text
- Skill badges: dark surface with appropriate contrast
- No hardcoded colors remaining (all use CSS vars)
- Toggle animation: smooth icon transition (moon ↔ sun)

### 6.4 Responsive Edge Cases
Test at breakpoints: 375px, 425px, 768px, 1024px, 1280px, 1440px
- [ ] Navbar hamburger menu at ≤768px
- [ ] Hero text doesn't overflow on small screens
- [ ] Profile photo scales appropriately
- [ ] About section stacks on mobile
- [ ] Project grid goes to 1 column on mobile
- [ ] Contact icons wrap correctly
- [ ] Footer text doesn't overflow
- [ ] No horizontal scrollbar at any breakpoint

### 6.5 SEO & Meta Tags
In `index.html`:
```html
<title>Vivek Sarathe | Portfolio</title>
<meta name="description" content="Portfolio of Vivek Sarathe — first-year student exploring AI, ML, and web development. View projects, skills, and get in touch.">
<meta name="author" content="Vivek Sarathe">
<meta property="og:title" content="Vivek Sarathe | Portfolio">
<meta property="og:description" content="AI & ML enthusiast. Explore my projects and skills.">
<meta property="og:type" content="website">
```

### 6.6 Performance Quick Checks
- Images: ensure project screenshots aren't oversized (resize if >500KB)
- Fonts: `display=swap` already set on Google Fonts link
- CSS transitions use `transform`/`opacity` only (GPU-composited)

### 6.7 Final Visual QA
Run `npm run dev` and manually check:
- [ ] Full page scroll experience is smooth
- [ ] All animations trigger correctly
- [ ] Dark mode toggle works end-to-end
- [ ] All external links open correctly
- [ ] No console errors or warnings
- [ ] Visual quality matches a premium portfolio standard

---

## Files Modified
| File | Action |
|---|---|
| Various component CSS modules | TWEAK — animation + responsive fixes |
| `index.html` | MODIFY — SEO meta tags |
| Component JSX files | TWEAK — animation props |

## Git Commit
```bash
git add .
git commit -m "Phase 6: Polish — animations, dark mode, responsive, SEO, final QA"
git push origin main
```

---

## 🎉 Portfolio Complete!
After Phase 6, the portfolio is production-ready. Future additions:
- Drop your `resume.pdf` into `public/`
- Add new projects to `src/data/projects.js`
- Deploy to Vercel: `npx vercel --prod`
