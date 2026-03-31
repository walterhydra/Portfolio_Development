# Milan | Interactive Details Portfolio

This repository contains the source code for an immersive, highly interactive React-based user portfolio. 

Designed with a heavy focus on micro-interactions, clean layout aesthetics, and performant web animations, this project serves as a showcase of technical skills, work experience, certifications, and high-quality Frontend UI work.

## ✨ Key Features

- **Interactive UI Elements:** Features a custom cursor blob (`CursorBlob`), global click-ripple effects, and a dynamic spotlight mechanism.
- **Smooth Animations & Transitions:** Employs `framer-motion` alongside custom `IntersectionObserver` scripts for scroll-triggered elements, number counter animations (stats strip), and text reveal effects.
- **Interactive Sections:** 
  - `Home`: Clean typographic intro with typewriter-like effects.
  - `Stats & Skills`: Engaging capability breakdowns utilizing DOM-manipulated count-ups.
  - `Certifications`: Interactive cards with built-in modal overlays for inline PDF certificate viewing.
  - `Work & Experience`: Comprehensive timelines presenting past projects, hackathons, and roles inline.
- **Intelligent Navigation:** Smooth-scrolling sidebar navigation (`SideDock`), sectional scroll-dots, and auto-detecting active sections based on scroll offset.
- **Full Dark/Light Mode:** Seamlessly configurable themes directly integrated into the CSS variables mechanism within `index.css`.
- **Performant Setup:** Built on top of **React 19** and scaffolded via **Vite** for incredibly fast hot module reloading and small production bundle sizes.

## 🛠️ Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Pure Vanilla CSS (Variables, Grid, Flexbox, Keyframes)
- **Icons:** `lucide-react`
- **Animation Enhancers:** `framer-motion`, `canvas-confetti`

## 🚀 Quick Start Instructions

1. **Clone & Install Dependencies**
   Navigate to the project root and install the NPM packages.
   ```bash
   npm install
   ```

2. **Start the Development Server**
   ```bash
   npm run dev
   ```
   *The app will be available on `http://localhost:5173` (by default).*

3. **Build for Production**
   ```bash
   npm run build
   ```
   *This compiles the application down to static files inside the `/dist` directory, ready to be hosted on Vercel, Netlify, or standard web servers.*

## 📂 Project Structure

```text
react-portfolio/
├── public/                 # Static assets (fonts, PDFs, SVGs)
└── src/
    ├── components/
    │   ├── effects/        # Core micro-interaction logic (Cursor, Loader, ParticleCanvas, etc.)
    │   ├── layout/         # Reusable frame elements (Nav, Footers, Docks)
    │   └── sections/       # Primary content components (About, Certifications, Work, etc.)
    ├── App.jsx             # Main Application root & IntersectionObserver logic
    ├── index.css           # Global typography, color variables, and base utilities
    └── main.jsx            # React root mount
```

## 📝 Customization

This portfolio is meant to serve as a personal hub:
- **Color Theming**: Core colors are managed inside `/src/index.css` via `:root` and `[data-theme="dark"]` rules. Update `--accent` variables to quickly change branding.
- **Certificates**: To update certifications, upload related PDFs to the `/public` folder and modify the object array within `src/components/sections/Certifications.jsx`.

---

*For detailed instructions on configuration, refer to standard `vite` and `react` configuration documents.*
