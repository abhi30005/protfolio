# Frontend Design Architecture

This document outlines the current design, structure, and technological stack of the React frontend for Abhijit's Portfolio.

## 1. Core Technology Stack
- **Framework**: React 18 (built with Vite)
- **Styling**: Tailwind CSS (with arbitrary value support and custom animations)
- **Animations**: Framer Motion (for complex scroll animations, timeline pinning, and orchestration)
- **Icons**: Lucide React
- **Markdown Parsing**: React-Markdown (used in the AI Assistant)

## 2. Global Aesthetics
The portfolio features a **Premium, Cinematic, Dark Mode** aesthetic. 
Key design pillars include:
- **Flipbook Architecture**: Sections transition smoothly with clip-path reveals rather than standard continuous scrolling.
- **Micro-interactions**: High attention to cursor tracking, hover states, and dynamic component reactions.
- **Glassmorphism**: Heavy use of backdrop-blur, semi-transparent backgrounds, and subtle gradients (Indigo/Violet/Cyan).

## 3. Key Interactive Wrappers
To achieve a highly tactile feel, several wrapper components are used globally:
- **`CustomCursor.jsx`**: A customized cursor that tracks mouse movement and expands/changes state when hovering over clickable elements.
- **`Magnetic.jsx`**: A Framer Motion wrapper that pulls buttons and icons slightly towards the user's cursor when hovered.
- **`TiltCard.jsx`**: A 3D perspective wrapper that rotates elements (like the profile picture or project cards) based on mouse position within the bounds.
- **`ChapterTransition.jsx`**: An intersection-observer-based wrapper that handles the cinematic "clip-path" reveal of new sections as the user scrolls.

## 4. Primary Components & Sections

### `IntroScreen.jsx`
A 5-second cinematic loading sequence that greets the user before the main application mounts. It uses synchronized Framer Motion animations to reveal Abhijit's name and role.

### `Hero.jsx` & `ProfileCard.jsx`
The central landing area. Instead of a basic text layout, it utilizes a 3D orbit design where floating labels (representing skills like "React", "AI/ML") slowly orbit around a central `ProfileCard`.

### `JourneyTimeline.jsx`
A horizontal scrolling timeline detailing the 6-month internship journey. It uses Framer Motion's `useScroll` and `useTransform` hooks to translate vertical scrolling into a horizontal sticky presentation of milestones.

### `Projects.jsx`
The flagship section. It abandons traditional grid layouts for a **Full-Page Cinematic Case Study** format. 
- ATLAS is presented as the flagship project.
- It steps the user through the **Problem, Idea, Tech, and Flow** of each project using sticky layouts and scroll-linked opacity changes.

### `AIAssistant.jsx`
A floating chatbot interface in the bottom right corner.
- Integrated with the Python FastAPI backend.
- Features typing indicators, suggested follow-up questions, and markdown rendering.
- Falls back gracefully to offline mode if the cloud AI is unreachable.

### Other Supporting Sections
- **`Skills.jsx`**: Categorized tech stack presentation.
- **`About.jsx`**: Personal background and summary.
- **`Contact.jsx`**: Reach out links and social profiles.
- **`Navbar.jsx` & `Footer.jsx`**: Standard navigation and closing branding.

## 5. Data Management
All portfolio content is separated from the UI components. The data resides in `src/data/`:
- `profile.js`
- `projects.js`
- `journey.js`

This strict separation ensures that the UI components remain clean and focused purely on layout and animation, while making it trivial to update the portfolio content in the future.
