SHENSHUAL MING --- Portfolio Frontend Redesign & Motion Implementation Prompt

1. Role

Act as a senior frontend engineer, UI/UX designer, motion designer, and
creative developer.

Redesign and enhance the existing portfolio frontend into a premium,
modern, experimental developer portfolio while preserving the existing
project structure and content.

The existing project uses:

React

Vite

Tailwind CSS

Framer Motion

Modular React components

Dark-mode visual system

Glassmorphism

Indigo / violet / blue / cyan glow accents

Scroll-triggered motion

Custom cursor

AI assistant

Sections such as Hero, Journey, Transformation, Learning, Projects,
Skills, About, and Contact

Use the existing README/documentation as the implementation baseline. Do
not replace the architecture unnecessarily.

2. PRIMARY VISUAL REFERENCE

Use the uploaded reference image as the primary visual direction for
the landing/hero section.

The reference has:

A pale blue / icy background

Large hand-drawn black typography

Strong editorial composition

Large stacked title treatment

Experimental handwritten character

Subtle abstract line/scribble texture

Small technical subtitle

Minimal but expressive composition

Important

Do NOT simply copy the image.

Use it as a visual language reference and reinterpret it into the
existing portfolio's identity.

The final result should feel like:

Experimental creative developer portfolio + editorial poster +
futuristic interaction design.

Keep the original portfolio's technical/developer identity visible.

The reference image should influence primarily:

Hero composition

Typography scale

Text stacking

Organic background texture

Editorial spacing

Handwritten/accent typography

Visual hierarchy

The rest of the website should transition naturally into the existing
dark premium portfolio system.

3. CORE DESIGN DIRECTION

Create a visually memorable portfolio with:

Strong typography

Large editorial hero

Generative background motion

Subtle futuristic lighting

Organic line movement

Smooth cursor interaction

Kinetic typography

Scroll-based storytelling

Glassmorphism used selectively

Premium micro-interactions

Smooth page transitions

Responsive layouts

Avoid making the site look like a generic SaaS dashboard.

Avoid excessive glowing effects.

Avoid putting every component inside a glass card.

The visual hierarchy should remain clean.

The animation should support the content rather than distract from it.

4. HERO SECTION --- MOST IMPORTANT

The hero should be the strongest visual section of the website.

Use the uploaded reference image as the composition inspiration.

Hero composition

Create a large central typography treatment:

SHENSHUAL
MING

or the existing portfolio name/title, depending on the project's current
content.

Use:

Extremely large typography

Tight line height

Strong contrast

Slightly irregular/editorial composition

One expressive display/handwritten font for selected words

A clean sans-serif font for supporting information

Do not make the entire website handwritten.

Use the handwritten treatment as an accent.

Hero supporting text

Include a compact technical descriptor similar in spirit to the
reference:

TECH BLOG ON FRONTEND ENGINEERING, AI, FULL-STACK
BUILDING PROJECTS, BREAKDOWNS, AND LONG-FORM THINKING

Adapt this to the actual portfolio content.

Keep it small and uppercase with strong letter spacing.

5. FALLING RAY EFFECT

Add a Falling Ray / light-ray animation to the hero background.

The rays should:

Fall vertically or diagonally

Be extremely subtle

Move continuously

Have varying speed

Have different lengths

Fade naturally

Never interfere with text readability

Use the effect mainly around the edges of the hero.

Suggested visual behavior:

10--25 subtle rays

Randomized starting positions

Slight horizontal drift

Soft opacity

Different animation durations

Infinite loop

The rays should feel like:

atmospheric light falling through a digital space

Do not make them look like rain.

Do not use heavy neon beams.

6. SHUFFLE TEXT ANIMATION

Implement a Shuffle Text / Scramble Text animation for important
hero copy.

Use it for:

Main role/title

Short introduction

Selected navigation labels

CTA labels

Section headings when appropriate

Example:

FRONTEND ENGINEER

can initially render as:

F#ON7E_ ENGI@EER

and gradually resolve into:

FRONTEND ENGINEER

Animation behavior

Characters shuffle independently

Random characters should change rapidly

The correct character progressively locks into place

Final text must remain readable

Animation should complete quickly

Do not loop continuously on every frame

Trigger it:

On initial hero entrance

On hover for selected elements

When important sections enter the viewport

Do not overuse it.

7. GLOW CURSOR

Integrate the React Bits Glow Cursor concept into the global cursor
experience.

Use the cursor as a subtle interaction layer.

