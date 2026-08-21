import React from "react";
import { DoorOpen, Play, FileCheck, UploadCloud, Flag } from "lucide-react";

export const Timeline: React.FC = () => {
  const steps = [
    {
      phase: "Phase 1",
      title: "Team Registration",
      date: "August 2026",
      icon: <DoorOpen className="w-5 h-5" />,
      desc: "Teams register on the campus portal and lock in their 6-member student team.",
      color: "bg-blue-600 border-blue-200 shadow-blue-500/35",
      badgeColor: "bg-blue-50 text-blue-800 border-blue-100",
    },
    {
      phase: "Phase 2",
      title: "MIT Internal Screening",
      date: "August 27, 2026",
      icon: <Play className="w-5 h-5" />,
      desc: "Internal screening review and prototype jury presentation starting 09:00 AM at respective labs.",
      color: "bg-orange-600 border-orange-200 shadow-orange-500/35",
      badgeColor: "bg-orange-50 text-orange-800 border-orange-100",
      active: true,
    },
    {
      phase: "Phase 3",
      title: "Jury Shortlisting",
      date: "Late August 2026",
      icon: <FileCheck className="w-5 h-5" />,
      desc: "Jury aggregates criteria scores and nominates the top selected teams.",
      color: "bg-indigo-600 border-indigo-200 shadow-indigo-500/35",
      badgeColor: "bg-indigo-50 text-indigo-800 border-indigo-100",
    },
    {
      phase: "Phase 4",
      title: "National Portal Upload",
      date: "Deadline: Sept 15, 2026",
      icon: <UploadCloud className="w-5 h-5" />,
      desc: "Shortlisted teams upload solutions on the national SIH portal certified by the Principal's seal.",
      color: "bg-emerald-600 border-emerald-200 shadow-emerald-500/35",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-100",
    },
    {
      phase: "Phase 5",
      title: "National Grand Finale",
      date: "December 2026",
      icon: <Flag className="w-5 h-5" />,
      desc: "Finalists travel to pan-India nodal centers for the rigorous 36-hour non-stop hackathon.",
      color: "bg-rose-600 border-rose-200 shadow-rose-500/35",
      badgeColor: "bg-rose-50 text-rose-800 border-rose-100",
    },
  ];

  return (
    <section id="timeline" className="py-16 bg-white border-b border-slate-200 relative overflow-hidden">
      
      {/* Colorful background glow */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-100/50 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 -left-40 w-80 h-80 bg-indigo-100/40 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-extrabold text-indigo-600 bg-indigo-100/60 px-3 py-1 rounded-full uppercase tracking-wider">
            Roadmap Sequence
          </span>
          <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight mt-3">
            Event Timeline & Milestones
          </h2>
          <p className="mt-3 text-slate-600 text-sm">
            Track key milestones starting from campus screening nominations to the national grand finale.
          </p>
        </div>

        {/* Timeline Sequence */}
        <div className="mt-16 relative">
          
          {/* Connecting Line (Desktop Horizontal) - Unified Blue/Indigo Gradient */}
          <div className="absolute left-[10%] right-[10%] top-6 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 -translate-y-1/2 hidden lg:block z-0" />

          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-4">
            {steps.map((step, idx) => {
              return (
                <div key={idx} className="relative flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center gap-4 lg:gap-0 lg:px-2 group">
                  
                  {/* Connecting Line Segment (Mobile Vertical) - Unified Blue/Indigo Gradient */}
                  {idx < steps.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-[-3.25rem] w-0.5 bg-gradient-to-b from-blue-600 to-indigo-600 -translate-x-1/2 block lg:hidden z-0" />
                  )}

                  {/* Glowing Node - Consistent borders and sizes */}
                  <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center text-white shrink-0 z-10 transition-transform duration-300 group-hover:scale-110 shadow-lg relative ${step.color}`}>
                    {step.icon}
                    {/* Glowing Pulse indicator inside the node wrapper */}
                    {step.active && (
                      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-orange-600 border-2 border-white animate-ping"></span>
                    )}
                  </div>

                  {/* Text Container */}
                  <div className="flex-grow flex flex-col items-start lg:items-center text-left lg:text-center">
                    {/* Phase tag */}
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mt-1 lg:mt-4">
                      {step.phase}
                    </span>
                    
                    {/* Date badge */}
                    <span className={`text-xs font-extrabold px-3 py-1 rounded-full border mt-1.5 ${step.badgeColor} shadow-sm w-fit`}>
                      {step.date}
                    </span>

                    {/* Title */}
                    <h3 className="font-display font-bold text-slate-900 text-sm mt-3 lg:mt-4 lg:min-h-[2.5rem] leading-snug group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed max-w-sm">
                      {step.desc}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
