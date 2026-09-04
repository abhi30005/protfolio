import { Code2, Globe, Mail } from 'lucide-react';
import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-200 bg-slate-50 relative overflow-hidden">
      {/* Subtle glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold text-slate-900">{profile.name}</h3>
          <p className="text-slate-500 mt-1">AI • Full Stack • UI/UX</p>
        </div>

        <div className="text-sm text-slate-400 bg-slate-200/50 px-4 py-2 rounded-full">
          Designed & Built with React
        </div>

        <div className="flex gap-4">
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-indigo-600 transition-colors bg-white rounded-full shadow-sm hover:shadow-md">
            <Code2 size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-indigo-600 transition-colors bg-white rounded-full shadow-sm hover:shadow-md">
            <Globe size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href={profile.links.email} className="p-2 text-slate-400 hover:text-indigo-600 transition-colors bg-white rounded-full shadow-sm hover:shadow-md">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
