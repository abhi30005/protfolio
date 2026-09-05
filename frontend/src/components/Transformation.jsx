import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const phases = [
  "LEARN",
  "EXPERIMENT",
  "BUILD",
  "BREAK",
  "DEBUG",
  "IMPROVE",
  "SHIP"
];

export default function Transformation() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section ref={containerRef} className="py-40 bg-brand-bg relative overflow-hidden flex flex-col items-center justify-center min-h-screen">
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-32 z-10"
      >
        <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] text-brand-text-muted uppercase mb-4">
          The Real Output Wasn't Just Code
        </h2>
      </motion.div>

      <div className="flex flex-col items-center gap-16 relative z-10 w-full max-w-2xl px-6">
        {phases.map((phase, i) => {
          // Calculate when this specific word should light up based on scroll
          const start = i / phases.length;
          const end = (i + 1) / phases.length;
          
          const opacity = useTransform(scrollYProgress, [start - 0.2, start, end, end + 0.2], [0.1, 1, 1, 0.1]);
          const scale = useTransform(scrollYProgress, [start - 0.2, start, end, end + 0.2], [0.8, 1.2, 1.2, 0.8]);
          const filter = useTransform(scrollYProgress, [start - 0.1, start, end, end + 0.1], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);
          const color = useTransform(
            scrollYProgress, 
            [start, (start + end)/2, end], 
            ["#4f46e5", "#06b6d4", "#f3f4f6"]
          );

          return (
            <div key={phase} className="flex flex-col items-center gap-16 w-full">
              <motion.h3
                style={{ opacity, scale, filter, color }}
                className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter"
              >
                {phase}
              </motion.h3>
              
              {/* Arrow downwards */}
              {i < phases.length - 1 && (
                <motion.div
                  style={{ 
                    opacity: useTransform(scrollYProgress, [start, end], [0, 1]),
                    scaleY: useTransform(scrollYProgress, [start, end], [0, 1])
                  }}
                  className="w-[2px] h-24 bg-gradient-to-b from-brand-indigo to-transparent origin-top"
                />
              )}
            </div>
          );
        })}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mt-40 text-center max-w-lg px-6 z-10"
      >
        <p className="text-xl md:text-2xl font-medium text-brand-text-muted leading-relaxed">
          The internship was not just about learning technologies. <br/><br/>
          <strong className="text-white">It was about applying them.</strong>
        </p>
      </motion.div>

    </section>
  );
}
