import React from 'react';
import { profile } from '../data/profile';

export default function IDCard() {
  return (
    <div className="relative w-[290px] h-[440px] bg-[#f0f2f5] rounded-[16px] shadow-2xl border border-white/40 flex flex-col items-center pt-6 z-10 overflow-hidden">
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />

      {/* Green Strip on Left */}
      <div className="absolute left-0 top-0 bottom-0 w-5 bg-[#2e7d32]" />

      {/* Content Container */}
      <div className="w-full pl-5 flex flex-col items-center relative z-10 mt-4 h-full">

        {/* Logo Section */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#73dafb] via-[#21a2f3] to-[#0b58cc] flex items-center justify-center relative overflow-hidden mb-1.5 shadow-md border border-white/50">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              <path d="M2 12h20"></path>
            </svg>
          </div>
          <div className="flex items-center gap-1.5 text-[12px] font-bold tracking-wide">
            <span className="w-1 h-1 rounded-full bg-[#00aeee]"></span>
            <div className="flex">
              <span className="text-[#00aeee]">Teck</span>
              <span className="text-[#414141] font-semibold">Valley</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-[#00aeee]"></span>
          </div>
        </div>

        {/* Avatar Section */}
        <div className="relative mb-5 mt-2">
          <div className="w-32 h-32 rounded-full border-[2px] border-[#2e7d32] p-1 shadow-md bg-white">
            <div className="w-full h-full rounded-full bg-[#d9d9d9] overflow-hidden shadow-inner">
              <img 
                src="/image.png" 
                alt="Profile" 
                className="w-full h-full object-cover" 
                style={{ imageRendering: '-webkit-optimize-contrast', transform: 'translateZ(0)' }}
              />
            </div>
          </div>
        </div>

        {/* Employee Details */}
        <div className="text-center flex flex-col items-center">
          <h2 className="text-[#222222] font-extrabold text-[15px] uppercase tracking-wide mb-1">
            {profile.name}
          </h2>
          <p className="font-bold text-[11px] tracking-wide mb-1.5 px-3 py-0.5 rounded-full bg-[#2e7d32]/10 border border-[#2e7d32]/30 text-[#2e7d32]">
            Trainee
          </p>
          <p className="text-[#666666] font-bold text-[11px] tracking-widest mt-0.5">
            {profile.employeeId || 'TK-12688'}
          </p>
        </div>

        {/* Signature Area */}
        <div className="mt-auto w-full flex flex-col items-center pb-5">
          <p className="text-lg text-[#222] mb-1 opacity-80" style={{ fontFamily: 'var(--font-cursive, cursive)' }}>
            A. Signature
          </p>
          <div className="w-28 h-[1px] bg-[#aaa] mb-1.5" />
          <p className="text-[#888] text-[9px] font-semibold tracking-[0.15em] uppercase">
            Authorized Signatory
          </p>
        </div>

      </div>
    </div>
  );
}
