import { useRef } from 'react';
import { Cpu, Rocket, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { journey } from '../data/journey';

const journeyNodes = [
  {
    month: "FEB",
    title: "Onboarding & Foundation",
    summary:
      "Began my professional journey with onboarding, getting familiar with the development environment and workflow while revisiting the programming fundamentals I already knew.",
    items: [
      "Programming Fundamentals",
      "Python",
      "JavaScript",
      "SQL",
      "Git & GitHub",
      "Development Workflow",
    ],
    projects: [
      "Technical Onboarding",
      "Fundamentals Revision",
    ],
  },

  {
    month: "MAR",
    title: "Frontend & Generative AI",
    summary:
      "Started learning React and LLM Engineering while exploring workflow automation with Zapier and building my first AI-powered applications.",
    items: [
      "React",
      "LLM Engineering",
      "Prompt Engineering",
      "Zapier",
      "Generative AI",
      "Automation",
    ],
    projects: [
      "AI Medical Chatbot",
      "AI Email Automation",
    ],
  },

  {
    month: "APR",
    title: "RAG & AI Engineering",
    summary:
      "Deepened my LLM Engineering knowledge by learning RAG and LangChain and applying these concepts to practical AI content and productivity applications.",
    items: [
      "LLM Engineering",
      "RAG",
      "LangChain",
      "Prompt Engineering",
      "Generative AI",
      "AI Application Development",
    ],
    projects: [
      "AI Content Writer",
      "AI Email Writer",
    ],
  },

  {
    month: "MAY",
    title: "Backend & Data Engineering",
    summary:
      "Expanded into backend development with FastAPI and TypeScript while building full-stack applications and developing my understanding of ETL and data pipelines.",
    items: [
      "FastAPI",
      "TypeScript",
      "Python",
      "REST APIs",
      "ETL",
      "Data Processing",
    ],
    projects: [
      "ATLAS — AI Research & Knowledge Agent",
      "City Canvas",
      "ETL Pipeline",
    ],
  },

  {
    month: "JUN",
    title: "AI Platforms & Data",
    summary:
      "Completed major AI application projects while continuing ETL development and strengthening my SQL, data processing, and full-stack development skills.",
    items: [
      "AI Applications",
      "SQL",
      "ETL",
      "Data Processing",
      "RAG",
      "Full-Stack Development",
    ],
    projects: [
      "Safari",
      "AI Learning Management Platform",
      "ETL Pipeline",
    ],
  },

  {
    month: "JUL",
    title: "Business Intelligence & Pre-Sales",
    summary:
      "Started learning Power BI and Excel while contributing to the Pre-Sales AI project as a frontend developer and building a full-stack AI chat application.",
    items: [
      "Power BI",
      "Excel",
      "React",
      "TypeScript",
      "Frontend Development",
      "AI Integration",
    ],
    projects: [
      "Pre-Sales AI Agent",
      "AIGramX",
    ],
  },

  {
    month: "AUG-SEPT",
    title: "AI Agents & Business Automation",
    summary:
      "Worked on Pre-Sales AI Agent V2 while expanding into Power Apps, Power Automate, Dataverse, and AI-powered procurement workflow automation.",
    items: [
      "AI Agents",
      "React",
      "Power Apps",
      "Power Automate",
      "Dataverse",
      "Workflow Automation",
    ],
    projects: [
      "Pre-Sales AI Agent V2",
      "Procurement Power App",
      "Procurement Automation",
      "Power Apps Profile",
    ],
  },
];



export default function JourneyTimeline() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" ref={containerRef} className="relative py-32 bg-brand-bg overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[80%] bg-brand-indigo/5 blur-[120px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4"
          >
            6 MONTHS.<br className="md:hidden"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-brand-cyan">ONE TRANSFORMATION.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-brand-text-muted max-w-2xl mx-auto text-sm md:text-base uppercase tracking-widest font-bold"
          >
            From learning fundamentals to building AI-powered products.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Center Line Background */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:-translate-x-1/2" />
          
          {/* Center Line Animated Progress */}
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-brand-indigo via-brand-violet to-brand-cyan md:-translate-x-1/2 shadow-[0_0_15px_rgba(99,102,241,0.5)] origin-top"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-16 md:gap-24">
            {journeyNodes.map((node, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`relative flex items-center w-full ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                  
                  {/* Timeline Node Dot */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-brand-bg border-4 border-brand-indigo -translate-x-[10px] md:-translate-x-1/2 z-20 shadow-[0_0_20px_rgba(99,102,241,0.5)]"
                  />

                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                    className={`w-full ml-12 md:ml-0 md:w-[45%] ${isEven ? 'md:pr-12' : 'md:pl-12'}`}
                  >
                    <div className="group relative bg-[#0a0a0a]/80 backdrop-blur-xl p-5 md:p-6 rounded-3xl hover:bg-[#111]/90 transition-all duration-500 border border-white/[0.05] hover:border-brand-indigo/40 overflow-hidden cursor-none shadow-2xl" data-cursor="project">
                      
                      {/* Subtle hover glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/10 via-transparent to-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      <div className="relative z-10">
                        {/* Header Section */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-indigo/10 border border-brand-indigo/20 text-brand-cyan text-[9px] font-bold tracking-widest uppercase shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                            {node.month}
                          </div>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-black text-white mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-brand-cyan transition-all duration-300">
                          {node.title}
                        </h3>
                        
                        <p className="text-white/60 mb-6 text-xs md:text-sm leading-relaxed font-light">
                          {node.summary}
                        </p>
                        
                        {/* Skills / Tech - Minimalist */}
                        <div className="mb-5">
                          <h4 className="text-[9px] uppercase tracking-widest text-white/40 font-semibold mb-2 flex items-center gap-1.5">
                            <Cpu size={12} className="text-brand-indigo" /> Core Technologies
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {node.items.map((item, j) => (
                              <span key={j} className="px-2.5 py-1 bg-white/[0.03] border border-white/[0.05] text-white/70 hover:text-white hover:bg-white/[0.1] hover:border-white/[0.1] transition-all rounded-md text-[10px] md:text-xs font-medium tracking-wide">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Projects - Sleek List */}
                        {node.projects && node.projects.length > 0 && (
                          <div className="pt-4 border-t border-white/[0.05]">
                            <h4 className="text-[9px] uppercase tracking-widest text-white/40 font-semibold mb-2 flex items-center gap-1.5">
                              <Rocket size={12} className="text-brand-cyan" /> Key Projects
                            </h4>
                            <div className="flex flex-col gap-2">
                              {node.projects.map((project, k) => (
                                <div key={k} className="group/project flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/[0.02] hover:border-brand-cyan/20 hover:bg-brand-cyan/[0.02] transition-all duration-300 cursor-pointer">
                                  <div className="flex items-center gap-2.5">
                                    <div className="w-6 h-6 rounded-md bg-brand-indigo/10 flex items-center justify-center border border-brand-indigo/20 group-hover/project:border-brand-cyan/30 group-hover/project:bg-brand-cyan/10 transition-colors">
                                      <FolderGit2 size={12} className="text-brand-indigo group-hover/project:text-brand-cyan transition-colors" />
                                    </div>
                                    <span className="text-white/80 text-xs font-medium group-hover/project:text-white transition-colors">{project}</span>
                                  </div>
                                  <ArrowUpRight size={14} className="text-white/20 group-hover/project:text-brand-cyan group-hover/project:-translate-y-0.5 group-hover/project:translate-x-0.5 transition-all duration-300" />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}
