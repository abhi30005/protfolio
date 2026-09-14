import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';
import { useRef, useEffect, useState } from 'react';



export default function ProfileCard() {
  const containerRef = useRef(null);
  const { x: mouseX, y: mouseY } = useMousePosition();
  
  // Base rotation values
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  
  // Smooth springs for 3D tilt
  const springConfig = { stiffness: 100, damping: 30, mass: 1 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // We want the tilt to be relative to the center of the ProfileCard
    const handleMouseMove = () => {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      // Calculate normalized position (-1 to 1)
      const normalizedX = (mouseX - centerX) / (width / 2);
      const normalizedY = (mouseY - centerY) / (height / 2);
      
      // Max tilt angle is 15 degrees
      rotateX.set(normalizedY * -15);
      rotateY.set(normalizedX * 15);
    };

    handleMouseMove(); // Update on every mouse tick
  }, [mouseX, mouseY, rotateX, rotateY]);

  return (
    <div className="relative w-full aspect-square flex items-center justify-center max-w-[500px] mx-auto" ref={containerRef} style={{ perspective: 1000 }}>
      {/* Dynamic Background Glow */}
      <motion.div 
        className="absolute inset-0 rounded-full bg-brand-indigo/20 blur-[100px] -z-10"
        style={{
          scale: useTransform(smoothRotateY, [-15, 15], [0.9, 1.1])
        }}
      />
      
      <motion.div
        className="relative w-[70%] h-[70%] z-10"
        style={{
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
          transformStyle: "preserve-3d"
        }}
      >
        {/* Animated Border Ring */}
        <motion.div 
          className="absolute inset-[-10%] rounded-full border border-white/10"
          style={{ translateZ: -20 }}
          animate={{ rotateZ: 360 }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        />
        <motion.div 
          className="absolute inset-[-20%] rounded-full border border-brand-cyan/20 border-dashed"
          style={{ translateZ: -40 }}
          animate={{ rotateZ: -360 }}
          transition={{ duration: 60, ease: "linear", repeat: Infinity }}
        />

        {/* Modern Animated Core replacing the basic profile pic */}
        <div 
          className="w-full h-full rounded-full p-2 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-2xl border border-white/20 shadow-2xl overflow-hidden"
          style={{ transform: "translateZ(30px)" }}
          data-cursor="image"
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-brand-bg relative flex items-center justify-center group">
            
            {/* Animated Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_80%)] opacity-50" />
            
            {/* Inner Glowing Orb */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 180, 270, 360]
              }}
              transition={{ 
                duration: 15,
                repeat: Infinity,
                ease: "linear" 
              }}
              className="absolute w-[150%] h-[150%] bg-[conic-gradient(from_0deg_at_50%_50%,#4f46e5_0%,#06b6d4_50%,#4f46e5_100%)] opacity-30 blur-2xl group-hover:opacity-60 transition-opacity duration-700"
            />
            
            {/* Geometric Center Shape */}
            <motion.div 
              className="relative z-10 w-24 h-24 md:w-32 md:h-32 border border-white/30 bg-white/5 backdrop-blur-md flex items-center justify-center overflow-hidden"
              style={{ borderRadius: '30%' }}
              animate={{ rotate: [0, 90, 180, 270, 360] }}
              transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-indigo/40 to-brand-cyan/40 opacity-50" />
            </motion.div>

            {/* Inner Counter-Rotating Shape */}
            <motion.div 
              className="absolute z-10 w-20 h-20 md:w-28 md:h-28 border border-white/20 bg-transparent flex items-center justify-center overflow-hidden"
              style={{ borderRadius: '40%' }}
              animate={{ rotate: [360, 270, 180, 90, 0] }}
              transition={{ duration: 15, ease: "linear", repeat: Infinity }}
            />

            {/* Static Initial Label */}
            <div className="absolute z-20 font-black text-5xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50 select-none group-hover:scale-110 transition-transform duration-500">
              AB
            </div>
            
          </div>
        </div>


      </motion.div>
    </div>
  );
}