The cursor should:

Follow the mouse smoothly

Have a soft glowing trail

React to interactive elements

Expand slightly over buttons

Change intensity over links

React differently over cards

Maintain spring-like movement

For buttons:

Normal: small glowing cursor

Hover: larger soft ring + stronger glow

Interactive card: slight magnetic attraction

Do not make the cursor so large that it blocks content.

Disable or simplify the custom cursor on touch devices.

8. LANYARD COMPONENT

Use the React Bits Lanyard component as a special interactive visual
element.

Do NOT place the lanyard randomly.

Place it where it adds narrative value.

Recommended placement:

Hero / About transition

Position the lanyard slightly off-center or along the right side of the
hero.

The lanyard can represent:

Developer identity

Personal profile

Portfolio badge

Digital ID

Creative developer card

The card hanging from the lanyard should contain concise portfolio
information.

Possible content:

NAME
ROLE
FULL-STACK / AI
2026
AVAILABLE FOR PROJECTS

Keep the card minimal.

Interaction

The lanyard should respond naturally to:

Mouse movement

Dragging

Momentum

Gravity

Slight rotation

The animation should feel physical.

Do not let it dominate the hero.

On mobile:

Reduce size

Disable heavy physics if necessary

Convert it into a lightweight floating card

9. WEB THREADS BACKGROUND

Use the React Bits Web Threads concept as a generative background
layer.

Use it selectively.

Recommended placement:

Hero background

Use Web Threads behind the main hero composition.

The threads should:

Move slowly

Have organic curves

React subtly to cursor movement

Use very low opacity

Blend into the background

Never reduce text readability

The threads should look like:

abstract digital fibers / connected neural pathways

Avoid making them look like a dense spider web.

Layering

Recommended layer order:

Base background

Web Threads

Falling Rays

Ambient glow

Hero typography

Lanyard

CTA

Cursor effects

Use pointer-events: none for decorative background layers.

10. HERO ANIMATION SEQUENCE

Create a deliberate entrance sequence.

Phase 1 --- Background

Web Threads fade in.

Phase 2 --- Rays

Falling rays begin moving.

Phase 3 --- Main typography

Large title enters using:

opacity

slight vertical movement

scale

blur-to-sharp transition

Phase 4 --- Shuffle text

Role/title resolves through the shuffle animation.

Phase 5 --- Supporting text

Subtitle fades upward.

Phase 6 --- Lanyard

Lanyard enters with:

slight swing

spring physics

rotation

opacity

Phase 7 --- CTA

Buttons appear last.

Do not animate everything simultaneously.

11. TYPOGRAPHY SYSTEM

Use a two-font strategy.

Primary font

Use a modern sans-serif such as:

Inter

Geist

Manrope

Accent font

Use a handwritten / editorial display font for:

One hero word

Small labels

Personal signature

Selected section highlights

The handwritten font should be used sparingly.

Typography should feel intentional rather than decorative.

12. COLOR SYSTEM

Preserve the existing dark portfolio identity while introducing the
light editorial hero inspired by the reference image.

Hero

Use a pale icy background:

very light blue

off-white

subtle gray-blue

soft paper-like texture

Primary hero text:

near-black

charcoal

Accent:

muted indigo

electric violet

cyan

Main site

Transition into the existing dark system:

Background: #050505

Surface: #121217

Text: #f3f4f6

Muted: #9ca3af

Indigo: #4f46e5

Violet: #8b5cf6

Blue: #2563eb

Cyan: #06b6d4

Do not introduce many additional colors.

13. TRANSITION FROM LIGHT HERO TO DARK SITE

This transition is important.

Do not abruptly switch from light to dark.

Create a visual transition after the hero.

Possible approach:

Hero:

light icy background

↓

large organic curved boundary

↓

gradient transition

↓

dark portfolio background

The transition can include:

curved SVG shape

animated thread lines

gradient fade

subtle noise

moving rays

large overlapping typography

The effect should feel like moving from:

editorial poster → digital workspace

14. NAVBAR

Create a premium floating navigation.

Desktop:

fixed/sticky

rounded pill

glass effect

subtle border

backdrop blur

Navigation:

Home
Journey
Projects
Skills
About
Contact

Include a compact logo/initial.

Add active-section detection.

When hovering navigation items:

slight vertical movement

underline/glow

subtle text transition

Do not over-animate the navbar.

15. GLOBAL CURSOR INTERACTION

Combine the existing custom cursor system with the Glow Cursor behavior.

