import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function HeroVisual() {
  const [progress, setProgress] = useState(0);
  const [showAB, setShowAB] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      const increment = current < 30 ? 1 : current < 60 ? 2 : current < 85 ? 3 : 5;
      current = Math.min(current + increment, 100);
      setProgress(current);
      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => setShowAB(true), 400);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Fill height from bottom (0% = empty, 100% = full)
  const fillPercent = progress;

  return (
    <div className="relative w-full max-w-[420px] aspect-square mx-auto flex items-center justify-center">

      {/* Outer aurora glow — appears after fill */}
      <motion.div
        animate={{
          opacity: showAB ? 0.4 : 0,
          background: [
            'conic-gradient(from 0deg at 50% 50%, #f97316 0%, #f43f5e 25%, #fbbf24 50%, #f97316 75%, #f43f5e 100%)',
            'conic-gradient(from 90deg at 50% 50%, #f43f5e 0%, #fbbf24 25%, #f97316 50%, #f43f5e 75%, #fbbf24 100%)',
            'conic-gradient(from 180deg at 50% 50%, #fbbf24 0%, #f97316 25%, #f43f5e 50%, #fbbf24 75%, #f97316 100%)',
            'conic-gradient(from 360deg at 50% 50%, #f97316 0%, #f43f5e 25%, #fbbf24 50%, #f97316 75%, #f43f5e 100%)',
          ],
        }}
        transition={{ opacity: { duration: 1 }, background: { duration: 6, repeat: Infinity, ease: 'linear' } }}
        className="absolute w-[85%] h-[85%] rounded-full blur-[60px]"
      />

      {/* Pulsing rings — appear after complete */}
      <AnimatePresence>
        {showAB && (
          <>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-[88%] h-[88%] rounded-full border border-white/10"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [1, 1.12, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute w-[95%] h-[95%] rounded-full border border-white/5"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ rotate: 360, opacity: 1 }}
              transition={{ rotate: { duration: 30, repeat: Infinity, ease: 'linear' }, opacity: { duration: 1 } }}
              className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-orange-500/20"
            />
          </>
        )}
      </AnimatePresence>

      {/* Main circle */}
      <div className="relative z-10 w-[72%] h-[72%] rounded-full flex items-center justify-center border border-white/10 overflow-hidden bg-[#0a0a14]">

        {/* Liquid fill — rises from bottom to top */}
        <div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{ opacity: showAB ? 0 : 1, transition: 'opacity 0.8s ease' }}
        >
          {/* The rising fill */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{ height: `${fillPercent}%`, transition: 'height 0.05s linear' }}
          >
            {/* Gradient fill color */}
            <div className="absolute inset-0 bg-gradient-to-t from-orange-600 via-rose-500 to-amber-400 opacity-80" />

            {/* Wave effect on top of the fill */}
            <div className="absolute -top-3 left-0 right-0 h-6 overflow-hidden">
              <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-[200%] h-full" style={{ animation: 'waveSlide 3s linear infinite' }}>
                <path d="M0,30 C150,10 350,50 600,30 C850,10 1050,50 1200,30 L1200,60 L0,60 Z" fill="rgba(249,115,22,0.6)" />
                <path d="M0,35 C200,15 400,55 600,35 C800,15 1000,55 1200,35 L1200,60 L0,60 Z" fill="rgba(244,63,94,0.4)" />
              </svg>
            </div>

            {/* Subtle shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" style={{ animation: 'shimmer 2s ease-in-out infinite' }} />
          </div>
        </div>

        {/* Grid texture */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)] z-10 pointer-events-none" />

        {/* Radial glow behind text — after reveal */}
        <motion.div
          animate={{ opacity: showAB ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute w-40 h-40 rounded-full bg-orange-500/15 blur-2xl z-10"
        />

        {/* Percentage counter → AB reveal */}
        <AnimatePresence mode="wait">
          {!showAB ? (
            <motion.div
              key="percentage"
              exit={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
              transition={{ duration: 0.4 }}
              className="relative z-20 select-none flex flex-col items-center"
            >
              <span className="text-4xl md:text-5xl font-black tracking-tight text-white font-mono tabular-nums drop-shadow-lg">
                {progress}%
              </span>
              <span className="text-[10px] text-white/40 tracking-[0.3em] uppercase font-bold mt-1 drop-shadow">
                initializing
              </span>
            </motion.div>
          ) : (
            <motion.div
              key="initials"
              initial={{ opacity: 0, scale: 0.5, filter: 'blur(15px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-20 select-none"
            >
              <span className="text-7xl md:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/40">
                AB
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Spinning gradient border — after fill completes */}
        <AnimatePresence>
          {showAB && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: [0, 360] }}
              transition={{ opacity: { duration: 0.5 }, rotate: { duration: 8, repeat: Infinity, ease: 'linear' } }}
              className="absolute inset-0 rounded-full z-30"
              style={{
                background: 'conic-gradient(from 0deg, #f97316, #f43f5e, #fbbf24, #f97316)',
                mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 3px))',
                WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 3px))',
              }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Status badge */}
      <AnimatePresence>
        {showAB && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-[8%] z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-xl"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[11px] font-bold text-white/60 tracking-widest uppercase">Open to work</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS Keyframes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes waveSlide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes shimmer {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}} />
    </div>
  );
}
