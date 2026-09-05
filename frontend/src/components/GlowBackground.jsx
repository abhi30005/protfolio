import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';

export default function GlowBackground() {
  const { x, y } = useMousePosition();
  
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-brand-bg">
      {/* Ambient static glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-indigo/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-violet/5 rounded-full blur-[150px]" />
      
      {/* Dynamic cursor-following spotlight */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[100px]"
        animate={{
          x: x - 300,
          y: y - 300,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 1 }}
      />
    </div>
  );
}