Cursor states:

Default

Small soft glow.

Link

Glow increases.

Button

Cursor expands.

Project card

Cursor becomes a larger ring.

Image

Cursor displays:

VIEW

Drag interaction

Cursor displays:

DRAG

Lanyard

Cursor displays:

PULL

Keep the implementation lightweight.

16. JOURNEY SECTION

Turn the Journey section into a storytelling timeline.

Use:

vertical line

animated progress

milestone cards

year labels

scroll-based reveal

Each milestone should animate as it enters the viewport.

Use:

opacity

x/y movement

scale

line drawing

Do not use excessive 3D effects.

17. TRANSFORMATION SECTION

Make this section visually different from the timeline.

Show:

Before → Learning → Building → Engineering → AI / Full Stack

Use animated typography and connecting lines.

Possible interaction:

Hover over a stage to reveal:

skills

technologies

project examples

short description

18. LEARNING SECTION

Make learning feel like an interactive knowledge system.

Use:

floating tags

animated cards

progress indicators

course milestones

technology clusters

Use subtle orbital or thread-based movement.

Do not make it look like a conventional education dashboard.

19. PROJECT SECTION

Projects should be visually dominant.

Use large project cards.

Each card should contain:

Project title

Description

Technology stack

Category

Live demo

GitHub

Visual preview

Interactions:

cursor-following spotlight

subtle tilt

image movement

hover reveal

magnetic CTA

smooth modal transition

Use Framer Motion for card transitions.

Avoid excessive tilt angles.

20. PROJECT MODAL

When a project is selected:

Open a large immersive modal.

Include:

Project title

Overview

Problem

Solution

Technologies

Key features

Screenshots

Live demo

GitHub

Use:

shared layout transitions

fade

scale

backdrop blur

The modal should feel like a project case study.

21. SKILLS SECTION

Create an interactive technology ecosystem.

Group skills:

Frontend
Backend
AI / ML
Database
Automation
Tools

Use animated skill chips.

On hover:

glow

slight movement

technology description

related project indicator

Avoid making it a simple grid of static badges.

22. ABOUT SECTION

Use the Lanyard/card concept again only if it does not duplicate the
hero.

The About section should communicate:

Who I am

What I build

What I am learning

What I care about

Current direction

Use a clean editorial layout.

Combine:

large statement

small metadata

handwritten accent

subtle animated line

23. CONTACT SECTION

Make Contact feel like a final interaction.

Large statement:

LET'S BUILD SOMETHING.

Add:

Email

LinkedIn

GitHub

Contact CTA

Use a large magnetic button.

On hover:

cursor expands

background gradient moves

button slightly shifts

text transitions

24. FOOTER

Minimal footer.

Include:

Name / logo

Copyright

Social links

Small technology statement

Add a subtle animated line or thread.

Do not make the footer visually heavy.

25. SCROLL ANIMATIONS

Use Framer Motion and Intersection Observer / whileInView.

Every major section should have a clear animation language.

Section entrance

opacity: 0 → 1

translate: 20--50px → 0

duration: 0.5--0.9 seconds

Use spring motion selectively.

Stagger

For cards:

0.05--0.12 seconds between children.

Do not animate every element independently.

26. MOTION PRINCIPLES

Follow these rules:

Motion must communicate hierarchy.

Large elements move slower.

Small UI elements respond faster.

Decorative backgrounds should move continuously but slowly.

User-triggered motion should feel responsive.

Scroll-triggered motion should happen once where appropriate.

Avoid constant distracting animations.

Respect prefers-reduced-motion.

27. PERFORMANCE REQUIREMENTS

Animations must remain smooth.

Target:

60 FPS where practical.

Optimize:

Web Threads

Falling Rays

Glow Cursor

Lanyard physics

Canvas effects

Avoid unnecessary React re-renders.

Use:

requestAnimationFrame

CSS transforms

GPU-friendly transforms

memoization where useful

lazy loading for heavy components

Decorative effects should not block interaction.

28. RESPONSIVE DESIGN

Desktop

Use the full experience:

Web Threads

Falling Rays

Glow Cursor

Lanyard

Kinetic typography

Large project cards

Tablet

Reduce:

effect density

lanyard size

cursor complexity

animation intensity

Mobile

Prioritize:

typography

readability

content

touch interactions

Disable:

custom cursor

unnecessary mouse-following effects

heavy physics

Keep:

shuffle text

subtle rays

lightweight background motion

section transitions

