import React, { useState } from 'react';
import { Orbit as OrbitIcon } from 'lucide-react';

/**
 * SVG Icons for technologies
 */
const TechIcons = {
  react: (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-5 h-5" fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  nextjs: (
    <svg viewBox="0 0 180 180" className="w-5 h-5" fill="none">
      <circle cx="90" cy="90" r="90" fill="#000" stroke="#fff" strokeWidth="6" />
      <path d="M149.508 157.52L69.142 54H54v72h14.4V69.412l67.24 87.054a89.4 89.4 0 0013.868-1.046zM111.6 54h14.4v72h-14.4z" fill="#fff" />
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <rect width="24" height="24" rx="2" fill="#3178C6" />
      <path d="M5.5 12.5v-1h5v8h-2v-7H5.5zm8 0v-1h5.5v1h-2v7h-2v-7h-1.5z" fill="#fff" />
    </svg>
  ),
  javascript: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <rect width="24" height="24" rx="2" fill="#F7DF1E" />
      <path d="M6 18l1.5-1c.3.5.8 1 1.5 1s1-.3 1-1v-5h2v5c0 2-1.2 3-3 3-1.5 0-2.5-.8-3-2zm8 0l1.5-1c.4.6 1 1.1 1.8 1.1 1 0 1.4-.5 1.4-1s-.6-1-1.6-1.3c-1.5-.5-2.4-1.2-2.4-2.5 0-1.5 1.2-2.6 3-2.6 1.3 0 2.2.5 2.8 1.3l-1.4 1c-.3-.5-.8-.8-1.4-.8-.6 0-1 .3-1 .7s.5.9 1.6 1.2c1.6.6 2.5 1.3 2.5 2.6 0 1.5-1.2 2.7-3.2 2.7-1.8 0-3-.8-3.6-2z" fill="#000" />
    </svg>
  ),
  python: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <path d="M12 2C9.5 2 9.8 3 9.8 3l.003 2.1h2.4v.7H7.5S5 5.6 5 8c0 2.4 1.5 2.3 1.5 2.3h1.6V8.2c0-.7.7-1.4 1.6-1.4h3.7c1.4 0 2.2-.8 2.2-2.2V3.1C15.6 2 14.6 2 13.4 2H12zm-1.1.9a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2z" fill="#387EB8" />
      <path d="M12 22c2.5 0 2.2-1 2.2-1l-.003-2.1h-2.4v-.7h4.7S19 18.4 19 16c0-2.4-1.5-2.3-1.5-2.3h-1.6v2.1c0 .7-.7 1.4-1.6 1.4h-3.7c-1.4 0-2.2.8-2.2 2.2v1.5C8.4 22 9.4 22 10.6 22H12zm1.1-.9a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2z" fill="#FFD43B" />
    </svg>
  ),
  fastapi: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <circle cx="12" cy="12" r="11" fill="#009688" />
      <path d="M13 5L8 13h4l-1 6 5-8h-4l1-6z" fill="#fff" />
    </svg>
  ),
  nodejs: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2L18.5 8 12 11.8 5.5 8 12 4.2zM5 9.5l6 3.3v6.5l-6-3.3V9.5zm8 9.8v-6.5l6-3.3v6.5l-6 3.3z" fill="#68A063" />
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <path d="M12 2c-.5 2-2 3.5-3 5-1.5 2.2-2 4.5-1 7 .5 1.3 1.5 2.5 2.8 3.5l.2.5v3h2v-3l.2-.5c1.3-1 2.3-2.2 2.8-3.5 1-2.5.5-4.8-1-7-1-1.5-2.5-3-3-5z" fill="#47A248" />
    </svg>
  ),
  openai: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <path d="M12 2a10 10 0 0 0-8 16l2-3a6 6 0 0 1-1-3 6 6 0 0 1 6-6c1.2 0 2.3.4 3.2 1L16 5a10 10 0 0 0-4-3zm4.9 4L15 8.5a6 6 0 0 1 2 3.5 6 6 0 0 1-1 5l2 3a10 10 0 0 0 1-13zm-5 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" fill="#10A37F" />
    </svg>
  ),
  langchain: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <circle cx="12" cy="5" r="3" fill="#1C3C3C" stroke="#2DD4BF" strokeWidth="1" />
      <circle cx="6" cy="15" r="3" fill="#1C3C3C" stroke="#2DD4BF" strokeWidth="1" />
      <circle cx="18" cy="15" r="3" fill="#1C3C3C" stroke="#2DD4BF" strokeWidth="1" />
      <line x1="12" y1="8" x2="6" y2="12" stroke="#2DD4BF" strokeWidth="1" />
      <line x1="12" y1="8" x2="18" y2="12" stroke="#2DD4BF" strokeWidth="1" />
      <line x1="6" y1="15" x2="18" y2="15" stroke="#2DD4BF" strokeWidth="1" />
    </svg>
  ),
  tailwind: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <path d="M12 6C9.33 6 7.67 7.33 7 10c1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C13.4 10.87 14.6 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.6 7.13 14.4 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.4 16.87 9.6 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.6 13.13 9.4 12 7 12z" fill="#06B6D4" />
    </svg>
  ),
  rag: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <rect x="3" y="3" width="7" height="9" rx="1" stroke="#A855F7" strokeWidth="1.5" />
      <rect x="14" y="3" width="7" height="9" rx="1" stroke="#A855F7" strokeWidth="1.5" />
      <path d="M12 15v4M8 19h8" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 12l5 3 5-3" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  html5: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <path d="M2.5 2h19l-1.7 19-7.8 2.2-7.8-2.2L2.5 2zm14.3 6.4L17 6H6.3l.2 2.4h8l-.6 6.6-3.9 1.1-3.9-1.1-.3-2.8H3.5l.4 5.1 6.1 1.7 6.1-1.7 1-10.8z" fill="#E34F26" />
    </svg>
  ),
  css3: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <path d="M2.5 2h19l-1.7 19-7.8 2.2-7.8-2.2L2.5 2zm14.3 6.4L17 6H6.3l.2 2.4h8l-.6 6.6-3.9 1.1-3.9-1.1-.3-2.8H3.5l.4 5.1 6.1 1.7 6.1-1.7 1-10.8z" fill="#1572B6" />
    </svg>
  ),
  ml: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#FF6F61" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="10.51" x2="15.42" y2="6.49" /><line x1="15.41" y1="17.51" x2="8.59" y2="13.49" />
    </svg>
  ),
  nlp: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#9B59B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 9h8M8 13h6" />
    </svg>
  ),
  llm: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#E74C3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      <path d="M12 6h4M12 10h4" />
    </svg>
  ),
  genai: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#F39C12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 3L8 8l-5 2 5 2 2 5 2-5 5-2-5-2zM21 3l-1.5 3L18 7.5l1.5 1.5L21 12l1.5-3L24 7.5 22.5 6zM21 17l-1.5 3-1.5 1.5 1.5 1.5 1.5 3 1.5-3 1.5-1.5-1.5-1.5z" />
    </svg>
  ),
  langgraph: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#1ABC9C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M12 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
      <circle cx="20" cy="8" r="2" /><path d="M18 10l-4 4" />
    </svg>
  ),
  prompt: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#3498DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  ),
  mysql: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#4479A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M12 12v7" />
    </svg>
  ),
  postgresql: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#336791" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M8 12v7M16 12v7" />
    </svg>
  ),
  chromadb: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#FF69B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <circle cx="12" cy="11" r="3" />
    </svg>
  ),
  dataverse: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#742774" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  ),
  dataproc: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#27AE60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
  dataanalysis: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#8E44AD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  powerapps: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#742774" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
    </svg>
  ),
  powerautomate: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
      <line x1="12" y1="2" x2="12" y2="12" />
    </svg>
  ),
  powerbi: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#F2C811" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="18" y="3" width="4" height="18" /><rect x="10" y="8" width="4" height="13" /><rect x="2" y="13" width="4" height="8" />
    </svg>
  ),
  aws: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      <path d="M14 22c-2.5-1-4.5-2.5-6-5" />
    </svg>
  ),
  zapier: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#FF4A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
  tableau: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#E97627" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v12M6 12h12" />
    </svg>
  ),
};

