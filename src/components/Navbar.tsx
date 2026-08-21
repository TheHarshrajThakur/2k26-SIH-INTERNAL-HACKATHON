import React, { useState, useEffect } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { MITLogo, SIHLogo } from "./Logos";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Overview", href: "#overview" },
    { label: "Timeline", href: "#timeline" },
    { label: "Registration", href: "#registration" },
    { label: "SPOC Desk", href: "#spoc" },
  ];

  return (
    <>
      <nav
        className={`sticky top-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2"
            : "bg-white/90 backdrop-blur-sm shadow-sm py-3"
        } border-b border-slate-200/80`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center gap-4">
            
            {/* Logos Panel: SIH and MIT Side-by-Side with text labels */}
            <div className="flex items-center gap-3 sm:gap-4 md:gap-5 shrink-0">
              {/* MIT Logo & Name */}
              <div className="flex items-center gap-2">
                <a href="http://mitindore.co.in" target="_blank" rel="noreferrer" className="transition-transform duration-200 hover:scale-105 shrink-0 block" title="Visit Malwa Institute of Technology Website">
                  <MITLogo className="h-9 sm:h-12 w-auto" />
                </a>
                <div className="hidden md:block leading-none text-left">
                  <span className="font-display font-extrabold text-[#D92C2C] text-sm tracking-tight block">MALWA</span>
                  <span className="text-[9px] text-slate-500 uppercase tracking-wider block font-bold">Institute of Technology</span>
                </div>
              </div>

              <div className="h-8 w-px bg-slate-200 hidden md:block" />

              {/* SIH Logo & Name */}
              <div className="flex items-center gap-2">
                <a href="https://sih.gov.in" target="_blank" rel="noreferrer" className="transition-transform duration-200 hover:scale-105 shrink-0 block" title="Visit Smart India Hackathon Website">
                  <SIHLogo className="h-9 sm:h-12 w-auto" />
                </a>
                <div className="hidden md:block leading-none text-left">
                  <span className="font-display font-extrabold text-[#115E59] text-sm tracking-tight block">SMART INDIA</span>
                  <span className="text-[9px] text-[#D97706] uppercase tracking-wider block font-extrabold">Hackathon 2026</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation Link Cluster */}
            <div className="hidden xl:flex items-center gap-1.5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3.5 py-2 text-xs sm:text-sm font-extrabold text-slate-700 hover:text-blue-600 rounded-lg hover:bg-blue-50/50 transition-all duration-150"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#registration"
                className="ml-3 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-extrabold rounded-lg shadow-md hover:shadow-lg transition-glow flex items-center gap-1.5"
              >
                <GraduationCap className="w-4 h-4" />
                Register Team
              </a>
            </div>

            {/* Mobile Hamburger Menu Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden text-slate-600 hover:text-slate-900 focus:outline-none p-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>

        {/* Mobile Navigation Sidebar Menu */}
        {isOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl animate-slide-up duration-200">
            <div className="px-3 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-sm font-extrabold text-slate-800 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 px-4">
                <a
                  href="#registration"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-bold rounded-lg shadow-md transition-all"
                >
                  Register Team
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
