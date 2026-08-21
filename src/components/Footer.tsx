import React from "react";
import { MapPin, Phone, Mail, Globe, ShieldCheck } from "lucide-react";
import { MITLogo } from "./Logos";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-xs md:text-sm">
      
      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Col 1: Institute Coordinates */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white">
            <MITLogo className="h-8 w-8" />
            <span className="font-display font-extrabold text-sm tracking-tight">MIT INDORE PORTAL</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Malwa Institute of Technology (MIT) is a premier engineering college dedicated to empowering
            innovation and research, located on Bypass Road, Indore, Madhya Pradesh.
          </p>
          <div className="space-y-2 text-xs">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
              <span>Malwa Institute of Technology, Indore Bypass Road, Indore, MP, 453771</span>
            </div>
          </div>
        </div>

        {/* Col 2: National SIH AICTE contacts */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-xs uppercase tracking-wider">National SIH Helpdesk</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            For issues concerning national portals, registration extensions, or central guidelines:
          </p>
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-500 shrink-0" />
              <a href="mailto:sih@aicte-india.org" className="hover:text-white transition-colors">
                sih@aicte-india.org
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-500 shrink-0" />
              <span>011 2958 1239 / 40 / 41</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-500 shrink-0" />
              <a href="https://sih.gov.in" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                sih.gov.in (National Portal)
              </a>
            </div>
          </div>
        </div>

        {/* Col 3: College Organizing Committee contacts */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-xs uppercase tracking-wider">College Organizing Team</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Reach out to our campus internal screening helpdesk for site check-in or team edits:
          </p>
          <div className="space-y-4 text-xs mt-3">
            {/* SPOC Contact */}
            <div className="space-y-1">
              <span className="font-semibold text-slate-400 block uppercase tracking-wider text-[10px]">SPOC</span>
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-slate-200">Prof. Deepika Sharma</span>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <a href="tel:+917879771707" className="text-blue-400 hover:text-blue-300 transition-colors hover:underline font-semibold">
                  +91 7879771707
                </a>
              </div>
            </div>

            {/* Student Coordinators */}
            <div className="space-y-2">
              <span className="font-semibold text-slate-400 block uppercase tracking-wider text-[10px]">Student Coordinators</span>
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-slate-200">Harshraj Singh Thakur</span>
                  <span className="text-slate-600 hidden sm:inline">•</span>
                  <a href="tel:+919303471913" className="text-blue-400 hover:text-blue-300 transition-colors hover:underline font-semibold">
                    +91 9303471913
                  </a>
                </div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-slate-200">Anurag Sharma</span>
                  <span className="text-slate-600 hidden sm:inline">•</span>
                  <a href="tel:+917583853638" className="text-blue-400 hover:text-blue-300 transition-colors hover:underline font-semibold">
                    +91 7583853638
                  </a>
                </div>
              </div>
            </div>

            {/* Email Support */}
            <div className="flex items-center gap-2 border-t border-slate-800 pt-3 text-[11px] text-slate-400 mt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Email: </span>
              <a href="mailto:sih.coordinator@mitindore.edu.in" className="hover:text-white text-blue-400 transition-colors hover:underline">
                sih.coordinator@mitindore.edu.in
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 text-slate-500 border-t border-slate-900/60 py-6 text-center text-xs">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Malwa Institute of Technology, Indore. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed for 
            <span className="font-semibold text-slate-400">Smart India Hackathon 2026 Internal Screening</span>
          </p>
        </div>
      </div>

    </footer>
  );
};
