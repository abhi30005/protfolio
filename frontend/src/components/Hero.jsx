import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { profile } from '../data/profile';
import Magnetic from './Magnetic';
import GhostFibers from './GhostFibers';
import Lanyard from './Lanyard';

const lanyardStripesSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
  <rect x="0" width="50" height="100" fill="#000000" />
  <rect x="50" width="50" height="100" fill="#22c55e" />
</svg>
`;
const lanyardStripesImage = `data:image/svg+xml;utf8,${encodeURIComponent(lanyardStripesSVG)}`;

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100svh] w-full flex flex-col justify-center">

      {/* Background 3D Visual */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GhostFibers
          lineColor="#140E35"
          glowColor="#3437A0"
          speed={0.2}
          scale={2}
          rotation={0}
          rotationSpeed={0.25}
          layers={4}
          waveAmplitude={0.015}
          waveFrequency={3}
          waveSpeed={0.15}
          layerSpeed={0.08}
          twist={0.1}
          twistFrequency={5}
          twistSpeed={1.2}
          lineFrequency={5}
          lineSpacing={2}
          lineSharpness={16}
          glowFalloff={10}
          glowIntensity={1.6}
          brightness={2}
          blueBoost={1.25}
          vignette={0.8}
          grain={0.05}
          dpr={1}
          lightMode={false}
          fps={60}
          paused={false}
        />
      </div>

      {/* Gradient Fade to blend smoothly into the next section */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-brand-bg to-transparent pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full pt-20 lg:pt-0">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="flex flex-col max-w-2xl order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '40px' }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-[2px] bg-brand-cyan mb-8"
            />

            <h2 className="text-brand-text-muted font-bold tracking-[0.3em] text-xs uppercase mb-4">
              Hello, I'm
            </h2>

            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-4 relative">
              <span className="relative z-10">{profile.name.toUpperCase()}</span>
              {/* Subtle text shadow/glow behind the name */}
              <span className="absolute top-0 left-0 blur-[20px] text-brand-indigo/40 select-none z-0">
                {profile.name.toUpperCase()}
              </span>
            </h1>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8 text-xs md:text-sm font-bold text-brand-text-muted tracking-widest uppercase">
              <span className="flex items-center gap-2">
                <span className="text-brand-indigo">ID:</span> {profile.employeeId}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
              <span className="flex items-center gap-2">
                <span className="text-brand-cyan">CGPA:</span> {profile.cgpa}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
              <span>{profile.college}</span>
            </div>

            <div className="flex flex-col gap-2 mb-10">
              <p className="text-lg md:text-xl font-medium text-brand-cyan uppercase tracking-widest">
                AI/ML Trainee
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-4">
              <Magnetic strength={50}>
                <a
                  href="#journey"
                  className="px-8 py-4 bg-white text-black rounded-full font-bold text-sm tracking-widest uppercase hover:scale-105 transition-transform flex items-center gap-3 group"
                  data-cursor="link"
                >
                  Explore Journey
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Magnetic>

              <Magnetic strength={30}>
                <a
                  href={profile.links.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-brand-text-muted hover:text-white transition-colors text-sm font-bold tracking-widest uppercase"
                  data-cursor="link"
                >
                  <FileText size={16} />
                  <span>Resume</span>
                </a>
              </Magnetic>
            </div>
          </motion.div>

          {/* Right Content - Visual Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center w-full"
          >
            <Lanyard lanyardImage={lanyardStripesImage} position={[0, 0, 8]} fov={25} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