/**
 * Generic icon generator for skills without custom SVGs
 */
function makeIcon(letter, color) {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <rect width="24" height="24" rx="6" fill={color} opacity="0.15" />
      <text x="12" y="16" textAnchor="middle" fontSize="12" fontWeight="bold" fill={color}>{letter}</text>
    </svg>
  );
}

/**
 * Default orbits — ALL skills from skills.js across 5 rings
 */
const DEFAULT_ORBITS = [
  {
    id: 'ring1',
    name: 'Frontend',
    radiusClass: 'var(--radius-1)',
    radiusPx: 180,
    speed: 26,
    items: [
      { id: 'react', label: 'React', color: '#61DAFB', svg: TechIcons.react },
      { id: 'nextjs', label: 'Next.js', color: '#ffffff', svg: TechIcons.nextjs },
      { id: 'typescript', label: 'TypeScript', color: '#3178C6', svg: TechIcons.typescript },
      { id: 'html5', label: 'HTML5', color: '#E34F26', svg: TechIcons.html5 },
      { id: 'css3', label: 'CSS3', color: '#1572B6', svg: TechIcons.css3 },
      { id: 'tailwind', label: 'Tailwind CSS', color: '#06B6D4', svg: TechIcons.tailwind },
    ],
  },
  {
    id: 'ring2',
    name: 'Backend',
    radiusClass: 'var(--radius-2)',
    radiusPx: 290,
    speed: 36,
    items: [
      { id: 'python', label: 'Python', color: '#FFD43B', svg: TechIcons.python },
      { id: 'nodejs', label: 'Node.js', color: '#68A063', svg: TechIcons.nodejs },
      { id: 'fastapi', label: 'FastAPI', color: '#009688', svg: TechIcons.fastapi },
      { id: 'restapis', label: 'REST APIs', color: '#FF6B6B', svg: TechIcons.prompt },
    ],
  },
  {
    id: 'ring3',
    name: 'AI / ML',
    radiusClass: 'var(--radius-3)',
    radiusPx: 400,
    speed: 48,
    items: [
      { id: 'ml', label: 'Machine Learning', color: '#FF6F61', svg: TechIcons.ml },
      { id: 'nlp', label: 'NLP', color: '#9B59B6', svg: TechIcons.nlp },
      { id: 'llms', label: 'LLMs', color: '#E74C3C', svg: TechIcons.llm },
      { id: 'genai', label: 'Generative AI', color: '#F39C12', svg: TechIcons.genai },
      { id: 'langchain', label: 'LangChain', color: '#2DD4BF', svg: TechIcons.langchain },
      { id: 'langgraph', label: 'LangGraph', color: '#1ABC9C', svg: TechIcons.langgraph },
      { id: 'rag', label: 'RAG', color: '#A855F7', svg: TechIcons.rag },
      { id: 'prompt', label: 'Prompt Engineering', color: '#3498DB', svg: TechIcons.prompt },
    ],
  },
  {
    id: 'ring4',
    name: 'DATA',
    radiusClass: 'var(--radius-4)',
    radiusPx: 510,
    speed: 60,
    items: [
      { id: 'mongodb', label: 'MongoDB', color: '#47A248', svg: TechIcons.mongodb },
      { id: 'mysql', label: 'MySQL', color: '#4479A1', svg: TechIcons.mysql },
      { id: 'postgresql', label: 'PostgreSQL', color: '#336791', svg: TechIcons.postgresql },
      { id: 'chromadb', label: 'ChromaDB', color: '#FF69B4', svg: TechIcons.chromadb },
      { id: 'dataverse', label: 'Dataverse', color: '#742774', svg: TechIcons.dataverse },
      { id: 'dataproc', label: 'Data Processing', color: '#27AE60', svg: TechIcons.dataproc },
      { id: 'dataanalysis', label: 'Data Analysis', color: '#8E44AD', svg: TechIcons.dataanalysis },
    ],
  },
  {
    id: 'ring5',
    name: 'AUTOMATION & CLOUD',
    radiusClass: 'var(--radius-5)',
    radiusPx: 620,
    speed: 72,
    items: [
      { id: 'powerapps', label: 'Power Apps', color: '#742774', svg: TechIcons.powerapps },
      { id: 'powerautomate', label: 'Power Automate', color: '#0066FF', svg: TechIcons.powerautomate },
      { id: 'powerbi', label: 'Power BI', color: '#F2C811', svg: TechIcons.powerbi },
      { id: 'aws', label: 'AWS', color: '#FF9900', svg: TechIcons.aws },
      { id: 'zapier', label: 'Zapier', color: '#FF4A00', svg: TechIcons.zapier },
      { id: 'github', label: 'GitHub', color: '#ffffff', svg: TechIcons.github },
      { id: 'tableau', label: 'Tableau', color: '#E97627', svg: TechIcons.tableau },
    ],
  },
];

