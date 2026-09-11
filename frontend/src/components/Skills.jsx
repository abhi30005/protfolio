import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { universeData } from '../data/skills';
import SolarSystem from './SolarSystem';

export default function Skills() {
  const [selectedNode, setSelectedNode] = useState(null);

  // Build a lookup map for quick access when a planet is clicked
  const nodeMap = {};
  universeData.nodes.forEach((node) => {
    if (!node.isHub) nodeMap[node.name] = node;
  });

  return (
    <section id="skills" className="py-32 px-6 min-h-screen relative overflow-hidden bg-brand-bg flex flex-col items-center">

      <div className="text-center mb-12 relative z-10">
        <h2 className="text-xs font-bold tracking-[0.3em] text-brand-text-muted mb-4 uppercase">My Toolkit</h2>
        <div className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter">SKILL ARSENAL</div>
        <p className="text-brand-text-muted mt-6 max-w-2xl mx-auto text-sm md:text-base">
          A comprehensive breakdown of the technologies and tools I use to build scalable, intelligent applications.
        </p>
      </div>

      {/* Solar System Orbital Visualization */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full flex justify-center"
      >
        <SolarSystem
          centerLogo={
            <span className="text-xl md:text-2xl font-black text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] tracking-tight">AB</span>
          }
          centerLogoAlt="Abhijit Bhunia"
        />
      </motion.div>

      {/* Detail Modal — reuses existing universe data for deep-dive */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-6 pointer-events-none"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-brand-bg/90 backdrop-blur-md pointer-events-auto" onClick={() => setSelectedNode(null)} />

            {/* Content */}
            <div className="bg-brand-surface border border-white/10 p-8 md:p-12 rounded-3xl max-w-2xl w-full relative z-10 pointer-events-auto shadow-[0_0_100px_rgba(0,0,0,0.8)]">
              <button
                onClick={() => setSelectedNode(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-brand-text-muted hover:text-white hover:bg-white/10 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-bold tracking-widest text-brand-cyan uppercase mb-8">
                {selectedNode.category.replace(/_/g, ' ')}
              </div>

              <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-8">{selectedNode.name}</h3>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-black text-brand-text-muted tracking-[0.2em] uppercase mb-3 flex items-center gap-3">
                    <span className="w-4 h-[1px] bg-brand-text-muted/50"></span>
                    Why I Used It
                  </h4>
                  <p className="text-white font-medium text-lg leading-relaxed">{selectedNode.why}</p>
                </div>
                <div>
                  <h4 className="text-xs font-black text-brand-text-muted tracking-[0.2em] uppercase mb-3 flex items-center gap-3">
                    <span className="w-4 h-[1px] bg-brand-text-muted/50"></span>
                    Where I Used It
                  </h4>
                  <p className="text-white font-medium text-lg leading-relaxed">{selectedNode.where}</p>
                </div>
                <div className="p-6 rounded-2xl bg-brand-indigo/10 border border-brand-indigo/20">
                  <h4 className="text-xs font-black text-brand-indigo-light tracking-[0.2em] uppercase mb-3">Key Takeaways</h4>
                  <p className="text-white font-medium">{selectedNode.learned}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
