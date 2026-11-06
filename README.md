# LittleLives Landing Page (HTML/CSS/JS)

A static recreation of the **LittleLives** early childhood platform marketing landing page, built with plain **HTML**, **CSS**, and **JavaScript**—no frameworks or build step.

> **Disclaimer:** This is an unofficial clone for learning and portfolio use. It is not affiliated with LittleLives Inc. Branding and copy mirror the reference design only.

## Tech stack

- HTML5
- CSS3 (custom properties, flexbox, grid, media queries)
- Vanilla JavaScript (Intersection Observer, scroll effects, marquee)

Images are loaded from [Pexels](https://www.pexels.com/) via CDN URLs.

## Project structure

```
html-V/
├── index.html   # Page markup and content
├── styles.css   # Layout, theme, responsive styles
├── script.js    # Nav, reveal animations, counters, testimonial marquee
└── README.md
```

## Getting started

### Option 1: Open the file

Open `index.html` in your browser. Some browsers restrict local file behavior; if images or scripts misbehave, use a local server (Option 2).

### Option 2: Local server (recommended)

From this folder:

```bash
python3 -m http.server 8080
```

Then visit [http://localhost:8080](http://localhost:8080).

Other tools work too, for example:

```bash
npx serve .
```

## Features

- Sticky navigation with dropdown menus (desktop) and mobile menu
- Hero section with gradient background and decorative elements
- “Why LittleLives” feature cards with hover effects
- Feature sections with UI mockups and academy banner
- Auto-scrolling testimonial marquee (pauses on hover)
- Animated stat counters when scrolled into view
- Scroll-triggered reveal animations
- Blog grid, demo CTA, and footer with store badges and links

## Browser support

Modern browsers that support CSS Grid, Flexbox, and `IntersectionObserver` (Chrome, Firefox, Safari, Edge).

## Related work

The parent repository also includes a **React + Vite + Tailwind** version of the same design in the project root (`src/`).

## License

Use this project for personal learning and portfolio demos. Do not present it as the official LittleLives product or website.
# LittleLives
