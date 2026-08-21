import React, { useState, useMemo } from "react";
import { Search, Filter, BookOpen, AlertCircle, X, ChevronRight, CheckCircle2 } from "lucide-react";
import { problemStatements } from "../data/problemStatements";
import type { ProblemStatement } from "../data/problemStatements";

export const ProblemExplorer: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProblem, setSelectedProblem] = useState<ProblemStatement | null>(null);

  const categories = [
    "All",
    "Software",
    "Hardware",
    "Student Innovation",
    "AI/ML",
    "CleanTech",
    "MedTech",
    "Agriculture",
  ];

  // Filtering Logic
  const filteredProblems = useMemo(() => {
    return problemStatements.filter((problem) => {
      const matchesSearch =
        problem.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        problem.ministry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        problem.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        problem.category.some(
          (cat) => cat.toLowerCase() === selectedCategory.toLowerCase()
        );

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="problems" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Problem Statement Explorer
          </h2>
          <p className="mt-4 text-slate-600 text-base">
            Search and filter the official problem statements compiled for the SIH 2026 Internal Hackathon.
            Find the perfect challenge matching your team's skillset.
          </p>
        </div>

        {/* Search and Filters Panel */}
        <div className="mt-10 bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Input */}
            <div className="relative w-full md:flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by ID, keyword, title, or ministry..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-950 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 shadow-sm transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-semibold"
                >
                  Clear
                </button>
              )}
            </div>
            
            {/* Indicator */}
            <div className="shrink-0 flex items-center gap-1.5 text-sm font-semibold text-slate-500 bg-white border border-slate-200 px-4 py-3 rounded-xl shadow-sm">
              <Filter className="w-4 h-4 text-blue-600" />
              <span>{filteredProblems.length} Match(es)</span>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Problem Statements Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProblems.length > 0 ? (
            filteredProblems.map((problem) => (
              <div
                key={problem.id}
                className="bg-white border border-slate-200/80 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between hover:-translate-y-0.5 border-t-4 border-t-blue-600"
              >
                <div>
                  {/* Category Pills & ID */}
                  <div className="flex justify-between items-center gap-2">
                    <span className="font-mono text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                      {problem.id}
                    </span>
                    <div className="flex gap-1 flex-wrap justify-end">
                      {problem.category.slice(0, 2).map((cat) => (
                        <span
                          key={cat}
                          className="text-[10px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-100/50 px-2 py-0.5 rounded"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-slate-900 mt-4 leading-snug line-clamp-2 min-h-[3rem]">
                    {problem.title}
                  </h3>

                  {/* Sponsoring Org */}
                  <p className="text-xs font-semibold text-blue-600 mt-2 flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{problem.ministry}</span>
                  </p>

                  {/* Description Snip */}
                  <p className="text-sm text-slate-500 mt-3 line-clamp-3 leading-relaxed">
                    {problem.description}
                  </p>
                </div>

                {/* View Button */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => {
                      setSelectedProblem(problem);
                      // Prevent background scroll
                      document.body.style.overflow = "hidden";
                    }}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 hover:border-blue-200 text-sm font-bold rounded-lg transition-colors cursor-pointer"
                  >
                    View Details
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-slate-500 bg-slate-50 border border-dashed border-slate-200 rounded-xl">
              <p className="text-base font-semibold">No problem statements found matching your criteria.</p>
              <p className="text-xs text-slate-400 mt-1">Try relaxing your search terms or filters.</p>
            </div>
          )}
        </div>

        {/* Modal Backdrop & Popup */}
        {selectedProblem && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl w-full max-w-2xl border border-slate-200 shadow-2xl relative flex flex-col max-h-[90svh] animate-in fade-in zoom-in-95 duration-200">
              
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-100 flex justify-between items-start gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                      {selectedProblem.id}
                    </span>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                      {selectedProblem.ministry}
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold text-xl text-slate-900 mt-3 leading-snug">
                    {selectedProblem.title}
                  </h3>
                </div>
                <button
                  onClick={() => {
                    setSelectedProblem(null);
                    document.body.style.overflow = "auto";
                  }}
                  className="text-slate-400 hover:text-slate-700 hover:bg-slate-50 p-2 rounded-lg transition-colors cursor-pointer shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto space-y-6">
                
                {/* Description */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Problem Description</h4>
                  <p className="text-sm text-slate-700 mt-2 leading-relaxed">
                    {selectedProblem.description}
                  </p>
                </div>

                {/* Categories */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Categorization Domains</h4>
                  <div className="flex gap-2 flex-wrap mt-2">
                    {selectedProblem.category.map((cat) => (
                      <span
                        key={cat}
                        className="text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expected Deliverables */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Expected Deliverables</h4>
                  <ul className="mt-3 space-y-2">
                    {selectedProblem.deliverables.map((del, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Team Constraints Notice */}
                <div className="bg-blue-50 border border-blue-200/60 rounded-xl p-4 flex gap-3 items-start">
                  <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div className="text-xs text-blue-800 leading-relaxed">
                    <strong>Submission Limit:</strong> Per official SIH guidelines, each registered team can target and submit solutions for a <strong>maximum of 2 Problem Statements</strong> in their final proposal.
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-3 rounded-b-2xl">
                <button
                  onClick={() => {
                    setSelectedProblem(null);
                    document.body.style.overflow = "auto";
                  }}
                  className="px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-sm font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Close
                </button>
                <a
                  href="#registration"
                  onClick={() => {
                    setSelectedProblem(null);
                    document.body.style.overflow = "auto";
                  }}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg shadow transition-colors text-center"
                >
                  Apply with this ID
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
