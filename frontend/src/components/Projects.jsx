import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { PerspectiveCarousel } from './PerspectiveCarousel';
import { ExternalLink, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import InteractiveBook from './InteractiveBook';

function ProjectBookModal({ project, onClose }) {
  if (!project) return null;

  const pages = [
    {
      pageNumber: 1,
      title: "Overview",
      content: (
        <div className="flex flex-col gap-4">
          <p className="text-neutral-600 font-medium">{project.shortDescription}</p>
          <div>
            <h4 className="font-bold text-neutral-800 text-sm tracking-widest uppercase mb-2">The Problem</h4>
            <p className="text-neutral-600 text-sm leading-relaxed">{project.problem}</p>
          </div>
        </div>
      ),
      backContent: (
        <div className="flex flex-col gap-4 h-full justify-center">
            <h4 className="font-bold text-neutral-800 text-sm tracking-widest uppercase mb-2">The Solution</h4>
            <p className="text-neutral-600 text-sm leading-relaxed">{project.solution}</p>
        </div>
      )
    },
    {
      pageNumber: 2,
      title: "Technology",
      content: (
        <div className="flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <span key={tech} className="px-3 py-1 bg-neutral-100 border border-neutral-200 rounded-full text-xs font-bold text-neutral-700 tracking-wider">
              {tech}
            </span>
          ))}
        </div>
      ),
      backContent: (
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-neutral-800 text-sm tracking-widest uppercase mb-2">Key Features</h4>
          <ul className="text-sm text-neutral-600 space-y-2 list-disc pl-4">
            {project.keyFeatures.slice(0, 6).map((feat, i) => <li key={i}>{feat}</li>)}
            {project.keyFeatures.length > 6 && <li>And more...</li>}
          </ul>
        </div>
      )
    },
    {
      pageNumber: 3,
      title: "Workflow",
      content: (
        <div className="flex flex-col gap-4 h-full">
          <h4 className="font-bold text-neutral-800 text-sm tracking-widest uppercase mb-2">Architecture / Flow</h4>
          <p className="text-neutral-600 text-sm leading-relaxed italic border-l-2 border-neutral-300 pl-4">
            {project.projectFlow}
          </p>
          {project.name.includes("PreSales AI Agent V2") && (
              <div className="mt-4 px-3 py-1 bg-amber-100 text-amber-800 border border-amber-200 rounded font-bold text-xs inline-block text-center uppercase tracking-widest">
                In Progress
              </div>
          )}
        </div>
      ),
      backContent: (
        <div className="flex flex-col gap-4 h-full">
          <h4 className="font-bold text-neutral-800 text-sm tracking-widest uppercase mb-2">Future Scope</h4>
          <ul className="text-sm text-neutral-600 space-y-2 list-disc pl-4">
            {project.futureScope.slice(0, 5).map((scope, i) => <li key={i}>{scope}</li>)}
          </ul>
        </div>
      )
    },
    {
      pageNumber: 4,
      title: "Links",
      content: (
        <div className="flex flex-col gap-4 h-full justify-center items-center">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="w-full text-center px-6 py-3 bg-neutral-900 text-white rounded-full font-bold text-sm tracking-widest uppercase hover:scale-105 transition-transform">
              Explore Live
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="w-full text-center px-6 py-3 bg-transparent border-2 border-neutral-200 text-neutral-800 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-neutral-100 transition-colors">
              View GitHub
            </a>
          )}
        </div>
      )
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Blurred Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-[#050505]/80 backdrop-blur-2xl"
        onClick={onClose}
      />

      {/* Morphing Container */}
      <motion.div
        layoutId={`project-${project.id}`}
        className="relative z-[110] w-[95vw] md:w-auto h-[90vh] md:h-auto flex items-center justify-center p-4 md:p-12 overflow-hidden rounded-[3rem] bg-transparent"
        style={{ transformStyle: 'preserve-3d', perspective: '2000px' }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          exit={{ opacity: 0, scale: 0.9, rotateY: 90 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
          className="w-full h-full flex items-center justify-center"
        >
          <InteractiveBook
            coverImage={project.image}
            bookTitle={project.name}
            bookAuthor={project.category}
            pages={pages}
            width={320}
            height={460}
            onCloseBook={onClose}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeProject]);

  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="text-center mb-16 relative z-20">
        <h2 className="text-xs font-bold tracking-[0.3em] text-brand-text-muted mb-4 uppercase">What I Built</h2>
        <p className="text-3xl md:text-5xl font-black text-white max-w-2xl mx-auto tracking-tighter">
          Selected works and case studies.
        </p>
      </div>

      <div className="relative z-10 w-full h-[650px]">
        <PerspectiveCarousel 
           items={projects}
           defaultActiveIndex={2}
           slideWidth={600}
           className="w-full h-full"
           onSlideClick={(project) => setActiveProject(project)}
           renderSlideContent={(project, isActive, currentSlideWidth = 600, distance = 0) => {
              const scale = currentSlideWidth / 1280;
              const shouldRenderIframe = project.liveUrl && distance <= 1;

              return (
              <motion.div layoutId={`project-${project.id}`} className="w-full h-full relative group">
                  {/* Base Image (always present as a placeholder/fallback) */}
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity z-0"
                    />
                  ) : (
                    <div className="absolute inset-0 w-full h-full bg-zinc-900 border border-white/5 opacity-80 group-hover:opacity-100 transition-opacity z-0 flex items-center justify-center">
                       {/* Placeholder pattern or empty state */}
                       <div className="text-white/10 text-6xl font-black uppercase tracking-tighter mix-blend-overlay rotate-12 select-none text-center leading-none">
                         {project.name}
                       </div>
                    </div>
                  )}
                  
                  {/* Live Iframe Overlay (pre-rendered for active + adjacent slides for instant loading) */}
                  {shouldRenderIframe && (
                    <div className={`absolute inset-0 pointer-events-none z-0 transition-opacity mix-blend-normal overflow-hidden rounded-[2rem] ${isActive ? "opacity-80 group-hover:opacity-100" : "opacity-0"}`}>
                      <iframe 
                        src={project.liveUrl} 
                        className="absolute top-0 left-0 border-none bg-zinc-900" 
                        style={{
                           width: '1280px',
                           height: '720px',
                           transform: `scale(${scale})`,
                           transformOrigin: '0 0'
                        }}
                        title={project.title}
                      />
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-white font-bold text-2xl md:text-3xl tracking-tighter leading-tight">{project.title}</h3>
                    <div className="flex gap-2 items-center mt-2">
                       <span className="text-brand-cyan text-[10px] uppercase tracking-widest font-bold">{project.category}</span>
                       {project.name.includes("PreSales AI Agent V2") && (
                         <span className="text-amber-500 font-bold text-[9px] tracking-widest uppercase border border-amber-500/30 px-1.5 py-0.5 rounded">
                           In Progress
                         </span>
                       )}
                    </div>
                    {isActive && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-6 px-4 py-3 bg-white text-black hover:bg-zinc-200 rounded-full text-center text-xs uppercase tracking-widest font-bold transition-colors shadow-xl"
                        >
                          Initialize Project
                        </motion.div>
                    )}
                  </div>
              </motion.div>
             );
           }}
        />
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectBookModal 
            project={activeProject} 
            onClose={() => setActiveProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
