import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cpu, Globe, Server, Database, Cloud, BarChart, Bot, Zap } from 'lucide-react';
import { universeData } from '../data/skills';

const categoryConfig = {
  frontend: { color: 'from-brand-cyan to-brand-blue', icon: <Globe size={24} /> },
  backend: { color: 'from-slate-400 to-slate-600', icon: <Server size={24} /> },
  ai_ml: { color: 'from-brand-violet to-brand-indigo', icon: <Bot size={24} /> },
  data_engineering: { color: 'from-emerald-400 to-teal-500', icon: <Cpu size={24} /> },
  database: { color: 'from-blue-400 to-indigo-500', icon: <Database size={24} /> },
  automation_power_platform: { color: 'from-yellow-400 to-orange-500', icon: <Zap size={24} /> },
  cloud_devops: { color: 'from-sky-400 to-blue-500', icon: <Cloud size={24} /> },
  analytics: { color: 'from-fuchsia-400 to-purple-500', icon: <BarChart size={24} /> }
};

export default function Skills() {
  const [selectedNode, setSelectedNode] = useState(null);

  // Group nodes by category (excluding the "hub" nodes)
  const categorizedNodes = universeData.nodes
    .filter(n => !n.isHub)
    .reduce((acc, node) => {
      if (!acc[node.category]) acc[node.category] = [];
      acc[node.category].push(node);
      return acc;
    }, {});

  return (
    <section id="skills" className="py-32 px-6 min-h-screen relative overflow-hidden bg-brand-bg flex flex-col items-center">
      
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-xs font-bold tracking-[0.3em] text-brand-text-muted mb-4 uppercase">My Toolkit</h2>
        <div className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter">SKILL ARSENAL</div>
        <p className="text-brand-text-muted mt-6 max-w-2xl mx-auto text-sm md:text-base">
          A comprehensive breakdown of the technologies and tools I use to build scalable, intelligent applications.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 relative z-10">
        {Object.entries(categorizedNodes).map(([category, nodes], idx) => {
          const config = categoryConfig[category] || categoryConfig.frontend;
          
          return (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-white/[0.02] border border-white/5 rounded-3xl p-8 overflow-hidden hover:bg-white/[0.04] transition-colors"
            >
              {/* Subtle background glow on hover */}
              <div className={`absolute -inset-20 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-br ${config.color} blur-3xl pointer-events-none rounded-full`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${config.color} text-white shadow-lg`}>
                    {config.icon}
                  </div>
                  <h3 className="text-lg font-black tracking-widest text-white uppercase">
                    {category.replace(/_/g, ' ')}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {nodes.map((node) => (
                    <motion.button
                      key={node.id}
                      onClick={() => setSelectedNode(node)}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-sm hover:border-white/30 hover:bg-gradient-to-br ${config.color} transition-all shadow-sm`}
                    >
                      {node.name}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Detail Modal */}
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
