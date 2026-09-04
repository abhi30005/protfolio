import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2, ArrowRight, X, LayoutDashboard, BrainCircuit, Users } from 'lucide-react';
import { projects } from '../data/projects';
import TiltCard from './TiltCard';

function CaseStudy({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-[100] bg-slate-50 overflow-y-auto"
    >
      <div className="sticky top-0 z-50 p-6 flex justify-end">
        <button 
          onClick={onClose}
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-xl hover:bg-slate-100 hover:scale-105 transition-all"
        >
          <X size={24} />
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-32">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6">{project.name}</h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed">{project.shortDescription}</p>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
                OPEN LIVE PROJECT
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-colors shadow-sm">
                GITHUB
              </a>
            )}
          </div>
        </div>

        <div className="space-y-32">
          
          <section>
            <div className="text-sm font-bold text-slate-400 tracking-widest mb-2">01</div>
            <h2 className="text-3xl font-black text-slate-900 mb-6">THE PROBLEM</h2>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">{project.problem}</p>
          </section>

          <section>
            <div className="text-sm font-bold text-slate-400 tracking-widest mb-2">02</div>
            <h2 className="text-3xl font-black text-slate-900 mb-6">THE IDEA</h2>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">{project.solution}</p>
          </section>

          <section>
            <div className="text-sm font-bold text-slate-400 tracking-widest mb-2">03</div>
            <h2 className="text-3xl font-black text-slate-900 mb-8">THE TECHNOLOGY</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map(tech => (
                <div key={tech} className="px-6 py-3 bg-white border border-slate-200 rounded-full font-bold text-slate-700 shadow-sm">
                  {tech}
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="text-sm font-bold text-slate-400 tracking-widest mb-2">04</div>
            <h2 className="text-3xl font-black text-slate-900 mb-12">THE FLOW</h2>
            
            <div className="flex flex-col gap-4">
              {project.projectFlow.split(' → ').map((step, idx, arr) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="px-8 py-4 bg-indigo-50 text-indigo-700 font-bold rounded-2xl w-full text-center shadow-sm border border-indigo-100">
                    {step}
                  </div>
                  {idx < arr.length - 1 && (
                    <div className="w-0.5 h-8 bg-indigo-200 my-2" />
                  )}
                </div>
              ))}
            </div>
          </section>

          {project.futureScope && (
            <section>
              <div className="text-sm font-bold text-slate-400 tracking-widest mb-2">05</div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">FUTURE SCOPE</h2>
              <ul className="space-y-4">
                {project.futureScope.map((scope, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2.5 shrink-0" />
                    <p className="text-lg text-slate-600 font-medium">{scope}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const flagship = projects.find(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative">
      
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tight">What I Built</h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
          Turning concepts, technologies and ideas into usable products.
        </p>
      </div>

      {/* Flagship Project - ATLAS */}
      {flagship && (
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="bg-slate-900 text-white rounded-[3rem] p-8 md:p-16 overflow-hidden relative shadow-2xl">
            {/* Background effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px]" />
            
            <div className="grid lg:grid-cols-2 gap-16 relative z-10 items-center">
              <div>
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-cyan-400 font-bold text-xs tracking-widest mb-8 border border-white/20">
                  FLAGSHIP AI PROJECT
                </div>
                
                <h3 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">{flagship.name}</h3>
                <p className="text-xl md:text-2xl text-slate-300 font-medium mb-12">{flagship.subtitle || flagship.shortDescription}</p>
                
                <div className="space-y-8 mb-12">
                  <div>
                    <h4 className="text-sm font-bold text-slate-500 tracking-widest mb-2 uppercase">Problem</h4>
                    <p className="text-slate-300">{flagship.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-500 tracking-widest mb-2 uppercase">Solution</h4>
                    <p className="text-slate-300">{flagship.solution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-12">
                  {flagship.technologies.slice(0, 6).map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                  {flagship.technologies.length > 6 && <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-medium">+{flagship.technologies.length - 6}</span>}
                </div>

                <div className="flex flex-wrap gap-4">
                  {flagship.liveUrl && (
                    <a href={flagship.liveUrl} target="_blank" rel="noreferrer" className="px-6 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-colors shadow-lg">
                      OPEN LIVE PROJECT
                    </a>
                  )}
                  <button onClick={() => setActiveProject(flagship)} className="px-6 py-3 bg-white/10 text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-colors">
                    CASE STUDY
                  </button>
                </div>
              </div>
              
              <div className="hidden lg:block relative">
                <TiltCard>
                  <div className="w-full aspect-[4/3] bg-gradient-to-tr from-indigo-500 to-cyan-400 rounded-2xl p-1 shadow-2xl rotate-3">
                    <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center p-8 overflow-hidden relative">
                      <BrainCircuit size={100} className="text-white/20 absolute" />
                      <div className="text-center z-10">
                        <div className="text-cyan-400 font-bold tracking-widest text-sm mb-4">FLOW</div>
                        <div className="flex flex-col gap-2">
                          {flagship.projectFlow.split(' → ').slice(0, 4).map((step, idx) => (
                            <div key={idx} className="px-4 py-2 bg-white/10 rounded-lg text-white font-medium text-sm border border-white/5">
                              {step}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Other Projects */}
      <div className="grid md:grid-cols-2 gap-8">
        {others.map((project, index) => {
          
          // Alternating Visual Layouts (simplified for the loop)
          const isSplit = index % 3 === 0;
          const isStacked = index % 3 === 1;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 2) * 0.1 }}
              onClick={() => setActiveProject(project)}
              className={`glass group cursor-pointer border border-slate-200 rounded-[2rem] overflow-hidden hover:border-indigo-300 transition-colors shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300 flex flex-col ${
                isSplit ? 'md:col-span-2 md:flex-row' : ''
              }`}
            >
              
              <div className={`p-8 md:p-12 flex flex-col justify-center flex-1 ${isSplit ? 'order-2 md:order-1' : ''}`}>
                <div className="text-indigo-600 font-bold text-xs tracking-widest mb-4 uppercase">{project.category}</div>
                <h3 className="text-3xl font-black text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-8">{project.shortDescription}</p>
                
                <div className="flex items-center gap-2 mt-auto text-sm font-bold text-slate-400 group-hover:text-indigo-600 transition-colors">
                  VIEW CASE STUDY <ArrowRight size={16} />
                </div>
              </div>

              <div className={`bg-slate-50 p-8 flex items-center justify-center border-slate-100 ${
                isSplit ? 'order-1 md:order-2 border-b md:border-b-0 md:border-l flex-1' : 'border-t'
              }`}>
                <div className="w-full max-w-xs aspect-video bg-white rounded-xl shadow-md border border-slate-200 flex items-center justify-center p-6 text-slate-300 group-hover:scale-105 transition-transform duration-500">
                  <LayoutDashboard size={48} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {activeProject && (
          <CaseStudy project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
