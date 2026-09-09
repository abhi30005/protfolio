# Portfolio Frontend Documentation

This document outlines the design system, structure, layout, color palette, component architecture, and motion semantics used in the frontend of this portfolio application. 

The project is built using **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## 🎨 Design System & Aesthetics

The application employs a highly modern, "dark-mode only" aesthetic focusing on depth, glowing accents, and glassmorphism.

### Color Palette
- **Backgrounds**: Deep near-black (`#050505`) to create a canvas for glowing elements.
- **Surface & Cards**: Elevated dark gray (`#121217`) with subtle white borders (`rgba(255, 255, 255, 0.08)`).
- **Typography**: 
  - Primary Text: Off-white (`#f3f4f6`)
  - Muted Text: Gray (`#9ca3af`)
- **Accents (Neon/Glow)**:
  - Indigo: `#4f46e5` / `#818cf8`
  - Violet: `#8b5cf6`
  - Blue: `#2563eb`
  - Cyan: `#06b6d4`

### Typography
- Primary Font Family: **Inter** (sans-serif)
- Headers (`h1` - `h6`) utilize `font-semibold` and tight tracking for a sharp, modern look.

### UI Effects
- **Glassmorphism**: Achieved via custom Tailwind utilities (`.glass`, `.glass-light`) combining background opacity, high blur (`backdrop-blur-xl`), and subtle white borders.
- **Text Gradients**: Uses a sweep from Indigo to Violet to Cyan (`.text-gradient`).
- **Base Grid**: A subtle CSS radial-gradient grid pattern applied globally to the body for texture.
- **Custom Cursor**: The default browser cursor is disabled in favor of a custom, interactive tracker.

---

## 🏗️ Structure & Layout

The app's structure is orchestrated inside `App.jsx`, providing a stacked layout with interactive overlays.

### Global Overlays (Always Present)
These components exist outside the main scrolling flow to provide continuous interaction:
1. `<CustomCursor />` - Tracks mouse movement with a custom design.
2. `<GlowBackground />` - Dynamic, moving ambient light blobs in the background.
3. `<ScrollProgress />` - Indicator for page scroll depth.
4. `<AIAssistant />` - Floating, interactive AI widget.

### Page Flow
The user experiences a linear narrative, starting with an intro screen that transitions into the main portfolio:
1. **Intro Screen (`<IntroScreen />`)**: A loading/welcome animation that must complete before showing the main site.
2. **Navbar (`<Navbar />`)**: Sticky or fixed navigation at the top.
3. **Main Content Sections**: Sequentially ordered and wrapped in scroll-triggered transitions:
   - `Hero`
   - `JourneyTimeline`
   - `Transformation`
   - `Learning`
   - `Projects`
   - `Skills`
   - `About`
   - `Contact`
4. **Footer (`<Footer />`)**: Standard closing component.

---

## 🧩 Component Architecture

The `src/components` directory contains highly modularized parts of the UI:

- **Section Components**: `Hero.jsx`, `Projects.jsx`, `Skills.jsx`, `Contact.jsx`, `About.jsx`, etc. These represent the major distinct areas of the scrolling page.
- **Micro-Interactions**: 
  - `Magnetic.jsx`: A wrapper that makes its children "stick" and pull towards the cursor.
  - `TiltCard.jsx`: Cards that tilt based on mouse hover position.
  - `ProfileCard.jsx`, `ProjectModal.jsx`: Specialized UI elements for detailed views.
- **Wrappers**:
  - `ChapterTransition.jsx`: Wraps major sections to animate them into view as the user scrolls down.

---

## 🎬 Motion & Animation

Animations are heavily utilized to create a "wow" factor, implemented primarily via **Framer Motion**.

1. **Page Load/Intro**: `<AnimatePresence mode="wait">` ensures smooth mounting/unmounting between the `IntroScreen` and the main application. The main app fades in over 1 second.
2. **Scroll Revealing**: The `ChapterTransition` component uses `whileInView` observers to gently slide and fade sections into visibility as the user reaches them.
3. **Micro-Animations**:
   - Hover states scale up and glow.
   - Elements wrapped in `Magnetic` shift their X/Y coordinates dynamically based on cursor proximity.
   - Spring physics are used for the custom cursor to give it a smooth, dragging weight rather than instantaneous snapping.
