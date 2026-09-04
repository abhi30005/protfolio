import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, Code2, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-600 hover:text-slate-900 transition-colors z-20"
        >
          <X size={24} />
        </button>

        <div className="overflow-y-auto overflow-x-hidden no-scrollbar p-8 md:p-12">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <div className="text-sm font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-4">
                {project.category}
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">{project.title}</h2>
              <p className="text-xl text-slate-500 leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href={project.live !== "Coming Soon" ? project.live : "#"}
                target={project.live !== "Coming Soon" ? "_blank" : "_self"}
                rel="noreferrer"
                className={`px-6 py-3 rounded-xl font-medium flex items-center gap-2 ${
                  project.live !== "Coming Soon" 
                    ? "bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20" 
                    : "bg-slate-100 text-slate-400 cursor-not-allowed"
                } transition-all`}
              >
                {project.live === "Coming Soon" ? "Coming Soon" : (
                  <>Live Demo <ExternalLink size={18} /></>
                )}
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl font-medium bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 flex items-center gap-2 transition-all shadow-sm"
              >
                GitHub <Code2 size={18} />
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-xl font-bold mb-4 text-slate-900 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">!</div>
                  The Problem
                </h3>
                <p className="text-slate-600 leading-relaxed">{project.problem}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-slate-900 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">✓</div>
                  The Solution
                </h3>
                <p className="text-slate-600 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6 text-slate-900">Architecture Flow</h3>
              <div className="glass p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-center gap-2 md:gap-4 text-sm font-semibold text-slate-700">
                {project.projectFlow.split(' → ').map((step, index, arr) => (
                  <div key={index} className="flex items-center gap-2 md:gap-4">
                    <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-100">{step}</div>
                    {index < arr.length - 1 && <ArrowRight size={16} className="text-slate-400" />}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Key Features</h3>
                <ul className="space-y-3">
                  {project.keyFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <div className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">{i+1}</div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Future Scope</h3>
                <ul className="space-y-3">
                  {project.futureScope.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-slate-900">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </motion.div>
    </div>
  );
}
