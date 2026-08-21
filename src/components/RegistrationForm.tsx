import React from "react";
import { Landmark, ArrowUpRight, Award } from "lucide-react";

export const RegistrationForm: React.FC = () => {
  const handleOpenForm = () => {
    alert("🔗 Directing to official SIH 2026 Internal Registration Form...\n(Placeholder: The form link will be integrated here shortly)");
  };

  return (
    <section id="registration" className="py-16 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      
      {/* Decorative colored blobs */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-[90px] -z-10 animate-float-slow" />
      <div className="absolute top-10 right-10 w-60 h-60 bg-indigo-400/25 rounded-full blur-[80px] -z-10 animate-float-medium" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Card Container with animated pulsing gradient glow borders */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-8 sm:p-12 shadow-xl max-w-2xl mx-auto space-y-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-t-blue-600 animate-glow">
          
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center mx-auto shadow-md transform hover:rotate-6 transition-transform">
            <Landmark className="w-7 h-7" />
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-extrabold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full uppercase tracking-wider">
              Nomination Registrations
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight mt-2">
              Team Nomination
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              Submit your team details and project details on our campus internal selection portal. Verify eligibility rules beforehand.
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={handleOpenForm}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold rounded-lg shadow-md hover:shadow-indigo-500/35 transition-all duration-300 transform hover:-translate-y-0.5 text-sm cursor-pointer"
            >
              Open Registration Form
              <ArrowUpRight className="w-4.5 h-4.5" />
            </button>
          </div>

          <div className="border-t border-slate-100 pt-6 flex items-center justify-center gap-1.5 text-xs text-slate-500 font-medium">
            <Award className="w-4 h-4 text-amber-500 animate-bounce" />
            <span>Nominations close ahead of September 15, 2026 portal deadline.</span>
          </div>

        </div>

      </div>
    </section>
  );
};
