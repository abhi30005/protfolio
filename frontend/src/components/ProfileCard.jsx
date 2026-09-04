import { motion } from 'framer-motion';
import { Briefcase, MapPin, GraduationCap, Calendar, Hash } from 'lucide-react';
import { profile } from '../data/profile';
import TiltCard from './TiltCard';

export default function ProfileCard() {
  return (
    <section className="pb-32 px-6 max-w-5xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center text-sm font-bold tracking-widest text-slate-400 mb-8 uppercase">
          The Person Behind The Projects
        </h2>

        <TiltCard className="w-full">
          <div className="glass p-8 md:p-12 rounded-[2rem] border border-white shadow-xl shadow-slate-200/50 relative overflow-hidden">
            {/* Subtle bg styling */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px]" />
            
            <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
              <div>
                <h3 className="text-3xl font-black text-slate-900 mb-2">{profile.name}</h3>
                <p className="text-indigo-600 font-semibold mb-8">{profile.internshipRole}</p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                      <Hash size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase">Employee ID</p>
                      <p className="font-semibold text-slate-900">{profile.employeeId || "[ADD EXACT EMPLOYEE ID]"}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center shrink-0">
                      <Calendar size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase">Joining Date</p>
                      <p className="font-semibold text-slate-900">{profile.joiningDate || "[ADD EXACT JOINING DATE]"}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Briefcase className="text-slate-400 mt-1" size={20} />
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Duration</p>
                    <p className="font-medium text-slate-900">6 Months</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <GraduationCap className="text-slate-400 mt-1" size={20} />
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Education</p>
                    <p className="font-medium text-slate-900">MCKV Institute of Engineering</p>
                    <p className="text-sm text-slate-500">B.Tech — Computer Science & Engineering</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-slate-400 font-black text-xl w-5 text-center mt-1">#</div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">CGPA</p>
                    <p className="font-medium text-slate-900">9.19</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TiltCard>
      </motion.div>
    </section>
  );
}
