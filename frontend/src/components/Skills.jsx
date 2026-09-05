import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';
import { Code2, Server, BrainCircuit, Database, Zap, ExternalLink, X } from 'lucide-react';

const techNodes = [
  { id: 'react', name: 'React', category: 'frontend', x: -150, y: -100, why: 'Component-driven UI architecture and state management.', where: 'All frontend projects (ATLAS, Portfolio, City Canvas)', learned: 'Hooks, context, rendering optimization, and Framer Motion integration.' },
  { id: 'python', name: 'Python', category: 'backend', x: 150, y: -150, why: 'Robust data processing and AI/ML model integration.', where: 'ATLAS, Resume Builder, Content Editor backend', learned: 'Async programming, API building, and data handling.' },
  { id: 'fastapi', name: 'FastAPI', category: 'backend', x: 200, y: -20, why: 'High-performance async Python backend framework.', where: 'ATLAS, Portfolio AI Assistant backend', learned: 'Pydantic schemas, dependency injection, and async routers.' },
  { id: 'langchain', name: 'LangChain', category: 'ai', x: 50, y: 150, why: 'Orchestrating LLM chains and RAG systems.', where: 'ATLAS, AI Content Editor', learned: 'Vector stores, prompt templates, and agentic workflows.' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend', x: -200, y: 50, why: 'Rapid utility-first styling system.', where: 'All frontend projects', learned: 'Design systems, responsive breakpoints, and custom animations.' },
  { id: 'node', name: 'Node.js', category: 'backend', x: -80, y: 180, why: 'Fast, scalable JS backend execution.', where: 'AI Resume Builder, earlier portfolio versions', learned: 'Express routing, middleware, and filesystem ops.' },
  { id: 'framer', name: 'Framer Motion', category: 'frontend', x: -280, y: -30, why: 'Complex UI animations and scroll-linked effects.', where: 'Portfolio, interactive project showcases', learned: 'Spring physics, useScroll, and layout animations.' },
  { id: 'powerautomate', name: 'Power Automate', category: 'automation', x: 250, y: 100, why: 'Automating business processes without heavy code.', where: 'Internal internship projects', learned: 'Trigger-action flows and enterprise data connectors.' }
];

const categoryColors = {
  frontend: 'from-brand-cyan/80 to-brand-blue/80',
  backend: 'from-slate-400 to-slate-600',
  ai: 'from-brand-violet/80 to-brand-indigo/80',
  automation: 'from-yellow-400 to-orange-500'
};

export default function Skills() {
  const containerRef = useRef(null);
  const { x: mouseX, y: mouseY } = useMousePosition();
  const [selectedNode, setSelectedNode] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);

  return (
    <section id="skills" className="py-32 px-6 min-h-screen relative overflow-hidden bg-brand-bg flex flex-col items-center justify-center">
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-xs font-bold tracking-[0.3em] text-brand-text-muted mb-4 uppercase">My Toolkit</h2>
        <div className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter">TECH CONSTELLATION</div>
      </div>

      <div 
        ref={containerRef}
        className="relative w-full max-w-4xl h-[500px] md:h-[600px] flex items-center justify-center border border-white/5 rounded-3xl bg-white/[0.02]"
        data-cursor="drag"
      >
        {/* Connection Lines (SVGs drawing between nodes) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          <g style={{ transform: 'translate(50%, 50%)' }}>
            {techNodes.map((node, i) => (
              techNodes.slice(i + 1).map((target, j) => {
                // Only connect some nodes to avoid a mess
                if ((node.category === target.category) || (i % 3 === j % 2)) {
                  return (
                    <motion.line
                      key={`${i}-${j}`}
                      x1={node.x} y1={node.y}
                      x2={target.x} y2={target.y}
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-brand-indigo-light"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.2 + (i * 0.1) }}
                    />
                  );
                }
                return null;
              })
            ))}
          </g>
        </svg>

        {/* The Nodes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0">
          {techNodes.map((node) => {
            const isHovered = hoveredNode === node.id;
            const isSelected = selectedNode?.id === node.id;
            const dim = (hoveredNode && !isHovered) || (selectedNode && !isSelected);

            return (
              <motion.div
                key={node.id}
                className="absolute"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', delay: Math.random() * 0.5 }}
                style={{ 
                  x: node.x, 
                  y: node.y,
                  zIndex: isHovered || isSelected ? 50 : 10
                }}
              >
                {/* Node interaction area */}
                <motion.button
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  onClick={() => setSelectedNode(node)}
                  animate={{ 
                    opacity: dim ? 0.2 : 1,
                    scale: isSelected ? 1.2 : (isHovered ? 1.1 : 1)
                  }}
                  whileHover={{ scale: 1.15 }}
                  className={`relative flex items-center justify-center p-4 rounded-full bg-gradient-to-br ${categoryColors[node.category]} text-white shadow-lg cursor-none`}
                  data-cursor="project"
                >
                  <span className="font-bold text-sm tracking-widest whitespace-nowrap">{node.name}</span>
                  
                  {isHovered && !isSelected && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full mt-2 w-max bg-brand-surface border border-white/10 px-3 py-1.5 rounded-md text-xs text-brand-text-muted"
                    >
                      Click to explore
                    </motion.div>
                  )}
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-6 pointer-events-none"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-brand-bg/80 backdrop-blur-sm pointer-events-auto" onClick={() => setSelectedNode(null)} />
            
            {/* Content */}
            <div className="bg-brand-surface border border-white/10 p-8 rounded-3xl max-w-xl w-full relative z-10 pointer-events-auto shadow-2xl shadow-brand-indigo/10">
              <button 
                onClick={() => setSelectedNode(null)}
                className="absolute top-6 right-6 text-brand-text-muted hover:text-white transition-colors"
                data-cursor="link"
              >
                <X size={24} />
              </button>
              
              <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold tracking-widest text-brand-cyan uppercase mb-6">
                {selectedNode.category}
              </div>
              
              <h3 className="text-4xl font-black text-white tracking-tighter mb-8">{selectedNode.name}</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-brand-text-muted tracking-widest uppercase mb-2">Why I Used It</h4>
                  <p className="text-white font-medium">{selectedNode.why}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-text-muted tracking-widest uppercase mb-2">Where I Used It</h4>
                  <p className="text-white font-medium">{selectedNode.where}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-text-muted tracking-widest uppercase mb-2">What I Learned</h4>
                  <p className="text-brand-indigo-light font-medium">{selectedNode.learned}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </section>
  );
}
