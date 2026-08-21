import React from "react";
import { Users, UserPlus, CheckCircle, ShieldAlert, BadgeInfo, GraduationCap } from "lucide-react";

export const Guidelines: React.FC = () => {
  const rules = [
    {
      icon: <Users className="w-6 h-6 text-orange-500" />,
      title: "Team Size Constraints",
      description: "Exactly 6 members per team, including the designated Team Leader. No exceptions are allowed for larger or smaller groups.",
      borderClass: "border-t-orange-500 hover:border-orange-500/80",
      bgBadge: "bg-orange-50 text-orange-800",
    },
    {
      icon: <UserPlus className="w-6 h-6 text-indigo-500" />,
      title: "Gender Diversity Requirement",
      description: (
        <span>
          At least <strong>1 female participant is mandatory</strong> per team roster. Rosters without female representation will be blocked by internal SPOC validation.
        </span>
      ),
      highlight: true,
      borderClass: "border-indigo-400 hover:border-indigo-500/80 ring-2 ring-indigo-500/10",
      bgBadge: "bg-indigo-50 text-indigo-800",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-blue-500" />,
      title: "College Affiliation Check",
      description: "All 6 members must be enrolled students of Malwa Institute of Technology (MIT), Indore. Cross-college teams are strictly prohibited.",
      borderClass: "border-t-blue-500 hover:border-blue-500/80",
      bgBadge: "bg-blue-50 text-blue-800",
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-rose-500" />,
      title: "Naming Policy Rules",
      description: "Select a unique, professional team name. Refrain from including the college name or acronym (e.g., 'MIT', 'Malwa') in your team identity.",
      borderClass: "border-t-rose-500 hover:border-rose-500/80",
      bgBadge: "bg-rose-50 text-rose-800",
    },
    {
      icon: <BadgeInfo className="w-6 h-6 text-purple-500" />,
      title: "Category & Track Scope",
      description: "Submit projects in the Software Edition, Hardware Edition (multi-disciplinary teams highly encouraged), or the open Student Innovation category.",
      borderClass: "border-t-purple-500 hover:border-purple-500/80",
      bgBadge: "bg-purple-50 text-purple-800",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-emerald-500" />,
      title: "Mentor Selection",
      description: "Optionally add up to 2 faculty or industry mentors (with 5+ years experience) to guide your project development after clear internal selection.",
      borderClass: "border-t-emerald-500 hover:border-emerald-500/80",
      bgBadge: "bg-emerald-50 text-emerald-800",
    },
  ];

  return (
    <section id="eligibility" className="py-16 bg-gradient-to-b from-slate-50 via-blue-50/20 to-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-extrabold text-blue-600 bg-blue-100/60 px-3 py-1 rounded-full uppercase tracking-wider">
            Rulebook & Compliance
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mt-3">
            Team Eligibility & Guidelines
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Verify your roster constitution against the official AICTE Smart India Hackathon directives. All screening protocols are strictly enforced.
          </p>
        </div>

        {/* Guidelines Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rules.map((rule, idx) => (
            <div
              key={idx}
              className={`bg-white border-t-4 ${rule.borderClass} rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1`}
            >
              <div>
                <div className={`p-3 rounded-lg w-fit ${rule.bgBadge} border border-white shadow-sm`}>
                  {rule.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 mt-4 group-hover:text-blue-600 transition-colors duration-150">
                  {rule.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {rule.description}
                </p>
              </div>

              {rule.highlight && (
                <div className="mt-4 pt-3 border-t border-indigo-100 text-[10px] font-extrabold text-indigo-700 uppercase tracking-widest flex items-center gap-1.5 animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                  Mandatory Compliance Check
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Warning Callout Box */}
        <div className="mt-12 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-orange-200/50 rounded-xl p-5 flex flex-col sm:flex-row items-start gap-4 shadow-sm animate-glow">
          <div className="bg-orange-500 text-white p-2.5 rounded-lg shrink-0 shadow-md">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-extrabold text-orange-950 text-sm">SPOC Compliance Warning</h4>
            <p className="text-xs sm:text-sm text-orange-900 mt-1 leading-relaxed">
              Teams failing to satisfy any of these compliance rules (especially team size and gender mix)
              will be automatically disqualified from the Internal Hackathon shortlist. Ensure your roster
              contains exactly 6 students and has at least one female teammate before submitting.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
