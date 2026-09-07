import { motion } from 'framer-motion';

const learnings = [
  { title: "Problem Solving", description: "Learning how to break down complex business problems into manageable technical architecture." },
  { title: "Design Thinking", description: "Prioritizing the user experience and interface before writing a single line of code." },
  { title: "User Experience", description: "Ensuring applications are not just functional, but intuitive and delightful to use." },
  { title: "AI Integration", description: "Moving beyond basic API calls to building complex, stateful AI workflows." },
  { title: "Automation", description: "Connecting disjointed systems into seamless, automated enterprise workflows." },
  { title: "Product Thinking", description: "Focusing on what features actually bring value to the end user." }
];

export default function Learning() {
  return (
    <section id="learning" className="py-32 px-6 max-w-7xl mx-auto relative">
      <div className="text-center mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tight"
        >
          But the real output wasn't just code.
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: 'spring' }}
          className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500 uppercase tracking-widest"
        >
          It was learning.
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {learnings.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-center min-h-[250px] text-center cursor-default group hover:border-indigo-200 transition-colors"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
              {item.title}
            </h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
