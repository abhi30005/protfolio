import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const [cursorState, setCursorState] = useState('default');
  const [cursorText, setCursorText] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const handleMouseOver = (e) => {
      const target = e.target;
      
      // Look for the closest element with a data-cursor attribute
      const cursorElement = target.closest('[data-cursor]');
      
      if (cursorElement) {
        const type = cursorElement.getAttribute('data-cursor');
        setCursorState(type);
        
        switch (type) {
          case 'project': setCursorText('VIEW'); break;
          case 'image': setCursorText('EXPLORE'); break;
          case 'drag': setCursorText('DRAG \u2192'); break; // arrow right
          case 'ai': setCursorText('ASK AI'); break;
          default: setCursorText('');
        }
      } else if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setCursorState('link');
        setCursorText('');
      } else {
        setCursorState('default');
        setCursorText('');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isMobile) return null;

  const isTextState = ['project', 'image', 'drag', 'ai'].includes(cursorState);
  const isHovering = cursorState !== 'default';

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none z-[9999]"
        style={{ originX: 0.5, originY: 0.5 }}
        animate={{
          x: x - (isTextState ? 40 : (isHovering ? 24 : 16)),
          y: y - (isTextState ? 40 : (isHovering ? 24 : 16)),
          width: isTextState ? 80 : (isHovering ? 48 : 32),
          height: isTextState ? 80 : (isHovering ? 48 : 32),
          backgroundColor: isTextState ? 'rgba(255, 255, 255, 0.95)' : (isHovering ? 'rgba(255,255,255,0.1)' : 'transparent'),
          border: isTextState ? 'none' : (isHovering ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(255,255,255,0.4)'),
          mixBlendMode: isTextState ? 'normal' : 'difference'
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28, mass: 0.5 }}
        style={{ borderRadius: '50%' }}
      >
        <AnimatePresence>
          {isTextState && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-[10px] font-bold text-black tracking-widest text-center leading-none"
            >
              {cursorText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
      
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference"
        animate={{
          x: x - 3,
          y: y - 3,
          scale: isHovering ? 0 : 1
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 20, mass: 0.2 }}
      />
    </>
  );
}
