# Phase 5 — App Assembly & Smooth Scroll

## Goal
Wire all components together in `App.jsx`, ensure smooth scrolling works between sections, and verify the full page flow.

---

## Tasks

### 5.1 `src/App.jsx` — Full Assembly
```jsx
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

### 5.2 Smooth Scroll Configuration
- `react-scroll` handles scroll behavior via `<Link>` components in Navbar
- Each section component has the matching `id` attribute (hero, about, projects, contact)
- `scroll-padding-top` in CSS accounts for fixed navbar height
- Scroll duration: 500ms, smooth easing

### 5.3 Section IDs & Spacing
Verify each section has:
- Correct `id` matching navLinks data
- Consistent top/bottom padding
- Proper spacing between sections

---

## Files Modified
| File | Action |
|---|---|
| `src/App.jsx` | MODIFY — final assembly |
| `src/App.css` | MODIFY — ensure main layout works |

## Verification
- [ ] Full page renders top-to-bottom: Navbar → Hero → About → Projects → Contact → Footer
- [ ] Clicking each nav link scrolls to correct section
- [ ] Active nav link highlights on scroll
- [ ] No sections overlap or have awkward spacing
- [ ] Page looks correct at 1280px, 768px, and 375px

## Git Commit
```bash
git add .
git commit -m "Phase 5: App assembly — all sections wired, smooth scroll working"
git push origin main
```