/**
 * Solar System orbital skill visualization
 * Adapted from VengeanceUI SolarSystem for plain React/Vite (no TS, no shadcn)
 */
const SolarSystem = React.forwardRef(function SolarSystem(
  {
    centerLogo,
    centerLogoAlt = 'Core Engine',
    orbits = DEFAULT_ORBITS,
    isPaused = false,
    speedMultiplier = 1,
    className = '',
    ...props
  },
  ref
) {
  const [hoveredId, setHoveredId] = useState(null);

  const dustItems = [
    { delay: '-4s', radius: '170px', color: '#00f5d4' },
    { delay: '-11s', radius: '280px', color: '#a855f7' },
    { delay: '-19s', radius: '390px', color: '#3b82f6' },
    { delay: '-28s', radius: '490px', color: '#00f5d4' },
    { delay: '-7s', radius: '220px', color: '#ec4899' },
    { delay: '-15s', radius: '440px', color: '#eab308' },
    { delay: '-23s', radius: '580px', color: '#a855f7' },
    { delay: '-32s', radius: '540px', color: '#3b82f6' },
    { delay: '-36s', radius: '320px', color: '#ec4899' },
  ];

  return (
    <div
      ref={ref}
      className={`relative flex items-center justify-center w-full max-w-[1500px] h-[480px] md:h-[780px] select-none overflow-visible ${className}`}
      style={{ perspective: '1200px' }}
      {...props}
    >
      {/* Self-contained CSS keyframes */}
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --radius-1: 180px;
          --radius-2: 290px;
          --radius-3: 400px;
          --radius-4: 510px;
          --radius-5: 620px;
        }
        @media (max-width: 768px) {
          :root {
            --radius-1: 100px;
            --radius-2: 160px;
            --radius-3: 220px;
            --radius-4: 280px;
            --radius-5: 340px;
          }
        }
        @media (max-width: 480px) {
          :root {
            --radius-1: 70px;
            --radius-2: 110px;
            --radius-3: 150px;
            --radius-4: 190px;
            --radius-5: 230px;
          }
        }

        @keyframes ss-orbitMove {
          0% { transform: translate(-50%, -50%) rotateZ(0deg) translateX(var(--orbit-radius)); }
          100% { transform: translate(-50%, -50%) rotateZ(-360deg) translateX(var(--orbit-radius)); }
        }
        @keyframes ss-billboardCancel {
          0% { transform: translate(-50%, -50%) rotateZ(0deg) rotateY(10deg) rotateX(-65deg); }
          100% { transform: translate(-50%, -50%) rotateZ(360deg) rotateY(10deg) rotateX(-65deg); }
        }
        @keyframes ss-sun-pulse {
          0% { transform: scale(0.9); opacity: 0.7; }
          100% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes ss-spin-cw {
          0% { transform: rotateX(65deg) rotateY(-10deg) rotateZ(0deg); }
          100% { transform: rotateX(65deg) rotateY(-10deg) rotateZ(360deg); }
        }
        @keyframes ss-spin-ccw {
          0% { transform: rotateX(65deg) rotateY(-10deg) rotateZ(0deg); }
          100% { transform: rotateX(65deg) rotateY(-10deg) rotateZ(-360deg); }
        }

        .ss-orbit { animation: ss-orbitMove var(--orbit-duration) linear infinite; animation-play-state: var(--orbit-play-state); }
        .ss-billboard { animation: ss-billboardCancel var(--orbit-duration) linear infinite; animation-play-state: var(--orbit-play-state); }
        .ss-sun-pulse { animation: ss-sun-pulse 4s ease-in-out infinite alternate; }
        .ss-spin-cw { animation: ss-spin-cw 20s linear infinite; }
        .ss-spin-ccw { animation: ss-spin-ccw 30s linear infinite; }

        .ss-planet-card {
          position: absolute;
          left: 50%;
          top: 50%;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0.45rem 0.95rem;
          background: rgba(10, 10, 12, 0.65);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 100px;
          font-weight: 600;
          color: #ffffff;
          white-space: nowrap;
          user-select: none;
          cursor: pointer;
          pointer-events: auto;
          transition: border-color 0.3s, color 0.3s, background 0.3s, box-shadow 0.3s, scale 0.3s;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }
      `}} />

      {/* 3D Tilted container */}
      <div
        className="absolute w-[560px] h-[560px] md:w-[1500px] md:h-[1500px] flex items-center justify-center"
        style={{ transform: 'rotateX(65deg) rotateY(-10deg)', transformStyle: 'preserve-3d' }}
      >
        {/* Central Sun Core */}
        <div
          className="absolute w-[100px] h-[100px] md:w-[130px] md:h-[130px] flex items-center justify-center z-20 pointer-events-none"
          style={{ transform: 'rotateY(10deg) rotateX(-65deg)', transformStyle: 'preserve-3d' }}
        >
          {/* Glow aura */}
          <div className="absolute w-[90px] h-[90px] md:w-[120px] md:h-[120px] rounded-full blur-md ss-sun-pulse z-10 bg-orange-500/30 shadow-[0_0_80px_rgba(249,115,22,0.6)]" />

          {/* Core logo */}
          {centerLogo ? (
            typeof centerLogo === 'string' ? (
              <img
                className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-orange-500/50 shadow-[0_0_40px_rgba(249,115,22,0.4)] z-20 bg-zinc-950 p-2 md:p-3 relative"
                src={centerLogo}
                alt={centerLogoAlt}
                width={80}
                height={80}
              />
            ) : (
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-orange-500/50 shadow-[0_0_40px_rgba(249,115,22,0.4)] z-20 bg-zinc-950 flex items-center justify-center p-2 relative">
                {centerLogo}
              </div>
            )
          ) : (
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-orange-500/50 shadow-[0_0_40px_rgba(249,115,22,0.4)] z-20 bg-zinc-950 flex items-center justify-center p-2 relative">
              <OrbitIcon className="w-8 h-8 text-orange-400 animate-spin" style={{ animationDuration: '10s' }} />
            </div>
          )}

          {/* Decorative dash rings */}
          <div className="absolute w-[110px] h-[110px] md:w-[140px] md:h-[140px] rounded-full border border-dashed border-orange-500/30 ss-spin-cw pointer-events-none" />
          <div className="absolute w-[150px] h-[150px] md:w-[185px] md:h-[185px] rounded-full border border-dashed border-orange-500/20 ss-spin-ccw pointer-events-none" />
        </div>

        {/* Cosmic dust particles */}
        {dustItems.map((dust, idx) => (
          <div
            key={idx}
            className="absolute left-1/2 top-1/2 w-1 h-1 rounded-full opacity-40 pointer-events-none ss-orbit"
            style={{
              background: dust.color,
              boxShadow: `0 0 6px ${dust.color}`,
              animationDelay: dust.delay,
              animationPlayState: isPaused ? 'paused' : 'running',
              animationDuration: `${24 / speedMultiplier}s`,
              '--orbit-radius': dust.radius,
              '--orbit-duration': `${24 / speedMultiplier}s`,
              '--orbit-play-state': isPaused ? 'paused' : 'running',
            }}
          />
        ))}

        {/* Orbit rings & planet nodes */}
        {orbits.map((orbit) => (
          <React.Fragment key={orbit.id}>
            {/* Dashed ring line */}
            <div
              className="absolute rounded-full border border-dashed border-zinc-700/60 pointer-events-none"
              style={{
                width: `calc(2 * ${orbit.radiusClass})`,
                height: `calc(2 * ${orbit.radiusClass})`,
                boxShadow: 'inset 0 0 25px rgba(255,255,255,0.01), 0 0 25px rgba(255,255,255,0.01)',
              }}
            />

            {/* Planet cards */}
            {orbit.items.map((item, idx, arr) => {
              const delayValue = -(orbit.speed / arr.length) * idx;
              const durationValue = orbit.speed / speedMultiplier;
              const isHovered = hoveredId === item.id;

              return (
                <div
                  key={item.id}
                  className="absolute left-1/2 top-1/2 w-0 h-0 pointer-events-none ss-orbit"
                  style={{
                    animationDelay: `${delayValue}s`,
                    animationDuration: `${durationValue}s`,
                    animationPlayState: isPaused ? 'paused' : 'running',
                    '--orbit-radius': orbit.radiusClass,
                    '--orbit-duration': `${durationValue}s`,
                    '--orbit-play-state': isPaused ? 'paused' : 'running',
                    zIndex: isHovered ? 30 : 10,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Laser beam on hover */}
                  <div
                    className="absolute right-0 top-1/2 origin-right -translate-y-1/2 pointer-events-none transition-opacity duration-300 z-0"
                    style={{
                      height: '1.5px',
                      width: orbit.radiusClass,
                      opacity: isHovered ? 1 : 0,
                      background: `linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,255,255,0.15) 20%, ${item.color} 80%, ${item.color} 100%)`,
                      boxShadow: `0 0 8px ${item.color}, 0 0 16px ${item.color}40`,
                    }}
                  />

                  {/* Planet card with billboard cancel */}
                  <div
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="ss-planet-card ss-billboard"
                    style={{
                      animationDelay: `${delayValue}s`,
                      animationDuration: `${durationValue}s`,
                      animationPlayState: isPaused ? 'paused' : 'running',
                      borderColor: isHovered ? item.color : undefined,
                      boxShadow: isHovered
                        ? `0 0 20px rgba(0,0,0,0.6), 0 0 15px ${item.color}35`
                        : undefined,
                      scale: isHovered ? 1.05 : 1,
                      '--orbit-duration': `${durationValue}s`,
                      '--orbit-play-state': isPaused ? 'paused' : 'running',
                    }}
                  >
                    <div
                      className="transition-transform duration-300"
                      style={{
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                        color: item.color,
                      }}
                    >
                      {item.svg}
                    </div>
                    <span className="text-[11px] md:text-[13px] tracking-tight">{item.label}</span>
                  </div>
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
});

SolarSystem.displayName = 'SolarSystem';

export { SolarSystem, DEFAULT_ORBITS, TechIcons };
export default SolarSystem;
