import React from "react";

// Malwa Institute of Technology official logo
export const MITLogo: React.FC<{ className?: string }> = ({ className = "h-12" }) => {
  return (
    <img 
      src="/logo1.png" 
      className={`${className} object-contain rounded-full border border-slate-200/60 shadow-sm`} 
      alt="Malwa Institute of Technology Indore Logo" 
    />
  );
};

// Smart India Hackathon official logo
export const SIHLogo: React.FC<{ className?: string }> = ({ className = "h-12" }) => {
  return (
    <img 
      src="/logo2.png" 
      className={`${className} object-contain rounded-full border border-slate-200/60 shadow-sm`} 
      alt="Smart India Hackathon 2026 Logo" 
    />
  );
};
