import React, { useState, useEffect } from "react";
import { Calendar, Users, UserPlus, GraduationCap, Clock, ArrowRight } from "lucide-react";

export const Hero: React.FC = () => {
  // Target: August 27, 2026, 09:00 AM IST
  const targetDate = new Date("2026-08-27T09:00:00+05:30").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    ended: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, ended: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        ended: false,
      });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const stats = [
    {
      icon: <Calendar className="w-6 h-6 text-orange-500" />,
      title: "Event Date",
      value: "August 27, 2026",
      desc: "Held at MIT Indore Campus",
      borderClass: "border-t-orange-500",
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-500" />,
      title: "Team Size",
      value: "6 Members Exactly",
      desc: "1 Leader + 5 members, no size exceptions",
      borderClass: "border-t-indigo-500",
    },
    {
      icon: <UserPlus className="w-6 h-6 text-emerald-500" />,
      title: "Gender Diversity",
      value: "1 Female Member Min",
      desc: "Mandatory per team validation",
      borderClass: "border-t-emerald-500",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-rose-500" />,
      title: "Eligibility Limit",
      value: "MIT Indore Only",
      desc: "No cross-college teams permitted",
      borderClass: "border-t-rose-500",
    },
  ];

  return (
    <section
      id="overview"
      className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 text-white py-20 md:py-28 overflow-hidden border-b border-indigo-900/50"
    >
      {/* Decorative Shifting Blobs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/35 rounded-full blur-[100px] animate-float-slow -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px] animate-float-medium -z-10" />
      <div className="absolute top-10 right-1/4 w-40 h-40 bg-emerald-500/20 rounded-full blur-[80px] -z-10" />

      {/* Grid line overlay watermark */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Static Badge - Crimson & display font */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs bg-white/5 border border-white/10 mb-6 backdrop-blur-md font-display tracking-wide select-none text-[#EF4444]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
          <span className="font-extrabold">Malwa Institute of Technology, Indore</span>
        </span>

        {/* Headline */}
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto animate-slide-up">
          Smart India Hackathon 2026
          <span className="block mt-2 bg-gradient-to-r from-orange-400 via-white to-emerald-400 bg-clip-text text-transparent animate-gradient-bg">
            MIT Internal Hackathon
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Empowering student innovators for{" "}
          <strong className="text-white font-extrabold">#InnovationseAtmaNirbharBharat</strong>.
          Selected teams will be officially nominated to the national AICTE portal.
        </p>

        {/* Action Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://forms.gle/vXuGFZbKiDAd9iQc9"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold rounded-lg shadow-lg hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Register Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Countdown Timer Display (Vibrant Orange border glow) */}
        <div className="mt-12 max-w-2xl mx-auto bg-slate-950/80 border border-indigo-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md animate-glow relative overflow-hidden">
          
          <div className="flex items-center justify-center gap-2 mb-4 text-indigo-300 font-bold text-xs tracking-wider uppercase">
            <Clock className="w-4.5 h-4.5 text-orange-400" />
            <span>Time Remaining to Hackathon Launch</span>
          </div>

          {timeLeft.ended ? (
            <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 py-2 animate-bounce">
              🚀 The Internal Hackathon is live at MIT Indore!
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
              {/* Days */}
              <div className="bg-white/5 border border-white/10 p-3 sm:p-4 rounded-xl flex flex-col items-center shadow-inner hover:bg-white/10 transition-colors">
                <span className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                  {String(timeLeft.days).padStart(2, "0")}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase mt-1">
                  Days
                </span>
              </div>
              {/* Hours */}
              <div className="bg-white/5 border border-white/10 p-3 sm:p-4 rounded-xl flex flex-col items-center shadow-inner hover:bg-white/10 transition-colors">
                <span className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase mt-1">
                  Hours
                </span>
              </div>
              {/* Minutes */}
              <div className="bg-white/5 border border-white/10 p-3 sm:p-4 rounded-xl flex flex-col items-center shadow-inner hover:bg-white/10 transition-colors">
                <span className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase mt-1">
                  Mins
                </span>
              </div>
              {/* Seconds */}
              <div className="bg-white/5 border border-white/10 p-3 sm:p-4 rounded-xl flex flex-col items-center shadow-inner hover:bg-white/10 transition-colors">
                <span className="text-2xl sm:text-4xl font-extrabold text-orange-400 font-display">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase mt-1">
                  Secs
                </span>
              </div>
            </div>
          )}
          <div className="mt-4 text-[10px] sm:text-xs text-indigo-300">
            Target Event Clock: August 27, 2026, 09:00 AM IST
          </div>
        </div>

        {/* Stats Grid with Colorful Top Borders and Hover Glows */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto text-left">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`bg-slate-900/60 border border-white/10 border-t-4 ${stat.borderClass} rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex items-start gap-4 hover:bg-slate-900/90 backdrop-blur-md`}
            >
              <div className="p-3 bg-white/5 rounded-lg shrink-0 border border-white/5">
                {stat.icon}
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.title}</h3>
                <p className="text-lg font-extrabold text-white mt-1.5">{stat.value}</p>
                <p className="text-xs text-slate-400 mt-1 leading-normal">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
