"use client";

import React from "react";
import { Award, ShieldCheck, Users, CheckCircle2, TrendingUp } from "lucide-react";

export default function VisazStats() {
  const stats = [
    {
      value: "15+",
      label: "Years of Immigration Experience",
      subtext: "Mastery in Australia & Canada Laws",
      icon: <Award className="w-5 h-5 text-[#E20935]" />
    },
    {
      value: "30 K+",
      label: "Applications Processed",
      subtext: "High-Volume Real-World Exposure",
      icon: <CheckCircle2 className="w-5 h-5 text-[#E20935]" />
    },
    {
      value: "15+",
      label: "Licensed Legal Counsel Staff",
      subtext: "MARA & CICC Regulated Attorneys",
      icon: <ShieldCheck className="w-5 h-5 text-[#E20935]" />
    },
    {
      value: "100 K+",
      label: "Seeking Advice Every Year",
      subtext: "Trusted Nationwide Footprint",
      icon: <Users className="w-5 h-5 text-[#E20935]" />
    },
    {
      value: "99.9%",
      label: "Audited Visa Success Rate",
      subtext: "Mission Zero Defect Protocol",
      icon: <TrendingUp className="w-5 h-5 text-[#E20935]" />
    }
  ];

  return (
    <section className="bg-[#16171A] text-white py-12 sm:py-16 border-y border-white/10 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#E20935]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 text-center">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className={`p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#E20935]/50 transition-all duration-300 group ${
                idx === 4 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-[#E20935]/15 border border-[#E20935]/30 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E20935] font-mono tracking-tight">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mt-2 leading-snug">
                {s.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                {s.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
