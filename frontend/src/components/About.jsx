import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import TiltCard from './TiltCard';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Editorial Profile Section */}
      <div className="grid lg:grid-cols-12 gap-12 items-center mb-48">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 relative"
        >
          <TiltCard>
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://ui-avatars.com/api/?name=Abhijit+Bhunia&background=0D8ABC&color=fff&size=512" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-full bg-slate-900 flex items-center justify-center text-white text-8xl font-black">
                {profile.name.charAt(0)}
              </div>
            </div>
          </TiltCard>
          
          <div className="absolute -bottom-8 -right-8 glass p-6 rounded-2xl shadow-xl border border-white max-w-[200px]">
            <div className="text-3xl font-black text-indigo-600 mb-1">6 MONTHS</div>
            <div className="text-xs font-bold text-slate-500 uppercase">Professional Journey</div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 lg:pl-12"
        >
          <h2 className="text-sm font-bold tracking-widest text-slate-400 mb-6 uppercase">About Me</h2>
          
          <div className="text-2xl md:text-3xl text-slate-900 leading-relaxed font-medium mb-12">
            "Hi, I'm {profile.name}, a Computer Science graduate passionate about AI, full-stack development and modern digital experiences."
          </div>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            During my six-month professional journey, I worked across frontend development, AI/ML, backend APIs, automation and AI-powered application development.
          </p>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-12">
            My focus is not only on making applications work, but also on making them intuitive, useful and visually engaging.
          </p>

          <div className="flex flex-wrap gap-8">
            <div>
              <div className="text-4xl font-black text-slate-900 mb-2">7+</div>
              <div className="text-xs font-bold text-slate-500 uppercase">Projects Built</div>
            </div>
            <div>
              <div className="text-4xl font-black text-slate-900 mb-2">AI + Web</div>
              <div className="text-xs font-bold text-slate-500 uppercase">Core Focus</div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Internship Presentation Summary */}
      <div className="text-center mb-48">
        <h2 className="text-sm font-bold tracking-widest text-slate-400 mb-8 uppercase">6 Months In One View</h2>
        
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-12">
          {['LEARNED', 'BUILT', 'EXPERIMENTED', 'SOLVED', 'IMPROVED'].map((word, i, arr) => (
            <div key={word} className="flex items-center gap-4 md:gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight"
              >
                {word}
              </motion.div>
              {i < arr.length - 1 && (
                <div className="text-indigo-400 hidden sm:block">→</div>
              )}
            </div>
          ))}
        </div>
        
        <p className="text-xl md:text-3xl text-slate-500 font-medium">
          "From learning technologies to using them to solve problems."
        </p>
      </div>



    </section>
  );
}
