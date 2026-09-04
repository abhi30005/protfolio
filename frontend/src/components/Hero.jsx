import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { profile } from '../data/profile';
import Magnetic from './Magnetic';

const floatingLabels = [
  "React", "AI/ML", "Python", "FastAPI", "LangChain", "UI/UX"
];

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-16 px-6 flex flex-col justify-center max-w-7xl mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="order-2 lg:order-1"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-500 font-bold text-xs tracking-widest mb-8 border border-slate-200">
            6-MONTH INTERNSHIP JOURNEY
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">
              {profile.name}.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl font-medium text-slate-700 mb-6">
            {profile.role}
          </p>
          
          <p className="text-lg text-slate-500 leading-relaxed max-w-xl mb-12">
            Six months of learning, building, experimenting and turning ideas into working digital experiences.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <Magnetic>
              <a href="#journey" className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-indigo-600 transition-colors flex items-center gap-2 group">
                EXPLORE MY JOURNEY
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#projects" className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold border-2 border-slate-200 hover:border-indigo-600 hover:text-indigo-600 transition-colors">
                VIEW MY PROJECTS
              </a>
            </Magnetic>
            <Magnetic>
              <a href={profile.links.resume} target="_blank" rel="noreferrer" className="w-14 h-14 bg-slate-50 text-slate-600 rounded-full flex items-center justify-center border border-slate-200 hover:border-indigo-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors" title="Download Resume">
                <FileText size={20} />
              </a>
            </Magnetic>
          </div>
        </motion.div>

        {/* Right Content - Profile Image with Orbit */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="order-1 lg:order-2 flex justify-center relative h-[350px] md:h-[500px]"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Outer Orbit Rings */}
            <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border border-slate-200/50 animate-[spin_30s_linear_infinite]" />
            <div className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full border border-indigo-100 animate-[spin_20s_linear_infinite_reverse]" />
            
            {/* Center Image */}
            <div className="relative z-10 w-48 h-48 md:w-72 md:h-72 rounded-full p-2 bg-white shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 flex items-center justify-center">
                <img 
                  src="/profile.jpg" 
                  alt={profile.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-indigo-100 to-cyan-50 text-indigo-300 font-bold text-6xl">
                  {profile.name.charAt(0)}
                </div>
              </div>
            </div>

            {/* Orbiting Labels */}
            {floatingLabels.map((label, i) => {
              const angle = (i * 360) / floatingLabels.length;
              return (
                <motion.div
                  key={label}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 origin-center pointer-events-none"
                >
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute"
                    style={{
                      top: '50%',
                      left: '50%',
                      marginTop: '-16px', // half of height
                      marginLeft: '-40px', // rough half of width
                      transform: `rotate(${angle}deg) translateX(${window.innerWidth > 768 ? 220 : 150 + (i % 2 === 0 ? 30 : 0)}px) rotate(-${angle}deg)`
                    }}
                  >
                    <div className="glass px-4 py-2 rounded-full text-xs font-bold text-slate-700 whitespace-nowrap shadow-sm border border-white">
                      {label}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
