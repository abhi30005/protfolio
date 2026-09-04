import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroScreen({ onComplete }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Stage 0: Initial wait
    const t1 = setTimeout(() => setStage(1), 500); // Show "6 MONTHS..."
    const t2 = setTimeout(() => setStage(2), 2500); // Show "INTERNSHIP JOURNEY"
    const t3 = setTimeout(() => setStage(3), 4000); // Show Name
    const t4 = setTimeout(() => onComplete(), 5500); // Exit

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="intro"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center overflow-hidden"
      >
        <div className="relative flex flex-col items-center justify-center h-full w-full max-w-4xl px-6 text-center">
          
          <AnimatePresence mode="wait">
            {stage === 1 && (
              <motion.div
                key="stage1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-slate-500 tracking-[0.2em] text-sm md:text-base font-medium"
              >
                6 MONTHS &bull; ONE JOURNEY &bull; MANY BUILDS
              </motion.div>
            )}

            {stage === 2 && (
              <motion.div
                key="stage2"
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight"
              >
                INTERNSHIP JOURNEY
              </motion.div>
            )}

            {stage === 3 && (
              <motion.div
                key="stage3"
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-7xl lg:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 tracking-tighter"
              >
                ABHIJIT BHUNIA
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Skip button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={onComplete}
          className="absolute bottom-10 text-slate-400 hover:text-slate-600 text-sm font-medium tracking-widest transition-colors uppercase z-10"
        >
          Skip Intro
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}
