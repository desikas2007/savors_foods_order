# Savoré — Food Website

A clean, modern, fully responsive food website built with plain **HTML**, **CSS**, and **JavaScript**. No frameworks, no build step — just open it and it works.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## Preview

| Desktop | Mobile |
| --- | --- |
| Full-width hero, 3-column menu grid, dark CTA banner | Collapsible hamburger menu, single-column layout |

---

## Live Demo

Open `index.html` in any modern browser — no server required.

```bash
# Or serve it locally (optional)
npx serve .
# or
python -m http.server 8000
```

Then visit `http://localhost:8000`.

---

## Project Structure

```
task_3_portfolio/
├── index.html    # Page markup and content
├── style.css     # All styling, design tokens, responsive rules
├── script.js     # Navigation, scroll effects, reveal animations
└── README.md
```

---

## Features

### Sections
- **Sticky header** — frosted glass effect, gains shadow on scroll
- **Hero** — headline, CTA buttons, stats bar, floating "100% Freshly Cooked" badge
- **Menu** — Breakfast / Lunch / Dinner cards with images, serving times, prices
- **Features** — 4 value propositions with inline SVG icons
- **About** — story, checklist of promises, experience badge
- **Reviews** — 3 testimonial cards with star ratings and avatars
- **Contact CTA** — dark gradient banner with phone and email
- **Footer** — brand, quick links, opening hours, contact info, socials

### Design
- Warm orange + charcoal palette with CSS custom properties (`:root` tokens)
- Playfair Display (headings) + Plus Jakarta Sans (body) via Google Fonts
- Card hover lifts, image zooms, floating animation
- Scroll-reveal animations using `IntersectionObserver`
- `prefers-reduced-motion` support for accessibility

### Responsiveness
| Breakpoint | Behaviour |
| --- | --- |
| `> 1024px` | Full desktop layout |
| `1024px` | Hero, about stack vertically; grids reduce columns |
| `768px` | Hamburger menu appears; all grids become single column |
| `480px` | Full-width buttons, wrapped stats |

### Interactivity (`script.js`)
- Mobile hamburger menu toggle (with `aria-expanded`)
- Close menu on link click or outside click
- Active nav link highlighting based on scroll position
- Header shadow on scroll
- Scroll-reveal for sections
- Auto-updating footer year

---

## Customization

### Colors
Edit the design tokens at the top of `style.css`:

```css
:root {
    --primary: #e8590c;      /* main orange accent */
    --accent:  #f6b83c;      /* stars, highlights */
    --ink:     #16181d;      /* body text */
    --dark:    #14161b;      /* footer / CTA background */
    --bg:      #fffdf9;      /* page background */
}
```

### Content
- **Text & prices** → edit directly in `index.html`
- **Images** → replace the `src` URLs (Unsplash images are used by default)
- **Fonts** → swap the `<link>` in `<head>` and update `--font-body` / `--font-display`
- **Menu cards** → duplicate a `<article class="card">` block to add more meals

---

## Browser Support

| Browser | Status |
| --- | --- |
| Chrome / Edge | ✅ |
| Firefox | ✅ |
| Safari | ✅ |
| Mobile browsers | ✅ |



