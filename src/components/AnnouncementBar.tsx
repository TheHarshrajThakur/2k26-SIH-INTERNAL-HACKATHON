import React from "react";
import { AlertCircle, ArrowRight } from "lucide-react";

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#FF9933] via-white to-[#128807] text-slate-900 text-[11px] sm:text-xs md:text-sm font-semibold px-2 sm:px-4 py-1.5 sm:py-2 flex items-center justify-between shadow-md relative z-50 border-b border-orange-100">
      <div className="flex items-center gap-1.5 sm:gap-2 mx-auto text-center justify-center bg-white/90 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-sm border border-amber-200/50 max-w-full">
        {/* Hide badge on mobile */}
        <span className="hidden md:inline-flex items-center justify-center bg-orange-600 text-white rounded-full px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider">
          Urgent Update
        </span>
        
        <span className="flex items-center gap-1 text-slate-800 text-[11px] sm:text-xs md:text-sm whitespace-nowrap">
          <AlertCircle className="w-3.5 h-3.5 text-orange-600 shrink-0 hidden sm:inline" />
          <span>
            {/* Desktop / Tablet Text */}
            <span className="hidden sm:inline">
              <strong>SIH 2026 Internal Hackathon</strong> on <strong>August 27, 2026</strong> at MIT Indore!
            </span>
            {/* Mobile Text */}
            <span className="sm:hidden text-[10px] font-extrabold">
              SIH 2026 Internal Hackathon: August 27, 2026
            </span>
          </span>
        </span>

        <a
          href="https://forms.gle/vXuGFZbKiDAd9iQc9"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-0.5 px-2 py-0.5 sm:px-3 sm:py-1 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-[9px] sm:text-[11px] font-extrabold rounded shadow transition-all duration-300 transform hover:-translate-y-0.5 shrink-0 group ml-1"
        >
          Register
          <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
};