29. ACCESSIBILITY

Implement:

semantic HTML

keyboard navigation

visible focus states

sufficient text contrast

aria labels

accessible buttons

reduced-motion support

When:

prefers-reduced-motion: reduce

disable or significantly reduce:

cursor trails

lanyard physics

Web Threads movement

falling rays

shuffle animation

large scroll transforms

30. COMPONENT STRUCTURE

Keep the project modular.

Suggested components:

src/ components/ Hero/ Hero.jsx FallingRays.jsx ShuffleText.jsx
HeroBackground.jsx

Cursor/
  GlowCursor.jsx

Lanyard/
  LanyardSection.jsx

Background/
  WebThreads.jsx

Navigation/
  Navbar.jsx

Journey/
  JourneyTimeline.jsx

Transformation/
  Transformation.jsx

Learning/
  Learning.jsx

Projects/
  Projects.jsx
  ProjectCard.jsx
  ProjectModal.jsx

Skills/
  Skills.jsx

About/
  About.jsx

Contact/
  Contact.jsx

Footer/
  Footer.jsx

Motion/
  ChapterTransition.jsx

Only create new components when they provide clear architectural value.

31. IMPLEMENTATION RULES

Use the existing:

React

Vite

Tailwind CSS

Framer Motion

Do not migrate the project to another framework.

Do not rewrite the application unnecessarily.

Do not remove existing portfolio content unless required for the new
design.

Preserve existing functionality.

Refactor duplicated animation logic into reusable components where
appropriate.

Keep data separate from presentation.

32. REACT BITS INTEGRATION

Use the following React Bits concepts as references:

Glow Cursor

Use for: - global cursor - hover interaction - project interaction

Lanyard

Use for: - hero identity card - developer profile interaction

Web Threads

Use for: - hero background - subtle digital-network atmosphere

Shuffle Text

Use for: - hero role/title - selected section transitions

Do not blindly paste components.

Adapt their styling and behavior to match the portfolio design system.

33. VISUAL LAYERING

The page should have depth.

Recommended layers:

BACKGROUND → noise → Web Threads → falling rays → ambient gradients →
typography → content → interactive objects → cursor

Maintain proper z-index architecture.

Decorative layers must not block clicks.

34. MICRO-INTERACTIONS

Add tasteful micro-interactions:

Buttons: - magnetic movement - hover glow - text shift

Links: - animated underline - slight color transition

Cards: - spotlight - subtle tilt - border glow

Images: - slow zoom - cursor interaction

Section labels: - tiny motion - letter spacing transition

Icons: - rotate/translate subtly

Keep all micro-interactions under control.

35. NO-GENERIC-DESIGN RULE

Avoid:

generic gradient blobs everywhere

excessive glass cards

excessive neon

huge rounded cards everywhere

random animations

excessive 3D

overly complex backgrounds

template-looking portfolio sections

The result must feel custom-designed.

36. FINAL VISUAL GOAL

The final experience should feel like:

A creative developer's digital magazine combined with a futuristic
interactive portfolio.

The first screen should immediately communicate:

identity

creativity

frontend expertise

AI/full-stack capability

attention to interaction design

The user should understand the portfolio within a few seconds while
still discovering new interactions while scrolling.

37. FINAL QUALITY CHECKLIST

Before completing the implementation, verify:

Uploaded reference image influenced the hero composition

Hero typography is visually dominant

Falling Rays work smoothly

Shuffle Text works correctly

Glow Cursor works on desktop

Cursor is disabled/simplified on touch devices

Lanyard interaction feels physical

Web Threads are subtle

Hero remains readable

Light-to-dark transition feels intentional

Navbar works correctly

Scroll animations work correctly

Projects have strong interaction

Project modal works

Skills are interactive

Contact CTA has a strong interaction

Responsive layout works

Reduced-motion support works

No decorative effect blocks clicks

No unnecessary React re-renders

Existing functionality remains intact

No console errors

No broken imports

No layout overflow

Mobile experience remains clean

38. EXECUTION PRIORITY

Implement in this order:

Hero redesign based on the uploaded reference image

Web Threads background

Falling Rays

Shuffle Text

Glow Cursor

Lanyard

Light-to-dark transition

Navbar interactions

Scroll storytelling

Project interactions

Skills interactions

Contact interactions

Responsive optimization

Accessibility

Performance optimization

Final visual polish

The hero must receive the highest level of design attention.

Do not stop at adding individual animation components.

Make the components feel like one cohesive visual system.