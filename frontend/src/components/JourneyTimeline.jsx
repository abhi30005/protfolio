import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { journey } from '../data/journey';

const journeyNodes = [
  { month: "MONTH 01", title: "Foundation", summary: "Strengthening programming fundamentals and understanding how modern applications are structured.", items: journey[0].items },
  { month: "MONTH 02", title: "Full-Stack Development", summary: "I learned how the different parts of a web application communicate with each other.", items: journey[1].items },
  { month: "MONTH 03", title: "AI / ML", summary: "Exploring AI, NLP, and LLMs to solve complex user problems.", items: journey[2].items },
  { month: "MONTH 04", title: "Automation", summary: "I explored how repetitive business workflows can be automated using modern platforms.", items: journey[3].items },
  { month: "MONTH 05", title: "AI Product Development", summary: "Integrating everything to build scalable, AI-powered applications.", items: journey[4].items },
  { month: "MONTH 06", title: "Professional Growth", summary: "From writing code to solving real-world problems through Product Thinking and UI/UX.", items: ["Problem Solving", "UI/UX", "Product Thinking", "AI Integration", "Full-Stack Thinking", "Automation"] }
];

export default function JourneyTimeline() {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-slate-50">
      
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <div className="text-center mb-20 px-6">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            6 Months.<br/>From Learning to Building.
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            A journey through development, AI, automation, experimentation and real-world problem solving.
          </p>
        </div>

        {/* Scroll Progress Indicator fixed on screen */}
        <div className="absolute top-8 left-8 text-slate-400 font-bold tracking-widest text-sm z-50 mix-blend-difference hidden md:block">
          THE JOURNEY
        </div>

        {/* Horizontal scroll container */}
        <motion.div style={{ x }} className="flex gap-16 md:gap-32 px-12 md:px-32 relative pt-20 w-max">
          
          {/* Connecting Line Background */}
          <div className="absolute top-[108px] left-0 w-full h-1 bg-slate-200" />
          
          {/* Animated Connecting Line Foreground */}
          <motion.div 
            className="absolute top-[108px] left-0 h-1 bg-indigo-500 origin-left" 
            style={{ scaleX: scrollYProgress, width: '100%' }}
          />

          {journeyNodes.map((node, i) => {
            return (
              <div key={i} className="relative w-[300px] md:w-[400px] flex-shrink-0 group">
                
                {/* Node marker */}
                <div className="absolute -top-[12px] left-0 w-6 h-6 rounded-full bg-white border-4 border-indigo-500 z-10 group-hover:scale-125 group-hover:bg-indigo-50 transition-all shadow-md" />
                
                <div className="pt-8">
                  <div className="text-xs font-bold text-indigo-500 tracking-widest mb-2">{node.month}</div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">{node.title}</h3>
                  <p className="text-slate-600 mb-6 font-medium leading-relaxed">{node.summary}</p>
                  
                  <div className="glass p-6 rounded-3xl border border-white shadow-xl bg-white/50 backdrop-blur-xl group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="flex flex-wrap gap-2">
                      {node.items.map((item, j) => (
                        <span key={j} className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-sm font-semibold">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
          
          {/* Ending Text */}
          <div className="relative w-[400px] flex-shrink-0 flex flex-col justify-center pl-16">
            <h3 className="text-4xl font-black text-slate-900 leading-tight">
              Learning became building. <br/>
              <span className="text-indigo-600">Building became problem solving.</span>
            </h3>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
