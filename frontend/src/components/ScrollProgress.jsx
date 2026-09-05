import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const chapters = [
  { id: 'intro', name: 'INTRO' },
  { id: 'hero', name: 'PROFILE' },
  { id: 'journey', name: 'JOURNEY' },
  { id: 'projects', name: 'PROJECTS' },
  { id: 'skills', name: 'SKILLS' },
  { id: 'about', name: 'ABOUT' },
  { id: 'contact', name: 'CONTACT' }
];

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  const [activeId, setActiveId] = useState('intro');
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Very basic section tracking based on offsets
      // In a real app, IntersectionObserver is better, but this works for the progress indicator
      const sections = chapters.map(c => document.getElementById(c.id)).filter(Boolean);
      if (sections.length === 0) return;
      
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentSection = sections[0];
      
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollPosition) {
          currentSection = sections[i];
          setActiveIndex(i);
          setActiveId(currentSection.id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col items-end gap-4 z-50 mix-blend-difference hidden md:flex pointer-events-none">
      <div className="flex flex-col items-end gap-1">
        <motion.span 
          key={activeId}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-bold text-white tracking-widest"
        >
          {String(activeIndex + 1).padStart(2, '0')} / {String(chapters.length).padStart(2, '0')}
        </motion.span>
        <motion.span 
          key={`name-${activeId}`}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-[10px] font-medium text-white/70 tracking-widest uppercase"
        >
          {chapters[activeIndex].name}
        </motion.span>
      </div>
      
      <div className="relative w-px h-32 bg-white/10 overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 right-0 bg-white origin-top"
          style={{ scaleY, height: '100%' }}
        />
      </div>
    </div>
  );
}
