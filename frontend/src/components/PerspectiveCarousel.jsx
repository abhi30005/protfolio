import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function PerspectiveCarousel({
  items,
  defaultActiveIndex = 0,
  slideWidth = 600,
  className,
  onSlideClick,
  renderSlideContent,
}) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // Cap slide width on mobile so it doesn't break out of the viewport
  const effectiveSlideWidth = Math.min(slideWidth, windowWidth - 60);

  return (
    <div className={cn("relative flex items-center justify-center overflow-hidden w-full", className)}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ perspective: '1200px' }}>
        <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
          {items.map((item, index) => {
            const isActive = index === activeIndex;
            const distance = Math.abs(index - activeIndex);
            const direction = Math.sign(index - activeIndex);
            
            // Coverflow Math
            const x = direction * (effectiveSlideWidth * 0.7 + distance * 60);
            const z = -distance * 150;
            const rotateY = direction * -45;
            const scale = 1 - distance * 0.1;
            const opacity = distance > 3 ? 0 : 1 - distance * 0.2;
            
            return (
              <motion.div
                key={item.id || index}
                className={cn(
                  "absolute pointer-events-auto cursor-pointer rounded-[2rem] overflow-hidden shadow-2xl bg-[#0a0a0a] border border-white/10 transition-colors",
                  isActive ? "z-20 hover:border-white/30" : "z-10 hover:border-white/20"
                )}
                style={{
                  width: effectiveSlideWidth,
                  aspectRatio: "16/9" // Changed to landscape rectangle
                }}
                initial={false}
                animate={{
                  x,
                  z,
                  rotateY,
                  scale,
                  opacity,
                  zIndex: items.length - distance,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1], // easeOutExpo
                }}
                onClick={() => {
                  if (isActive && onSlideClick) {
                    onSlideClick(item);
                  } else {
                    setActiveIndex(index);
                  }
                }}
              >
                {/* Delegate rendering of the slide to the parent if needed, else default to image */}
                {renderSlideContent ? (
                   renderSlideContent(item, isActive, effectiveSlideWidth, distance)
                ) : (
                  <>
                    <img
                      src={item.src || item.image}
                      alt={item.title || item.name}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-white font-bold text-2xl">{item.title || item.name}</h3>
                      {isActive && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-4 px-4 py-3 bg-white text-black hover:bg-zinc-200 rounded-full text-center text-xs uppercase tracking-widest font-bold transition-colors shadow-xl"
                          >
                            Initialize Project
                          </motion.div>
                      )}
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Controls */}
      <div className="absolute bottom-0 flex items-center gap-2 p-2 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 z-30 pointer-events-auto shadow-2xl">
         <button 
           onClick={handlePrev} 
           className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all cursor-pointer"
         >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
         </button>

         {/* Pagination Dots */}
         <div className="flex items-center gap-2 px-2">
           {items.map((_, i) => (
             <button
               key={i}
               onClick={() => setActiveIndex(i)}
               className={cn(
                 "h-2 rounded-full transition-all duration-300",
                 i === activeIndex 
                   ? "w-6 bg-white" // Active (elongated pill)
                   : "w-2 bg-white/30 hover:bg-white/50" // Inactive (circle)
               )}
             />
           ))}
         </div>

         <button 
           onClick={handleNext} 
           className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all cursor-pointer"
         >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
         </button>
      </div>
    </div>
  );
}
