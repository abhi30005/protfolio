import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import { Code2, Server, BrainCircuit, Database, Cloud, Zap, BarChart } from 'lucide-react';
import TiltCard from './TiltCard';

const techConstellation = [
  { name: "React", r: 100, angle: 0, speed: 20 },
  { name: "Python", r: 140, angle: 45, speed: 25 },
  { name: "Java", r: 180, angle: 90, speed: 22 },
  { name: "FastAPI", r: 120, angle: 135, speed: 18 },
  { name: "LangChain", r: 160, angle: 180, speed: 30 },
  { name: "LangGraph", r: 200, angle: 225, speed: 35 },
  { name: "Node.js", r: 130, angle: 270, speed: 28 },
  { name: "MongoDB", r: 170, angle: 315, speed: 24 },
  { name: "AWS", r: 210, angle: 30, speed: 32 },
  { name: "Docker", r: 220, angle: 120, speed: 40 },
  { name: "Git", r: 190, angle: 210, speed: 26 },
  { name: "Tailwind", r: 150, angle: 300, speed: 21 },
  { name: "Power Apps", r: 240, angle: 60, speed: 45 },
];

const categoryConfig = {
  frontend: { title: 'FRONTEND', icon: Code2, color: 'text-indigo-600' },
  backend: { title: 'BACKEND', icon: Server, color: 'text-slate-700' },
  aiMl: { title: 'AI / ML', icon: BrainCircuit, color: 'text-violet-600' },
  database: { title: 'DATABASE', icon: Database, color: 'text-cyan-600' },
  automation: { title: 'AUTOMATION', icon: Zap, color: 'text-yellow-500' },
  cloudDevOps: { title: 'CLOUD / TOOLS', icon: Cloud, color: 'text-slate-500' },
  analyticsTools: { title: 'ANALYTICS', icon: BarChart, color: 'text-emerald-500' }
};

export default function Skills() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      
      <div className="text-center mb-24">
        <h2 className="text-sm font-bold tracking-widest text-slate-400 mb-4 uppercase">My Toolkit</h2>
        <div className="text-4xl md:text-5xl font-black text-slate-900">Technology Constellation</div>
      </div>

      {/* Constellation */}
      <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] mx-auto mb-32 flex items-center justify-center">
        
        {/* Rings */}
        {[100, 150, 200, 250].map((r, i) => (
          <div 
            key={i} 
            className="absolute rounded-full border border-slate-200" 
            style={{ width: r * 2, height: r * 2, opacity: 0.5 - (i * 0.1) }}
          />
        ))}

        <TiltCard>
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Center */}
            <div className="absolute z-20 w-24 h-24 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-full flex items-center justify-center shadow-2xl text-white font-black tracking-widest text-sm shadow-indigo-500/30">
              ABHIJIT
            </div>

            {/* Orbiting Tech */}
            {techConstellation.map((tech, i) => (
              <motion.div
                key={i}
                animate={{ rotate: 360 }}
                transition={{ duration: tech.speed, repeat: Infinity, ease: "linear", delay: -tech.angle }}
                className="absolute inset-0 origin-center pointer-events-none"
              >
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: tech.speed, repeat: Infinity, ease: "linear", delay: -tech.angle }}
                  className="absolute pointer-events-auto group cursor-crosshair"
                  style={{
                    top: '50%', left: '50%',
                    marginTop: '-16px', marginLeft: '-40px',
                    transform: `translateX(${tech.r}px)`
                  }}
                >
                  <div className="glass px-3 py-1.5 rounded-full text-xs font-bold text-slate-700 whitespace-nowrap shadow-sm border border-slate-200 bg-white/80 backdrop-blur-md group-hover:scale-125 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    {tech.name}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </TiltCard>
      </div>

      {/* Structured Skills by Domain */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(skills).map(([key, items], index) => {
          const config = categoryConfig[key];
          if(!config) return null;
          const Icon = config.icon;
          
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="border-t border-slate-200 pt-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <Icon className={config.color} size={20} />
                <h3 className="font-bold text-slate-900 tracking-wider text-sm">{config.title}</h3>
              </div>
              <ul className="space-y-3">
                {items.map((item, i) => (
                  <li key={i} className="text-slate-600 font-medium text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
