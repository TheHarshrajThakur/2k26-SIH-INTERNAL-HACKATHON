import React from "react";
import { Scale, CheckSquare, Download, ShieldAlert, FileText } from "lucide-react";

export const SPOCDesk: React.FC = () => {
  const criteria = [
    {
      title: "Novelty & Innovation",
      description: "Uniqueness of the solution. Evaluates if the approach proposes a new technique or bypasses limitations of existing systems.",
      badgeColor: "bg-blue-50 border-blue-100 text-blue-800",
      bandClass: "border-l-blue-500 bg-blue-50/20",
    },
    {
      title: "Technical Complexity",
      description: "Architecture choice, database efficiency, sensor integration, or ML model accuracy. Higher weights for working, testable code/circuit modules.",
      badgeColor: "bg-indigo-50 border-indigo-100 text-indigo-800",
      bandClass: "border-l-indigo-500 bg-indigo-50/20",
    },
    {
      title: "Practicability & Feasibility",
      description: "Can this solution be manufactured or scaled in real-world environments? Looks at implementation constraints and cost analysis.",
      badgeColor: "bg-teal-50 border-teal-100 text-teal-800",
      bandClass: "border-l-teal-500 bg-teal-50/20",
    },
    {
      title: "Societal Impact",
      description: "Direct impact on rural populations, agricultural outcomes, green energy metrics, or mining safety margins as specified in ministries.",
      badgeColor: "bg-amber-50 border-amber-100 text-amber-800",
      bandClass: "border-l-amber-500 bg-amber-50/20",
    },
    {
      title: "Presentation & Q&A Clarity",
      description: "Ability of the team (especially members other than the leader) to explain structural logic and answer jury technical challenges.",
      badgeColor: "bg-rose-50 border-rose-100 text-rose-800",
      bandClass: "border-l-rose-500 bg-rose-50/20",
    },
  ];

  const handleDownload = () => {
    // Simulated template download alert
    alert(
      "⬇️ Simulating Download of 'Annexure_A_MIT_Nomination_Letter.docx'...\nIn a production environment, this triggers a direct download of the AICTE authorized format containing the college letterhead and seal fields."
    );
  };

  return (
    <section id="spoc" className="py-16 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      
      {/* Decorative gradient blur background */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-purple-100/40 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-extrabold text-blue-600 bg-blue-100/60 px-3 py-1 rounded-full uppercase tracking-wider">
            Evaluation & Seals
          </span>
          <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight mt-3">
            SPOC Desk & Evaluation Criteria
          </h2>
          <p className="mt-3 text-slate-600 text-sm">
            Read carefully to align your project files with the official AICTE screening standards and college certification workflows.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Column 1: Jury Evaluation Matrix */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-md flex flex-col justify-between hover:shadow-lg transition-all duration-300">
            <div>
              <h3 className="font-display font-bold text-lg text-slate-900 flex items-center gap-2 border-b pb-4 border-slate-100">
                <Scale className="w-5.5 h-5.5 text-blue-600" />
                Jury Selection Scoring Matrix
              </h3>
              <p className="text-xs text-slate-500 mt-2">
                All submissions at Malwa Institute of Technology will be graded on a 100-point scale based on the following metrics:
              </p>

              <div className="mt-6 space-y-3">
                {criteria.map((c, idx) => (
                  <div key={idx} className={`p-3 border-l-4 ${c.bandClass} rounded-r-lg space-y-1 hover:bg-slate-50 transition-colors`}>
                    <span className="font-bold text-slate-800 text-xs block">{c.title}</span>
                    <p className="text-[11px] text-slate-600 leading-relaxed">{c.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200/60 rounded-xl p-4 mt-6 text-xs text-amber-800 flex gap-2 shadow-sm">
              <ShieldAlert className="w-5 h-5 shrink-0 text-amber-600" />
              <span>
                <strong>Jury Note:</strong> Plagiarism of codebase or duplication of existing repositories from previous years will result in instant disqualification.
              </span>
            </div>
          </div>

          {/* Column 2: SPOC Desk Instructions */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-md flex flex-col justify-between hover:shadow-lg transition-all duration-300">
            <div className="space-y-6">
              <h3 className="font-display font-bold text-lg text-slate-900 flex items-center gap-2 border-b pb-4 border-slate-100">
                <CheckSquare className="w-5.5 h-5.5 text-indigo-600" />
                Official SPOC Guidelines
              </h3>

              <div className="space-y-6 text-xs text-slate-700 mt-4">
                {/* Step 1 */}
                <div className="relative flex gap-4 items-start group">
                  {/* Connecting Line Segment */}
                  <div className="absolute left-4 top-8 -bottom-8 w-0.5 bg-gradient-to-b from-blue-600 to-orange-600 -translate-x-1/2 z-0" />
                  
                  <div className="relative flex flex-col items-center shrink-0">
                    <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-extrabold flex items-center justify-center shadow-md text-xs z-10 transition-transform duration-200 group-hover:scale-105">
                      1
                    </span>
                  </div>
                  <p className="leading-relaxed pt-1 flex-grow">
                    <strong>Annexure A Verification:</strong> The shortlisted top 50 teams must download the Annexure A template, fill in their respective member details, and verify signatures with the department heads.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="relative flex gap-4 items-start group">
                  {/* Connecting Line Segment */}
                  <div className="absolute left-4 top-8 -bottom-8 w-0.5 bg-gradient-to-b from-orange-600 to-emerald-600 -translate-x-1/2 z-0" />
                  
                  <div className="relative flex flex-col items-center shrink-0">
                    <span className="w-8 h-8 rounded-full bg-orange-600 text-white font-extrabold flex items-center justify-center shadow-md text-xs z-10 transition-transform duration-200 group-hover:scale-105">
                      2
                    </span>
                  </div>
                  <p className="leading-relaxed pt-1 flex-grow">
                    <strong>College Seal:</strong> Completed Annexure A documents must be brought to the SPOC Desk in the Administrative block for official stamp authorization and Principal signature.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="relative flex gap-4 items-start group">
                  <div className="relative flex flex-col items-center shrink-0">
                    <span className="w-8 h-8 rounded-full bg-emerald-600 text-white font-extrabold flex items-center justify-center shadow-md text-xs z-10 transition-transform duration-200 group-hover:scale-105">
                      3
                    </span>
                  </div>
                  <p className="leading-relaxed pt-1 flex-grow">
                    <strong>Portal Lock:</strong> Once approved, the SPOC will issue a custom authorization credential allowing the Team Leader to lock their submission on the National SIH Portal.
                  </p>
                </div>
              </div>

              {/* Resource Downloads with vibrant button action */}
              <div className="border border-slate-200/80 rounded-xl p-5 bg-gradient-to-r from-blue-50 to-indigo-50/50 space-y-4 shadow-inner">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <FileText className="w-4 h-4 text-blue-600 animate-pulse" />
                  <span>Shortlisting Documentation</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Download templates required for final selection and verification by the institution's primary SPOC.
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={handleDownload}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs rounded-lg shadow transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Annexure A Template
                  </button>
                  <a
                    href="https://sih.gov.in"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-semibold text-xs rounded-lg transition-colors text-center"
                  >
                    National SIH Website
                  </a>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 mt-6 italic">
              * For queries, report to the SPOC coordination office at Malwa Institute of Technology administrative wing.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
