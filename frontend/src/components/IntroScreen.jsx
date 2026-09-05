import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroScreen({ onComplete }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const sequence = [
      { t: 0, s: 1 },    // INITIALIZING EXPERIENCE
      { t: 800, s: 2 },  // REACT
      { t: 1100, s: 3 }, // AI
      { t: 1400, s: 4 }, // FULL STACK
      { t: 1700, s: 5 }, // UI/UX
      { t: 2000, s: 6 }, // Progress line
      { t: 2800, s: 7 }, // 6 MONTHS
      { t: 3200, s: 8 }, // ONE JOURNEY
      { t: 3600, s: 9 }, // MANY BUILDS
      { t: 4500, s: 10 },// ABHIJIT BHUNIA
      { t: 6500, s: 11 } // Exit curtain
    ];

    const timeouts = sequence.map(({ t, s }) => setTimeout(() => setStage(s), t));
    const finishTimeout = setTimeout(onComplete, 7200);

    return () => {
      timeouts.forEach(clearTimeout);
      clearTimeout(finishTimeout);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="intro-container"
        className="fixed inset-0 z-[100] bg-brand-bg flex flex-col items-center justify-center overflow-hidden"
        initial={{ clipPath: 'inset(0 0 0 0)' }}
        exit={{ clipPath: 'inset(100% 0 0 0)' }}
        animate={stage === 11 ? { clipPath: 'inset(100% 0 0 0)' } : { clipPath: 'inset(0 0 0 0)' }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="relative flex flex-col items-center justify-center h-full w-full max-w-4xl px-6 text-center">
          
          <AnimatePresence mode="wait">
            {/* Stage 1: Initializing */}
            {stage === 1 && (
              <motion.div
                key="stage1"
                initial={{ opacity: 0, letterSpacing: '0em' }}
                animate={{ opacity: 1, letterSpacing: '0.2em' }}
                exit={{ opacity: 0 }}
                className="text-brand-text-muted text-[10px] uppercase font-medium"
              >
                Initializing Experience
              </motion.div>
            )}

            {/* Stages 2-5: Rapid words */}
            {(stage >= 2 && stage <= 5) && (
              <motion.div
                key={`rapid-${stage}`}
                initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.2, filter: 'blur(10px)' }}
                transition={{ duration: 0.2 }}
                className="text-4xl md:text-7xl font-black text-white tracking-tighter"
              >
                {stage === 2 && 'REACT'}
                {stage === 3 && 'AI'}
                {stage === 4 && 'FULL STACK'}
                {stage === 5 && 'UI/UX'}
              </motion.div>
            )}

            {/* Stage 6-9: Progress line and story */}
            {(stage >= 6 && stage <= 9) && (
              <div key="story" className="flex flex-col items-center w-full max-w-md gap-4">
                {stage === 6 && (
                  <motion.div 
                    initial={{ scaleX: 0 }} 
                    animate={{ scaleX: 1 }} 
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="w-full h-[1px] bg-white/20 origin-left"
                  />
                )}
                
                <div className="flex flex-col gap-1 items-center overflow-hidden">
                  {stage >= 7 && (
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }}
                      className="text-lg md:text-xl font-medium tracking-widest text-brand-text-muted"
                    >
                      6 MONTHS
                    </motion.div>
                  )}
                  {stage >= 8 && (
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }}
                      className="text-lg md:text-xl font-medium tracking-widest text-brand-text-muted"
                    >
                      ONE JOURNEY
                    </motion.div>
                  )}
                  {stage >= 9 && (
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }}
                      className="text-lg md:text-xl font-medium tracking-widest text-brand-text-muted"
                    >
                      MANY BUILDS
                    </motion.div>
                  )}
                </div>
              </div>
            )}

            {/* Stage 10: Final Reveal */}
            {stage === 10 && (
              <motion.div
                key="stage10"
                className="flex flex-col items-center justify-center gap-6"
              >
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: '100%', rotate: 5 }}
                    animate={{ y: '0%', rotate: 0 }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none"
                  >
                    ABHIJIT
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: '100%', rotate: -5 }}
                    animate={{ y: '0%', rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none"
                  >
                    BHUNIA
                  </motion.div>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  transition={{ delay: 0.6, duration: 1 }}
                  className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-4 text-xs md:text-sm font-medium tracking-[0.2em] text-brand-indigo-light"
                >
                  <span>AI/ML TRAINEE</span>
                  <span className="hidden md:block opacity-50">&bull;</span>
                  <span>FULL-STACK DEVELOPER</span>
                  <span className="hidden md:block opacity-50">&bull;</span>
                  <span>UI/UX ENTHUSIAST</span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Skip button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={() => {
            setStage(11);
            setTimeout(onComplete, 800);
          }}
          className="absolute bottom-10 text-brand-text-muted hover:text-white text-[10px] font-bold tracking-widest transition-colors uppercase z-10"
          data-cursor="link"
        >
          Skip Intro
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}
