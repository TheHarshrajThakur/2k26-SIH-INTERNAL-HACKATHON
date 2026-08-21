import React from "react";
import { AlertCircle, Calendar, ArrowRight } from "lucide-react";

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#FF9933] via-white to-[#128807] text-slate-900 text-xs sm:text-sm font-semibold px-4 py-2 flex items-center justify-between shadow-md relative z-50 border-b border-orange-100">
      <div className="flex items-center gap-2 mx-auto text-center flex-wrap justify-center bg-white/90 px-4 py-1.5 rounded-full shadow-sm animate-pulse-slow border border-amber-200/50">
        <span className="inline-flex items-center justify-center bg-orange-600 text-white rounded-full px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider">
          Urgent Update
        </span>
        <span className="flex items-center gap-1.5 text-slate-800 text-xs sm:text-sm">
          <AlertCircle className="w-4 h-4 text-orange-600 shrink-0" />
          <span>
            <strong>SIH 2026 Internal Hackathon</strong> on <strong>August 27, 2026</strong> at MIT Indore!
          </span>
        </span>
        <span className="hidden md:inline text-slate-300">|</span>
        <span className="flex items-center gap-1.5 text-emerald-800 text-xs">
          <Calendar className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Nominations lock ahead of the Sept 15 national portal deadline.</span>
        </span>
        <a
          href="#registration"
          className="inline-flex items-center gap-0.5 text-blue-700 hover:text-blue-900 underline font-extrabold ml-1.5 transition-colors duration-150 group"
        >
          Nominate Team
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
};
