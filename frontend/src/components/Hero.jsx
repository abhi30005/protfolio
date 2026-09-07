import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { profile } from '../data/profile';
import Magnetic from './Magnetic';
import ProfileCard from './ProfileCard';

export default function Hero() {
  return (
    <section id="hero" className="min-h-[100svh] pt-24 pb-16 px-6 flex flex-col justify-center max-w-7xl mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="order-2 lg:order-1 flex flex-col"
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

        {/* Right Content - Interactive 3D Profile Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center w-full"
        >
          <ProfileCard />
        </motion.div>

      </div>
    </section>
  );
}
