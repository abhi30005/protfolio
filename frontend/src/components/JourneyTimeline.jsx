import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { journey } from '../data/journey';

const journeyNodes = [
  { month: "FEB", title: "Foundation", summary: "Strengthening programming fundamentals and understanding how modern applications are structured.", items: journey[0].items },
  { month: "MAR", title: "Full Stack", summary: "Learning how frontend, APIs, backend, and databases communicate.", items: journey[1].items },
  { month: "APR", title: "AI / ML", summary: "Exploring AI, NLP, and LLMs to solve complex user problems.", items: journey[2].items },
  { month: "MAY", title: "Automation", summary: "Automating repetitive business workflows using enterprise platforms.", items: journey[3].items },
  { month: "JUN", title: "AI Products", summary: "Integrating everything to build scalable, AI-powered applications.", items: journey[4].items },
  { month: "JUL-AUG", title: "Growth", summary: "Moving from writing code to solving real-world problems.", items: ["Problem Solving", "UI/UX", "Product Thinking", "AI Integration", "Full-Stack Thinking", "Automation"] }
];

export default function JourneyTimeline() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" ref={containerRef} className="relative py-32 bg-brand-bg overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[80%] bg-brand-indigo/5 blur-[120px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4"
          >
            6 MONTHS.<br className="md:hidden"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-brand-cyan">ONE TRANSFORMATION.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-brand-text-muted max-w-2xl mx-auto text-sm md:text-base uppercase tracking-widest font-bold"
          >
            From learning fundamentals to building AI-powered products.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Center Line Background */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:-translate-x-1/2" />
          
          {/* Center Line Animated Progress */}
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-brand-indigo via-brand-violet to-brand-cyan md:-translate-x-1/2 shadow-[0_0_15px_rgba(99,102,241,0.5)] origin-top"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-16 md:gap-24">
            {journeyNodes.map((node, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`relative flex items-center w-full ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                  
                  {/* Timeline Node Dot */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-brand-bg border-4 border-brand-indigo -translate-x-[10px] md:-translate-x-1/2 z-20 shadow-[0_0_20px_rgba(99,102,241,0.5)]"
                  />

                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                    className={`w-full ml-12 md:ml-0 md:w-[45%] ${isEven ? 'md:pr-12' : 'md:pl-12'}`}
                  >
                    <div className="group relative glass p-6 md:p-8 rounded-3xl hover:bg-white/5 transition-colors duration-500 border border-white/10 hover:border-brand-indigo/50 overflow-hidden cursor-none" data-cursor="project">
                      
                      {/* Subtle hover glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        <div className="inline-block px-3 py-1 mb-4 rounded-full bg-brand-indigo/20 border border-brand-indigo/30 text-brand-cyan text-xs font-bold tracking-widest uppercase">
                          {node.month}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight group-hover:text-brand-cyan transition-colors">{node.title}</h3>
                        <p className="text-brand-text-muted mb-6 text-sm md:text-base leading-relaxed">{node.summary}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {node.items.map((item, j) => (
                            <span key={j} className="px-3 py-1 bg-black/40 border border-white/5 text-white/80 rounded-lg text-xs font-medium tracking-wide">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}
