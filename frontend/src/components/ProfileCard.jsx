import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';
import { useRef, useEffect } from 'react';

const floatingLabels = [
  { name: "React", z: 50, speed: 0.05, angle: 0 },
  { name: "AI/ML", z: 120, speed: 0.08, angle: 60 },
  { name: "FastAPI", z: 80, speed: 0.03, angle: 120 },
  { name: "Python", z: 150, speed: 0.06, angle: 180 },
  { name: "LangChain", z: 90, speed: 0.04, angle: 240 },
  { name: "UI/UX", z: 60, speed: 0.07, angle: 300 }
];

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

        {/* Profile Image Core */}
        <div 
          className="w-full h-full rounded-full p-2 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden"
          style={{ transform: "translateZ(30px)" }}
          data-cursor="image"
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-brand-surface relative group">
            <div className="absolute inset-0 bg-brand-indigo/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <img 
              src="/profile.jpg" 
              alt="Abhijit Bhunia"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-brand-indigo to-brand-cyan text-white font-black text-6xl">
              AB
            </div>
          </div>
        </div>

        {/* Orbiting Interactive Labels */}
        {floatingLabels.map((label, index) => {
          // Subtle mouse-driven parallax for each label
          const labelX = useTransform(smoothRotateY, [-15, 15], [-label.speed * 400, label.speed * 400]);
          const labelY = useTransform(smoothRotateX, [-15, 15], [-label.speed * 400, label.speed * 400]);
          
          return (
            <motion.div
              key={label.name}
              className="absolute top-1/2 left-1/2 pointer-events-none"
              style={{
                x: labelX,
                y: labelY,
                translateZ: label.z,
                rotateX: useTransform(smoothRotateX, x => -x), // counter-rotate to face camera
                rotateY: useTransform(smoothRotateY, y => -y)
              }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1] 
                }}
                transition={{ 
                  rotate: { duration: 20 / label.speed, ease: "linear", repeat: Infinity },
                  scale: { duration: 4, ease: "easeInOut", repeat: Infinity, delay: index * 0.5 }
                }}
                className="absolute"
                style={{
                  originX: 0,
                  originY: 0,
                  x: Math.cos(label.angle * (Math.PI / 180)) * 140,
                  y: Math.sin(label.angle * (Math.PI / 180)) * 140
                }}
              >
                <div 
                  className="glass px-4 py-2 rounded-full text-xs font-bold text-white whitespace-nowrap border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] pointer-events-auto transition-colors hover:bg-white/20"
                  data-cursor="project"
                >
                  {label.name}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
