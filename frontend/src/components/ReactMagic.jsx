import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ReactMagic() {
  const [demoState, setDemoState] = useState('idle');
  const [deviceState, setDeviceState] = useState('desktop');

  return (
    <section className="py-40 px-6 max-w-7xl mx-auto relative overflow-hidden">
      
      <div className="text-center mb-24">
        <h2 className="text-xs font-bold tracking-[0.3em] text-brand-text-muted mb-4 uppercase">Built With React</h2>
        <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter max-w-3xl mx-auto">
          Frontend Engineering Demonstration
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* Interactive State Demo */}
        <div className="glass p-8 md:p-12 rounded-[2rem] border border-white/5 relative group cursor-none" data-cursor="drag">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-indigo/10 blur-[50px] rounded-full" />
          <h3 className="text-xl font-black text-white mb-2">Interactive State Management</h3>
          <p className="text-sm text-brand-text-muted font-medium mb-8">Click to cycle through UI component states</p>
          
          <div className="flex justify-center items-center h-48 bg-brand-surface rounded-2xl border border-white/5 mb-6">
            <AnimatePresence mode="wait">
              <motion.button
                key={demoState}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                onClick={() => {
                  const states = ['idle', 'loading', 'success', 'error'];
                  const next = states[(states.indexOf(demoState) + 1) % states.length];
                  setDemoState(next);
                }}
                className={`relative overflow-hidden px-8 py-4 rounded-full font-bold tracking-widest text-sm transition-colors shadow-lg pointer-events-auto ${
                  demoState === 'idle' ? 'bg-white text-black hover:bg-slate-200' :
                  demoState === 'loading' ? 'bg-brand-indigo text-white cursor-wait' :
                  demoState === 'success' ? 'bg-emerald-500 text-white' :
                  'bg-red-500 text-white'
                }`}
              >
                {demoState === 'idle' && 'SUBMIT ACTION'}
                {demoState === 'loading' && (
                  <div className="flex items-center gap-2">
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
                    PROCESSING
                  </div>
                )}
                {demoState === 'success' && 'SUCCESSFUL'}
                {demoState === 'error' && 'FAILED - RETRY'}
              </motion.button>
            </AnimatePresence>
          </div>
          
          <div className="flex gap-2">
            {['idle', 'loading', 'success', 'error'].map(s => (
              <button 
                key={s}
                onClick={() => setDemoState(s)}
                className={`px-3 py-1 rounded-md text-xs font-bold uppercase pointer-events-auto ${demoState === s ? 'bg-white/10 text-white' : 'text-brand-text-muted hover:text-white'}`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Design Demo */}
        <div className="glass p-8 md:p-12 rounded-[2rem] border border-white/5 relative cursor-none" data-cursor="project">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 blur-[50px] rounded-full" />
          <h3 className="text-xl font-black text-white mb-2">Responsive Architecture</h3>
          <p className="text-sm text-brand-text-muted font-medium mb-8">Fluid layout transformation across viewports</p>
          
          <div className="flex justify-center items-center h-48 bg-brand-surface rounded-2xl border border-white/5 mb-6 overflow-hidden p-4">
            <motion.div 
              layout
              className={`bg-white/5 border border-white/10 rounded-xl flex transition-all duration-500 ${
                deviceState === 'mobile' ? 'w-24 h-40 flex-col' : 
                deviceState === 'tablet' ? 'w-48 h-32 flex-col' : 
                'w-64 h-24 flex-row items-center p-2'
              }`}
            >
              <motion.div layout className="bg-brand-indigo/50 rounded-lg shrink-0 m-2" style={{
                width: deviceState === 'desktop' ? '40px' : 'auto',
                height: deviceState === 'desktop' ? '40px' : '40%',
              }} />
              <div className="flex flex-col gap-2 p-2 flex-1 justify-center w-full">
                <motion.div layout className="h-2 bg-white/20 rounded-full w-3/4" />
                <motion.div layout className="h-2 bg-white/10 rounded-full w-1/2" />
              </div>
            </motion.div>
          </div>
          
          <div className="flex gap-2">
            {['desktop', 'tablet', 'mobile'].map(s => (
              <button 
                key={s}
                onClick={() => setDeviceState(s)}
                className={`px-3 py-1 rounded-md text-xs font-bold uppercase pointer-events-auto ${deviceState === s ? 'bg-white/10 text-white' : 'text-brand-text-muted hover:text-white'}`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
