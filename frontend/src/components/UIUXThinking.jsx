import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  { title: "UNDERSTAND", desc: "Analyzing user needs and technical constraints before writing a single line of code." },
  { title: "DEFINE", desc: "Structuring the data architecture, component hierarchy, and user flow." },
  { title: "DESIGN", desc: "Creating the visual language, typography, and micro-interaction logic." },
  { title: "BUILD", desc: "Engineering the React components, APIs, and state management systems." },
  { title: "IMPROVE", desc: "Refining performance, accessibility, and motion physics based on testing." }
];

export default function UIUXThinking() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section ref={containerRef} className="py-40 px-6 max-w-7xl mx-auto relative">
      <div className="text-center mb-32">
        <h2 className="text-xs font-bold tracking-[0.3em] text-brand-text-muted mb-4 uppercase">Design Thinking</h2>
        <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter">
          My Engineering Process
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Animated Background Line */}
        <div className="absolute top-0 bottom-0 left-8 md:left-1/2 md:-translate-x-1/2 w-0.5 bg-white/5" />
        
        <motion.div 
          className="absolute top-0 bottom-0 left-8 md:left-1/2 md:-translate-x-1/2 w-0.5 bg-gradient-to-b from-brand-indigo via-brand-cyan to-brand-violet origin-top"
          style={{ scaleY: scrollYProgress }}
        />

        <div className="flex flex-col gap-16 relative z-10">
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div 
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-start' : 'md:justify-end'} pl-16 md:pl-0`}>
                  <div className={`glass p-8 rounded-3xl border border-white/10 shadow-xl w-full max-w-sm ${isEven ? 'text-left' : 'md:text-right text-left'}`}>
                    <h3 className="text-2xl font-black text-white mb-3 tracking-tighter">{step.title}</h3>
                    <p className="text-brand-text-muted font-medium text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-brand-bg border-4 border-brand-cyan z-20 shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
                
                <div className="w-full md:w-1/2 hidden md:block" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
