import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, X, ArrowRight, LayoutDashboard, BrainCircuit } from 'lucide-react';
import { projects } from '../data/projects';
import Magnetic from './Magnetic';

function CaseStudy({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, clipPath: 'circle(0% at 50% 100%)' }}
      animate={{ opacity: 1, clipPath: 'circle(150% at 50% 100%)' }}
      exit={{ opacity: 0, clipPath: 'circle(0% at 50% 100%)' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] bg-brand-bg overflow-y-auto"
    >
      <div className="sticky top-0 z-50 p-6 flex justify-end pointer-events-none">
        <button 
          onClick={onClose}
          className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white/20 transition-all pointer-events-auto"
          data-cursor="link"
        >
          <X size={24} />
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-40 pt-10">
        <div className="text-center mb-32">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-text-muted font-bold text-xs tracking-[0.2em] mb-8 uppercase">
            CASE STUDY
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-none">{project.name}</h1>
          <p className="text-xl md:text-3xl text-brand-text-muted font-medium max-w-2xl mx-auto leading-relaxed mb-16">{project.shortDescription}</p>
          
          {project.liveUrl ? (
            <div className="w-full aspect-video rounded-3xl overflow-hidden mb-16 border border-white/10 relative bg-brand-surface">
              <iframe 
                src={project.liveUrl} 
                title={`${project.name} preview`}
                className="border-0 pointer-events-none absolute top-0 left-0"
                style={{ width: '200%', height: '200%', transform: 'scale(0.5)', transformOrigin: 'top left' }}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          ) : project.image && (
            <div className="w-full aspect-video rounded-3xl overflow-hidden mb-16 border border-white/10 relative bg-brand-surface">
              <img 
                src={project.image} 
                alt={`${project.name} preview`} 
                className="w-full h-full object-cover object-top"
              />
            </div>
          )}
          
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
            {project.liveUrl && (
              <Magnetic>
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center px-8 h-14 bg-white text-black rounded-full font-bold tracking-widest text-sm hover:scale-105 transition-transform gap-3 group" data-cursor="link">
                  EXPLORE LIVE
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Magnetic>
            )}
            <Magnetic>
              <a href={project.githubUrl || "#"} target={project.githubUrl ? "_blank" : "_self"} rel="noreferrer" className="flex items-center justify-center px-8 h-14 bg-transparent border-2 border-white/20 text-white rounded-full font-bold tracking-widest text-sm hover:bg-white/10 transition-colors" data-cursor="link">
                GITHUB
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="space-y-40">
          
          <section>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="w-24 shrink-0">
                <div className="text-sm font-bold text-brand-cyan tracking-widest uppercase">01</div>
                <div className="text-brand-text-muted text-xs tracking-widest uppercase mt-2">Problem</div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tighter">The Problem</h2>
                <p className="text-xl text-brand-text-muted leading-relaxed">{project.problem}</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="w-24 shrink-0">
                <div className="text-sm font-bold text-brand-indigo tracking-widest uppercase">02</div>
                <div className="text-brand-text-muted text-xs tracking-widest uppercase mt-2">Idea</div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tighter">The Idea</h2>
                <p className="text-xl text-brand-text-muted leading-relaxed">{project.solution}</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="w-24 shrink-0">
                <div className="text-sm font-bold text-brand-violet tracking-widest uppercase">03</div>
                <div className="text-brand-text-muted text-xs tracking-widest uppercase mt-2">Tech</div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tighter">The Technology</h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map(tech => (
                    <div key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full font-bold text-white text-sm tracking-widest">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="w-24 shrink-0">
                <div className="text-sm font-bold text-white tracking-widest uppercase">04</div>
                <div className="text-brand-text-muted text-xs tracking-widest uppercase mt-2">Flow</div>
              </div>
              <div className="w-full">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-12 tracking-tighter">The Flow</h2>
                <div className="flex flex-col gap-6 relative">
                  {/* Vertical line connecting nodes */}
                  <div className="absolute top-0 bottom-0 left-[23px] w-0.5 bg-white/10" />
                  
                  {project.projectFlow.split(' → ').map((step, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-8 relative z-10"
                    >
                      <div className="w-12 h-12 rounded-full bg-brand-surface border border-white/20 flex items-center justify-center shrink-0 font-bold text-brand-cyan text-sm shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                        {idx + 1}
                      </div>
                      <div className="glass px-6 py-4 rounded-2xl w-full border border-white/10 text-white font-medium text-lg tracking-wide">
                        {step}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="w-24 shrink-0">
                <div className="text-sm font-bold text-brand-cyan tracking-widest uppercase">05</div>
                <div className="text-brand-text-muted text-xs tracking-widest uppercase mt-2">Future</div>
              </div>
              <div className="w-full">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tighter">Future Scope</h2>
                <ul className="space-y-4">
                  {project.futureScope.map((scope, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-brand-surface border border-white/20 flex items-center justify-center shrink-0 mt-1">
                        <ArrowRight size={12} className="text-brand-cyan" />
                      </div>
                      <span className="text-xl text-brand-text-muted leading-relaxed">{scope}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const handlePopState = () => {
      setActiveProject(null);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const openProject = (project) => {
    window.history.pushState({ modal: true }, '', window.location.pathname);
    setActiveProject(project);
  };

  const closeProject = () => {
    setActiveProject(null);
    if (window.history.state?.modal) {
      window.history.back();
    }
  };
  
  const flagship = projects.find(p => p.featured);
  const others = projects.filter(p => !p.featured);

  // For ATLAS flow scroll animation
  const atlasRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: atlasRef, offset: ["start end", "end start"] });

  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto relative">
      
      <div className="text-center mb-32">
        <h2 className="text-xs font-bold tracking-[0.3em] text-brand-text-muted mb-4 uppercase">What I Built</h2>
        <p className="text-3xl md:text-5xl font-black text-white max-w-2xl mx-auto tracking-tighter">
          Turning concepts into usable products.
        </p>
      </div>

      {/* Flagship Project - ATLAS */}
      {flagship && (
        <div ref={atlasRef} className="mb-40">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="w-full lg:w-1/2">
              <div className="inline-block px-4 py-1.5 rounded-full bg-brand-indigo/20 text-brand-indigo-light font-bold text-xs tracking-widest mb-8 border border-brand-indigo/30">
                FLAGSHIP AI PROJECT
              </div>
              
              <h3 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-none">
                {flagship.name.toUpperCase()}
              </h3>
              
              <p className="text-2xl text-brand-text-muted font-medium mb-12">
                {flagship.subtitle || "AI RESEARCH & KNOWLEDGE AGENT"}
              </p>
              
              <p className="text-lg text-white leading-relaxed mb-10">
                {flagship.shortDescription}
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                {flagship.liveUrl && (
                  <Magnetic>
                    <a href={flagship.liveUrl} target="_blank" rel="noreferrer" className="px-6 py-3 bg-white text-black rounded-full font-bold text-sm tracking-widest uppercase hover:scale-105 transition-transform" data-cursor="link">
                      Explore Live
                    </a>
                  </Magnetic>
                )}
                <Magnetic>
                  <button onClick={() => setActiveProject(flagship)} className="px-6 py-3 bg-transparent text-white border border-white/20 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white/10 transition-colors" data-cursor="link">
                    Case Study
                  </button>
                </Magnetic>
              </div>
            </div>
            
            {/* Animated Flow Visual */}
            <div className="w-full lg:w-1/2 relative min-h-[500px] flex items-center justify-center">
              <div className="absolute inset-0 bg-brand-indigo/10 blur-[100px] rounded-full" />
              
              <div className="relative z-10 flex flex-col gap-4 w-full max-w-sm">
                {flagship.projectFlow.split(' → ').slice(0, 5).map((step, idx, arr) => {
                  const start = (idx / arr.length) * 0.5 + 0.2; // roughly map to scroll
                  const end = start + 0.1;
                  const opacity = useTransform(scrollYProgress, [start - 0.1, start], [0.2, 1]);
                  const scale = useTransform(scrollYProgress, [start - 0.1, start, end, end + 0.1], [0.95, 1.05, 1.05, 1]);
                  const borderColor = useTransform(scrollYProgress, [start, end], ["rgba(255,255,255,0.1)", "rgba(99,102,241,0.5)"]);

                  return (
                    <motion.div key={idx} className="flex flex-col items-center">
                      <motion.div 
                        style={{ opacity, scale, borderColor }}
                        className="glass px-6 py-4 rounded-xl w-full text-center border text-white font-bold tracking-widest text-sm shadow-xl"
                      >
                        {step}
                      </motion.div>
                      {idx < arr.length - 1 && (
                        <motion.div 
                          style={{ 
                            opacity: useTransform(scrollYProgress, [start, end], [0.2, 1]),
                            height: useTransform(scrollYProgress, [start, end], ["10px", "24px"])
                          }}
                          className="w-0.5 bg-brand-cyan my-1"
                        />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Other Projects List */}
      <div className="flex flex-col gap-4">
        {others.map((project, index) => {
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              onClick={() => openProject(project)}
              className="group relative flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 md:p-8 rounded-[2rem] bg-brand-surface/50 border border-white/5 hover:border-brand-indigo/30 hover:bg-white/5 transition-all duration-500 cursor-none overflow-hidden"
              data-cursor="project"
            >
              {/* Background Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-indigo/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="flex items-start md:items-center gap-6 md:gap-12 relative z-10 w-full md:w-auto">
                <div className="text-brand-indigo/30 font-black text-4xl md:text-5xl tracking-tighter w-12 group-hover:text-brand-cyan transition-colors duration-500 mt-1 md:mt-0">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-brand-indigo-light transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-brand-text-muted/30"></span>
                    <span className="text-brand-cyan font-bold text-xs tracking-widest uppercase">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-brand-text-muted font-medium text-sm md:text-base">
                    {project.shortDescription}
                  </p>
                </div>
              </div>

              {/* Icon / Action */}
              <div className="relative z-10 shrink-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-brand-indigo group-hover:border-brand-indigo transition-all duration-500 -rotate-45 group-hover:rotate-0 self-end md:self-auto mt-2 md:mt-0">
                <ArrowRight size={20} />
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {activeProject && (
          <CaseStudy project={activeProject} onClose={closeProject} />
        )}
      </AnimatePresence>
    </section>
  );
}
